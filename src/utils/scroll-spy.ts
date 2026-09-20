const anchors = ["/#experience", "/#contact"] as const;

const QUIET_MS = 600;
let quietUntil = 0;

let observer: IntersectionObserver | null = null;
// Visible pixel area per anchor — the section dominating the band wins,
// which stays correct when two sections straddle the band boundary.
const areas = new Map<string, number>();

const refresh = () => {
  document.querySelectorAll('a[aria-current="location"]').forEach((el) => el.removeAttribute("aria-current"));
  let best: string | null = null;
  let bestArea = 0;
  for (const href of anchors) {
    const area = areas.get(href) ?? 0;
    if (area > bestArea) {
      best = href;
      bestArea = area;
    }
  }
  if (best) {
    document.querySelectorAll(`a[href="${best}"]`).forEach((el) => el.setAttribute("aria-current", "location"));
  }
};

const clearAll = () => {
  areas.clear();
  refresh();
};

const init = () => {
  if (location.pathname !== "/") {
    observer?.disconnect();
    observer = null;
    clearAll();
    return;
  }

  const targets = anchors
    .map((href) => ({ href, el: document.getElementById(href.slice(2)) }))
    .filter((t) => t.el !== null);

  observer?.disconnect();
  areas.clear();
  if (targets.length === 0) {
    observer = null;
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (Date.now() < quietUntil) return;
      for (const entry of entries) {
        const href = `/#${(entry.target as HTMLElement).id}`;
        areas.set(href, entry.intersectionRatio * entry.boundingClientRect.height);
      }
      refresh();
    },
    // Middle band: wide enough to catch the short trailing contact section
    // even when the page cannot scroll its top into a narrow strip.
    { rootMargin: "-30% 0px -30% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
  );
  for (const t of targets) observer.observe(t.el as HTMLElement);
};

const bind = () => {
  if (document.documentElement.dataset.spyBound === "true") return;
  document.documentElement.dataset.spyBound = "true";
  document.addEventListener("click", (ev) => {
    const link = (ev.target as HTMLElement).closest?.('a[href^="/#"]');
    if (link) quietUntil = Date.now() + QUIET_MS;
  });
  document.addEventListener("astro:page-load", init);
};

bind();
init();
