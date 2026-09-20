import { locale } from "@/utils/content";
import { applyMeta, el, getLang, on, persist, read, setLang } from "./dom";

const init = () => {
  const btn = el<HTMLButtonElement>("lang-toggle");
  const label = el<HTMLElement>("lang-toggle-label");

  const stored = read("language") === "bn" ? "bn" : "en";
  setLang(stored);
  applyMeta(stored);

  const sync = () => {
    label.textContent = locale[getLang()]["lang.label"];
  };

  sync();
  if (btn.dataset.bound === "true") return;
  btn.dataset.bound = "true";
  on(btn, "click", () => {
    const next = getLang() === "bn" ? "en" : "bn";
    setLang(next);
    persist("language", next);
    applyMeta(next);
    sync();
  });
};

document.addEventListener("astro:page-load", init);
init();
