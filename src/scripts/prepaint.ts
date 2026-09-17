export const prepaint = `(function () {
    try {
        document.documentElement.classList.toggle(
            "dark",
            localStorage.getItem("theme") === "dark",
        );

        const lang =
            localStorage.getItem("language") === "bn" ? "bn" : "en";
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
