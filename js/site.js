// js/site.js
(function () {
  // Active nav link highlighting
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const navLinks = document.querySelectorAll(".nav-links a");
  // Mobile nav toggle
  const toggle = document.querySelector(".nav__toggle");
  const nav = document.querySelector(".nav-links[data-nav]");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close menu after clicking a link (mobile UX)
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
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
