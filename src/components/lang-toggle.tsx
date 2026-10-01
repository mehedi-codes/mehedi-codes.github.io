import ui from "@/data/ui.json";

/**
 * The two languages this site ships. Spelled out rather than derived from the
 * data, so adding a third one is a deliberate edit that fails until every
 * localized leaf has it. `utils/prepaint.ts` declares its own copy.
 */
type Lang = "en" | "bn";

const updateMetadata = (lang: Lang): void => {
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);

  const titleSuffix = lang === "bn" ? "titleBn" : "titleEn";
  const descSuffix = lang === "bn" ? "descBn" : "descEn";

  const titleElement = document.querySelector<HTMLTitleElement>("title");
  if (titleElement !== null) {
    const text = titleElement.dataset[titleSuffix];
    if (text) {
      titleElement.textContent = text;
    }
  }

  const descElement = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (descElement !== null) {
    const content = descElement.dataset[descSuffix];
    if (content) {
      descElement.setAttribute("content", content);
    }
  }
};

export const LangToggle = () => {
  const toggle = (): void => {
    const currentLang = document.documentElement.lang === "bn" ? "bn" : "en";
    const nextLang: Lang = currentLang === "bn" ? "en" : "bn";
    updateMetadata(nextLang);
  };

  return (
    <button type="button" className="btn-fill" onClick={toggle} aria-label="Toggle language">
      <span data-lang="en" lang="bn">
        {ui.lang.label.en}
      </span>
      <span data-lang="bn" lang="en">
        {ui.lang.label.bn}
      </span>
    </button>
  );
};
