/**
 * Swaps the src of any theme-aware image to match the current theme.
 *
 * The site toggles a `.dark` class and ignores the OS entirely, so nothing
 * built into the platform can do this: `<picture>` and Tailwind's stock
 * `dark:` variant both key off `prefers-color-scheme`. The card images carry
 * both URLs as data attributes and this picks one.
 *
 * NOTE: a copy of this loop is inlined in src/utils/prepaint.ts so the src is
 * correct before first paint. Keep the two in sync — the selector contract
 * `img[data-dark-src]` is what they share.
 */
const swapThemeImages = (dark: boolean) => {
  for (const img of document.querySelectorAll<HTMLImageElement>("img[data-dark-src]")) {
    const next = dark ? img.dataset.darkSrc : img.dataset.lightSrc;
    if (next && img.getAttribute("src") !== next) img.setAttribute("src", next);
  }
};

export { swapThemeImages };
