export const prepaint = `(function () {
    try {
        var dark = localStorage.getItem("theme") === "dark";
        document.documentElement.classList.toggle("dark", dark);

        // Inlined copy of swapThemeImages (src/utils/theme-image.ts) — this
        // cannot import, and the src has to be right before first paint or an
        // eager card on a dark page downloads the light one first and flashes.
        var cards = document.querySelectorAll("img[data-dark-src]");
        for (var i = 0; i < cards.length; i++) {
            var next = dark
                ? cards[i].dataset.darkSrc
                : cards[i].dataset.lightSrc;
            if (next && cards[i].getAttribute("src") !== next)
                cards[i].setAttribute("src", next);
        }

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
