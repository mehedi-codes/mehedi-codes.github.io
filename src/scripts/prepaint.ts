export const prepaint = `(function () {
    try {
        if (document.documentElement.hasAttribute("data-force-dark")) {
            document.documentElement.classList.add("dark");
            return;
        }

        document.documentElement.classList.toggle(
            "dark",
            localStorage.getItem("theme") === "dark",
        );

        const urlLang = new URL(location.href).searchParams.get("lang");
        const stored = localStorage.getItem("language");
        const lang =
            urlLang === "bn" || (urlLang === null && stored === "bn")
                ? "bn"
                : "en";
        document.documentElement.lang = lang;

        const title = document.querySelector("title");
        if (title)
            title.textContent =
                title.dataset[lang === "bn" ? "titleBn" : "titleEn"];

        const description = document.querySelector(
            'meta[name="description"]',
        );
        if (description)
            description.setAttribute(
                "content",
                description.dataset[lang === "bn" ? "descBn" : "descEn"] ??
                    "",
            );
    } catch {}
})();`;
