import ui from "@/data/ui.json";
import { applyLanguage, type Lang } from "@/utils/head-language";

export const LangToggle = () => {
  const toggle = (): void => {
    const currentLang = document.documentElement.lang === "bn" ? "bn" : "en";
    const nextLang: Lang = currentLang === "bn" ? "en" : "bn";
    // The write stays here rather than inside applyLanguage, which also runs on
    // every navigation to re-read the stored choice and so must not be what
    // decides it.
    localStorage.setItem("language", nextLang);
    applyLanguage(nextLang);
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
