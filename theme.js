(function () {
  'use strict';
  var KEY = 'eletricista_theme';
  function preferredTheme() {
    var saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  function label(theme) { return theme === 'light' ? '🌙 Tema escuro' : '☀️ Tema claro'; }
  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.textContent = label(theme);
      btn.setAttribute('aria-label', theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro');
    });
  }
  function toggle() {
    var next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem(KEY, next);
    apply(next);
  }
  apply(preferredTheme());
  document.addEventListener('DOMContentLoaded', function () {
    apply(preferredTheme());
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', toggle);
    });
  });
})();
