/* CourseApp v2: progresso local com exigência de aprovação compatível com conteúdo de segurança */
const CourseApp = (() => {
  'use strict';
  const STORAGE_KEY = 'eletricista_v1';
  const PASS_PERCENT = 80;
  let _state = null;
  function _default() { return { version: 2, studentName: '', cpf: '', startDate: null, completionDate: null, courseComplete: false, certificateId: null, lessons: {}, quizScores: {} }; }
  function _load() { try { const raw = localStorage.getItem(STORAGE_KEY); const loaded = raw ? JSON.parse(raw) : _default(); _state = Object.assign(_default(), loaded, { version: 2 }); _revalidate(); } catch (e) { _state = _default(); } }
  function _save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(_state)); } catch (e) {} }
  function _total() { if (typeof COURSE_DATA === 'undefined') return 31; return COURSE_DATA.modules.reduce((s, m) => s + m.lessons.length + 1, 0); }
  function _isPassing(score, total) { return total > 0 && Math.round((score / total) * 100) >= PASS_PERCENT; }
  function _revalidate() { Object.keys(_state.quizScores || {}).forEach(k => { const q = _state.quizScores[k]; q.passed = _isPassing(q.score, q.total); if (_state.lessons[`${k}-quiz`]) _state.lessons[`${k}-quiz`].done = q.passed; }); _checkComplete(); }
  function _checkComplete() {
    if (typeof COURSE_DATA === 'undefined') return;
    const allLessonsDone = COURSE_DATA.modules.every(m => m.lessons.every(l => !!_state.lessons[`${m.id}-${l.id}`]?.done));
    const allQuizzesPassed = COURSE_DATA.modules.every(m => !!_state.quizScores[m.id]?.passed);
    if (allLessonsDone && allQuizzesPassed) {
      if (!_state.courseComplete || !_state.certificateId) { _state.completionDate = _state.completionDate || new Date().toLocaleDateString('pt-BR'); _state.certificateId = _state.certificateId || ('ELE-LIVRE-' + Date.now().toString(36).toUpperCase().slice(-8)); }
      _state.courseComplete = true;
    } else { _state.courseComplete = false; _state.completionDate = null; _state.certificateId = null; }
  }
  function _avgScore() { const scores = Object.values(_state.quizScores || {}); if (!scores.length) return 0; return Math.round(scores.reduce((s, q) => s + (q.score / q.total) * 100, 0) / scores.length); }
  function init() { _load(); }
  function getUser() { if (!_state) _load(); return { name: _state.studentName, cpf: _state.cpf }; }
  function setUser(name, cpf) { if (!_state) _load(); if (!_state.startDate) _state.startDate = new Date().toLocaleDateString('pt-BR'); _state.studentName = name.trim(); _state.cpf = cpf.trim(); _save(); }
  function hasUser() { if (!_state) _load(); return !!(_state.studentName && _state.cpf); }
  function getProgress() {
    if (!_state) _load(); _checkComplete(); _save(); const total = _total(); const done = Object.values(_state.lessons).filter(l => l.done).length;
    return { studentName: _state.studentName, cpf: _state.cpf, startDate: _state.startDate, completionDate: _state.completionDate, courseComplete: _state.courseComplete, certificateId: _state.certificateId, lessons: _state.lessons, quizScores: _state.quizScores, totalDone: done, totalLessons: total, overallPct: total ? Math.round((done / total) * 100) : 0, averageScore: _avgScore(), passPercent: PASS_PERCENT,
      modulePercent(modId) { if (typeof COURSE_DATA === 'undefined') return 0; const mod = COURSE_DATA.modules.find(m => m.id === +modId); if (!mod) return 0; const ids = [...mod.lessons.map(l => `${modId}-${l.id}`), `${modId}-quiz`]; return Math.round((ids.filter(id => _state.lessons[id]?.done).length / ids.length) * 100); },
      isLessonDone(modId, lessonId) { return !!_state.lessons[`${modId}-${lessonId}`]?.done; }, isQuizPassed(modId) { return !!_state.quizScores[modId]?.passed; } };
  }
  function markLesson(modId, lessonId) { if (!_state) _load(); _state.lessons[`${modId}-${lessonId}`] = { done: true, at: new Date().toISOString() }; _checkComplete(); _save(); }
  function saveQuiz(modId, score, total) { if (!_state) _load(); const passed = _isPassing(score, total); _state.quizScores[modId] = { score, total, passed }; _state.lessons[`${modId}-quiz`] = { done: passed, score, total, at: new Date().toISOString() }; _checkComplete(); _save(); return passed; }
  function reset() { const name = _state?.studentName || ''; const cpf = _state?.cpf || ''; _state = _default(); _state.studentName = name; _state.cpf = cpf; if (name && cpf) _state.startDate = new Date().toLocaleDateString('pt-BR'); _save(); }
  function formatCPF(v) { const d = v.replace(/\D/g, '').slice(0, 11); return d.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4').replace(/(\d{3})(\d{3})(\d{1,3})$/, '$1.$2.$3').replace(/(\d{3})(\d{1,3})$/, '$1.$2'); }
  function validateCPF(cpf) { const d = cpf.replace(/\D/g, ''); if (d.length !== 11 || /^(.)\1+$/.test(d)) return false; let sum = 0; for (let i = 0; i < 9; i++) sum += +d[i] * (10 - i); let r = (sum * 10) % 11; if (r === 10 || r === 11) r = 0; if (r !== +d[9]) return false; sum = 0; for (let i = 0; i < 10; i++) sum += +d[i] * (11 - i); r = (sum * 10) % 11; if (r === 10 || r === 11) r = 0; return r === +d[10]; }
  _load(); return { init, getUser, setUser, hasUser, getProgress, markLesson, saveQuiz, reset, formatCPF, validateCPF, PASS_PERCENT };
})();
