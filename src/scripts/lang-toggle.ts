import { locale } from "@/i18n/locale";
import { applyMeta, el, getLang, on, persist, setLang } from "./utils";

const btn = el<HTMLButtonElement>("lang-toggle");
const label = el<HTMLElement>("lang-toggle-label");

const sync = () => {
  label.textContent = locale[getLang()]["lang.label"];
};

const toggle = () => {
  const next = getLang() === "bn" ? "en" : "bn";
  setLang(next);
  persist("language", next);
  applyMeta(next);
  sync();
};

sync();
on(btn, "click", toggle);
