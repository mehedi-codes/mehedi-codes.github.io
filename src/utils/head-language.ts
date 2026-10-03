/**
 * The two languages this site ships. Spelled out rather than derived from the
 * data, so adding a third one is a deliberate edit that fails until every
 * localized leaf has it. `utils/prepaint.ts` declares its own copy because its
 * function body is serialised with toString() and must not gain an import.
 */
export type Lang = "en" | "bn";

/**
 * Applies a language to the document: the `lang` attribute, the title, and the
 * meta description.
 *
 * The last two sit outside every `[data-lang]` span, so bilingual.css cannot
 * reach them and the strings are also carried as data-title-en/bn and
 * data-desc-en/bn on the elements themselves. base.astro renders the English
 * text into both, so whatever is not corrected here is English by default.
 */
export const applyLanguage = (lang: Lang): void => {
  document.documentElement.lang = lang;

  const title = document.querySelector<HTMLTitleElement>("title");
  if (title) {
    title.textContent = title.dataset[lang === "bn" ? "titleBn" : "titleEn"] ?? "";
  }

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description) {
    description.setAttribute("content", description.dataset[lang === "bn" ? "descBn" : "descEn"] ?? "");
  }
};

/**
 * Re-applies the stored language after a client-side navigation, and whenever
 * the language is toggled.
 *
 * The router swaps the whole head, including a freshly server-rendered `<title>`
 * carrying the English string. Nothing in the new document corrects it, because
 * the pre-paint script that normally does this runs once per document, and by
 * the time a navigation has replaced the head it is long finished. So without
 * this, a Bangla visitor gets an English tab title after the first in-app
 * navigation.
 *
 * `astro:after-swap` rather than `astro:page-load` because it fires the instant
 * the head is replaced, which is exactly the moment the title reverts. Acting on
 * `page-load` would leave the wrong title in place for the gap between the two.
 *
 * No listener on `astro:page-load`, which also fires for the initial load: the
 * pre-paint script has already applied the language by then, so this would only
 * repeat work that is already done.
 */
const storedLanguage = (): Lang => (localStorage.getItem("language") === "bn" ? "bn" : "en");

// Guarded because lang-toggle.tsx imports applyLanguage from here, and that
// island is server-rendered, so this module is evaluated on the server too.
// Only the registration is guarded: applyLanguage and storedLanguage are only
// ever called from a click handler or from this listener, so both already run
// in a browser.
if (typeof document !== "undefined") {
  document.addEventListener("astro:after-swap", () => applyLanguage(storedLanguage()));
}
