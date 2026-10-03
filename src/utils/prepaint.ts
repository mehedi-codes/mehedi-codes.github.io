/**
 * The two languages this site ships. Spelled out rather than derived from the
 * data, so adding a third one is a deliberate edit that fails until every
 * localized leaf has it. `lang-toggle.tsx` declares its own copy: importing it
 * from here would pull this module into the client bundle, and the only thing
 * ever exported is the inlined string.
 */
type Lang = "en" | "bn";

/**
 * Applies the stored theme and language before the first paint, then keeps
 * theme-dependent images in step with the theme for the rest of the session.
 *
 * This runs as an inlined classic script, not as a module, because a module
 * import is deferred and would land after the first paint. That timing is the
 * entire point. An Astro island cannot do this work either: island hydration
 * is a dynamic import of the component chunk, so it always resolves after the
 * paint. Without this, a visitor with dark mode stored gets a white flash on
 * every page load, and a visitor who chose Bangla gets an English page until
 * something reads localStorage.
 *
 * Theme is the one case the platform could handle without script, via
 * prefers-color-scheme, but this site deliberately overrides the OS. Language
 * has no media query at all, so restoring a Bangla visitor's choice is
 * impossible without this.
 *
 * Not exported on purpose. The string below is the only supported way to
 * reach this, because calling it as a module would defer it past the paint,
 * which is the mistake this file exists to avoid.
 *
 * The body is turned into a string with Function.prototype.toString, so it
 * must stay self-contained. If it ever imports a helper, the string will
 * reference something the string does not contain, and the script will fail
 * silently with nothing in the console to explain it.
 *
 * That is why the title and description logic below is duplicated from
 * `utils/head-language.ts` rather than shared with it, and why `Lang` is
 * declared separately above. The duplication is deliberate: this copy is the
 * one that survives serialisation. The two must be kept in step by hand.
 */
const prePaint = () => {
  try {
    const dark = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", dark);

    // Card images carry both URLs as data attributes. The site toggles a
    // .dark class and ignores the OS, so <picture> and Tailwind's stock
    // dark: variant both key off prefers-color-scheme and cannot choose
    // between them here.
    const applyImageVariants = (isDark: boolean) => {
      for (const img of document.querySelectorAll<HTMLImageElement>("img[data-dark-src]")) {
        const next = isDark ? img.dataset.darkSrc : img.dataset.lightSrc;
        if (next && img.getAttribute("src") !== next) {
          img.setAttribute("src", next);
        }
      }
    };

    applyImageVariants(dark);

    // Keep them in step for the rest of the session. The header toggle is a
    // React island with no knowledge of these attributes, so without this it
    // would flip the theme around an image that never changes.
    //
    // The class is observed rather than the toggle because the class is
    // already the single source of truth for the theme - prepaint writes it
    // below, the toggle writes it, and Tailwind's dark: variant reads it.
    // Watching it means the images follow every writer for free, including
    // the OS-level and reduced-motion paths the toggle takes.
    //
    // attributeFilter is what keeps this from looping: this only writes src,
    // so a class mutation is the sole trigger. Safe to run on every page; on
    // the eight that carry no variant image the loop matches nothing.
    new MutationObserver(() => {
      applyImageVariants(document.documentElement.classList.contains("dark"));
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const lang: Lang = localStorage.getItem("language") === "bn" ? "bn" : "en";
    document.documentElement.lang = lang;

    // The title and the meta description sit outside every [data-lang]
    // span, so bilingual.css cannot reach them. That is why the strings
    // are also carried as data-title-en/bn and data-desc-en/bn.
    const title = document.querySelector<HTMLTitleElement>("title");
    if (title) {
      title.textContent = title.dataset[lang === "bn" ? "titleBn" : "titleEn"] ?? "";
    }

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.setAttribute("content", description.dataset[lang === "bn" ? "descBn" : "descEn"] ?? "");
    }
  } catch (e) {
    // Deliberately not swallowed. This is the only thing that applies the
    // stored theme before paint, so a silent catch turns a storage
    // failure into an unexplainable light page.
    console.error(e);
  }
};

const source = prePaint.toString();

// The inlined script cannot report its own failure: if the body is ever
// transformed away, the site still builds, still deploys, and simply serves a
// light, English page to everyone with no error anywhere. Check at build time
// instead, so the build fails instead of the site.
if (!source.includes("classList.toggle")) {
  throw new Error(
    "prePaint.toString() came back without its body. The bundler must have transformed or tree-shaken it, which means the inlined pre-paint script would do nothing.",
  );
}

/**
 * The pre-paint script as a string, for inlining into a document head:
 *
 *   <script is:inline set:html={prepaint} />
 *
 * It has to be a string and not a module, because a module import is deferred
 * and would run after the first paint, which is the flash this exists to
 * prevent.
 *
 * The wrapping parentheses are what turn the function source into an IIFE.
 * Without them the inlined script would only declare a function and never call
 * it, so nothing would happen and nothing would throw.
 */
export const prepaint = `(${source})();`;
