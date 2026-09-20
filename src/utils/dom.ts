import type { Lang } from "./content";

export const el = <T extends HTMLElement>(id: string): T => {
  const node = document.getElementById(id);
  if (!node) throw new Error(`#${id} missing`);
  return node as T;
};

export const qs = <T extends Element>(selector: string): T => {
  const node = document.querySelector<T>(selector);
  if (!node) throw new Error(selector + " missing");
  return node;
};

export const on = <K extends keyof HTMLElementEventMap>(
  node: HTMLElement,
  type: K,
  handler: (event: HTMLElementEventMap[K]) => void,
) => {
  node.addEventListener(type, handler);
};

export const getLang = (): Lang => {
  return document.documentElement.lang === "bn" ? "bn" : "en";
};

export const setLang = (lang: Lang): void => {
  document.documentElement.lang = lang;
};

export const persist = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // non-fatal
  }
};

export const read = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const applyMeta = (lang: Lang) => {
  const title = qs<HTMLTitleElement>("title");
  title.textContent = title.dataset[lang === "bn" ? "titleBn" : "titleEn"] ?? "";
  const description = qs<HTMLMetaElement>('meta[name="description"]');
  description.setAttribute("content", description.dataset[lang === "bn" ? "descBn" : "descEn"] ?? "");
};
