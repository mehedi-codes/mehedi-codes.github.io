import { locale } from "@/i18n";
import type { Lang } from "@/i18n";

const currentLang = (): Lang => (document.documentElement.lang === "bn" ? "bn" : "en");

// Must mirror whatever the pre-paint script in base.astro does, or the tab
// title and the page language disagree after a toggle.
const applyMeta = (lang: Lang) => {
  const title = document.querySelector<HTMLTitleElement>("title");
  if (title) {
    title.textContent = title.dataset[lang === "bn" ? "titleBn" : "titleEn"] ?? "";
  }
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description) {
    description.setAttribute("content", description.dataset[lang === "bn" ? "descBn" : "descEn"] ?? "");
  }
};

export const LangToggle = () => {
  // Read the live language off <html>, not localStorage. That attribute is
  // the single source of truth, and the pre-paint script reconciles it with
  // storage before this ever runs.
  const toggle = () => {
    const next = currentLang() === "bn" ? "en" : "bn";
    document.documentElement.lang = next;
    localStorage.setItem("language", next);
    applyMeta(next);
  };

  return (
    <button type="button" className="btn-fill" onClick={toggle}>
      {/*
              No state: bilingual.css shows whichever pair matches html[lang].
              The lang attributes are inverted on purpose. locale.en["lang.label"]
              is the Bangla word "বাংলা", so the span shown while the page is in
              English still holds Bangla text and needs lang="bn" for correct
              pronunciation. Everywhere else on the site the two agree; here the
              button names the language you are NOT in, so they cannot.
            */}
      <span data-lang="en" lang="bn">
        {locale.en["lang.label"]}
      </span>
      <span data-lang="bn" lang="en">
        {locale.bn["lang.label"]}
      </span>
    </button>
  );
};
