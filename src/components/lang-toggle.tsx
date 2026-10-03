import ui from "@/data/ui.json";

export const LangToggle = () => {
  const toggle = (): void => {
    const currentLang = document.documentElement.lang === "bn" ? "bn" : "en";
    const nextLang = currentLang === "bn" ? "en" : "bn";
    localStorage.setItem("language", nextLang);
    document.documentElement.lang = nextLang;
    const title = document.querySelector<HTMLTitleElement>("title");
    if (title) {
      title.textContent = title.dataset[nextLang === "bn" ? "titleBn" : "titleEn"] ?? "";
    }
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.setAttribute("content", description.dataset[nextLang === "bn" ? "descBn" : "descEn"] ?? "");
    }
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
