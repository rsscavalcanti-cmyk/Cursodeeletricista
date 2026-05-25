/* ─── CourseApp: localStorage API ──────────────────────────────────────────────── */
const CourseApp = (() => {
  'use strict';

  const STORAGE_KEY = 'eletricista_v1';

  let _state = null;

  function _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      _state = raw ? JSON.parse(raw) : _default();
      if (_state.version !== 1) _state = _default();
    } catch (e) {
      _state = _default();
    }
  }

  function _default() {
    return {
      version: 1,
      studentName: '',
      cpf: '',
      startDate: null,
      completionDate: null,
      courseComplete: false,
      certificateId: null,
      lessons: {},
      quizScores: {}
    };
  }

  function _save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(_state)); }
    catch (e) {}
  }

  function _total() {
    if (typeof COURSE_DATA === 'undefined') return 40;
    return COURSE_DATA.modules.reduce((s, m) => s + m.lessons.length + 1, 0);
  }

  function _checkComplete() {
    if (typeof COURSE_DATA === 'undefined') return;
    const allModules = COURSE_DATA.modules.length;
    const passed = Object.keys(_state.quizScores).filter(
      k => _state.quizScores[k].passed
    ).length;
    if (passed >= allModules && !_state.courseComplete) {
      _state.courseComplete = true;
      _state.completionDate = new Date().toLocaleDateString('pt-BR');
      _state.certificateId = 'ELE-' + Date.now().toString(36).toUpperCase().slice(-8);
    }
  }

  function _avgScore() {
    const scores = Object.values(_state.quizScores);
    if (!scores.length) return 0;
    const avg = scores.reduce((s, q) => s + (q.score / q.total) * 100, 0) / scores.length;
    return Math.round(avg);
  }

  /* ── Public API ────────────────────────────────────────────────────────────────── */

  function init() { _load(); }

  function getUser() {
    if (!_state) _load();
    return { name: _state.studentName, cpf: _state.cpf };
  }

  function setUser(name, cpf) {
    if (!_state) _load();
    if (!_state.startDate) _state.startDate = new Date().toLocaleDateString('pt-BR');
    _state.studentName = name.trim();
    _state.cpf = cpf.trim();
    _save();
  }

  function hasUser() {
    if (!_state) _load();
    return !!(_state.studentName && _state.cpf);
  }

  function getProgress() {
    if (!_state) _load();
    const total = _total();
    const done  = Object.values(_state.lessons).filter(l => l.done).length;
    return {
      studentName:    _state.studentName,
      cpf:            _state.cpf,
      startDate:      _state.startDate,
      completionDate: _state.completionDate,
      courseComplete: _state.courseComplete,
      certificateId:  _state.certificateId,
      lessons:        _state.lessons,
      quizScores:     _state.quizScores,
      totalDone:      done,
      totalLessons:   total,
      overallPct:     total ? Math.round((done / total) * 100) : 0,
      averageScore:   _avgScore(),
      modulePercent(modId) {
        if (typeof COURSE_DATA === 'undefined') return 0;
        const mod = COURSE_DATA.modules.find(m => m.id === +modId);
        if (!mod) return 0;
        const ids = [...mod.lessons.map(l => `${modId}-${l.id}`), `${modId}-quiz`];
        const d = ids.filter(id => _state.lessons[id]?.done).length;
        return Math.round((d / ids.length) * 100);
      },
      isLessonDone(modId, lessonId) {
        return !!_state.lessons[`${modId}-${lessonId}`]?.done;
      },
      isQuizPassed(modId) {
        return !!_state.quizScores[modId]?.passed;
      }
    };
  }

  function markLesson(modId, lessonId) {
    if (!_state) _load();
    _state.lessons[`${modId}-${lessonId}`] = { done: true, at: new Date().toISOString() };
    _save();
  }

  function saveQuiz(modId, score, total) {
    if (!_state) _load();
    const passed = score >= Math.ceil(total * 0.6);
    _state.quizScores[modId] = { score, total, passed };
    _state.lessons[`${modId}-quiz`] = {
      done: passed, score, total, at: new Date().toISOString()
    };
    _checkComplete();
    _save();
    return passed;
  }

  function reset() {
    const name = _state?.studentName || '';
    const cpf  = _state?.cpf || '';
    _state = _default();
    _state.studentName = name;
    _state.cpf = cpf;
    if (name && cpf) _state.startDate = new Date().toLocaleDateString('pt-BR');
    _save();
  }

  function formatCPF(v) {
    const d = v.replace(/\D/g, '').slice(0, 11);
    return d.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
            .replace(/(\d{3})(\d{3})(\d{1,3})$/, '$1.$2.$3')
            .replace(/(\d{3})(\d{1,3})$/, '$1.$2');
  }

  function validateCPF(cpf) {
    const d = cpf.replace(/\D/g, '');
    if (d.length !== 11 || /^(.)\1+$/.test(d)) return false;
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += +d[i] * (10 - i);
    let r = (sum * 10) % 11;
    if (r === 10 || r === 11) r = 0;
    if (r !== +d[9]) return false;
    sum = 0;
    for (let i = 0; i < 10; i++) sum += +d[i] * (11 - i);
    r = (sum * 10) % 11;
    if (r === 10 || r === 11) r = 0;
    return r === +d[10];
  }

  function getTheme() {
    return localStorage.getItem('eletricista_theme') || 'dark';
  }

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('eletricista_theme', t);
  }

  function initTheme() {
    setTheme(getTheme());
  }

  _load();
  return { init, getUser, setUser, hasUser, getProgress, markLesson, saveQuiz, reset, formatCPF, validateCPF, getTheme, setTheme, initTheme };
})();
