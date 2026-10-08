// Header behavior: theme toggle, mobile menu, compact header on scroll.

const root = document.documentElement;
const media = window.matchMedia("(prefers-color-scheme: dark)");

function isDark() {
  const t = root.getAttribute("data-theme");
  return t ? t === "dark" : media.matches;
}

document.getElementById("theme-btn")?.addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  const apply = () => {
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked; the choice then lasts for this page only.
    }
  };
  if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.startViewTransition(apply);
  } else {
    apply();
  }
});

const menuBtn = document.getElementById("menu-btn");
const sheet = document.getElementById("sheet");
function setMenu(open: boolean) {
  sheet?.classList.toggle("open", open);
  menuBtn?.setAttribute("aria-expanded", String(open));
  menuBtn?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
menuBtn?.addEventListener("click", () => setMenu(!sheet?.classList.contains("open")));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

const header = document.getElementById("top");
const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
