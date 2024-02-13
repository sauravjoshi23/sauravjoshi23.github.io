"use strict";

// Has to be in the head tag, otherwise a flicker effect will occur.

var toggleTheme = function toggleTheme(theme) {
  if (theme == "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
};
var setTheme = function setTheme(theme) {
  transTheme();
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme);

  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== 'undefined') {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement).getPropertyValue('--global-bg-color') + 'ee' // + 'ee' for trasparency.
    });
  }
};
var transTheme = function transTheme() {
  document.documentElement.classList.add("transition");
  window.setTimeout(function () {
    document.documentElement.classList.remove("transition");
  }, 500);
};
var initTheme = function initTheme(theme) {
  if (theme == null) {
    var userPref = window.matchMedia;
    if (userPref && userPref('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }
  }
  setTheme(theme);
};
initTheme(localStorage.getItem("theme"));