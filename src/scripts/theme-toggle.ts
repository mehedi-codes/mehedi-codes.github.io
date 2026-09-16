import { locale } from "@/i18n/locale";
import { el, on, persist, read } from "./utils";

const btn = el<HTMLButtonElement>("theme-toggle");
const label = el<HTMLElement>("theme-toggle-label");

const duration = 500;
const line_width = 4;

type StartViewTransition = (callback: () => void) => void;

const hasStartViewTransition =
  typeof (document as Document & { startViewTransition?: StartViewTransition }).startViewTransition === "function";

const isDark = () => document.documentElement.classList.contains("dark");

const sync = (toDark: boolean) => {
  const target = toDark ? "light" : "dark";
  for (const lang of ["en", "bn"] as const) {
    const node = label.querySelector(`[data-lang="${lang}"]`);
    if (node) {
      node.textContent = locale[lang][`theme.${target}`];
    }
  }
};

const seed = () => {
  document.documentElement.classList.toggle("dark", read("theme") === "dark");
  sync(isDark());
};

const toggleTheme = () => {
  const nextDark = !isDark();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (hasStartViewTransition && !reduced) {
    const style = document.createElement("style");
    style.id = "theme-toggle-animation";
    style.textContent = `
				::view-transition-new(root) {
					mask: linear-gradient(white, white) 0% 0% / ${line_width}px 100% no-repeat;
					animation: qrScanReveal ${duration}ms ease-in-out;
					animation-fill-mode: both;
					will-change: mask-size;
				}
				@keyframes qrScanReveal {
					from { mask-size: ${line_width}px 100%; }
					to   { mask-size: 100% 100%; }
				}
			`;
    document.head.appendChild(style);
    document.startViewTransition?.(() => {
      document.documentElement.classList.toggle("dark", nextDark);
    });
    setTimeout(() => document.getElementById("theme-toggle-animation")?.remove(), duration);
  } else {
    document.documentElement.classList.toggle("dark", nextDark);
  }

  persist("theme", nextDark ? "dark" : "light");
  sync(nextDark);
};

seed();
on(btn, "click", toggleTheme);
