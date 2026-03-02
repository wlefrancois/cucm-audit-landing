// js/site.js
(function () {
  // Active nav link highlighting
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;

    // normalize: remove trailing slash except root
    const normalized = href === "/" ? "/" : href.replace(/\/$/, "");
    if (normalized === path) {
      a.classList.add("is-active");
      a.setAttribute("aria-current", "page");
    }
  });

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
