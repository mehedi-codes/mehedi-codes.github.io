/**
 * Derives the dark-mode card from its light counterpart. The two differ only
 * by the `theme` param, so one URL per project is the source of truth.
 * Returns the input unchanged if the `theme=Light` param is absent, which
 * leaves a non-socialify image on a single variant rather than two.
 *
 * That fallback is silent, so `assertData` requires every `works.json` image to
 * carry exactly one `theme=Light`. Without it a typo in a card URL would produce
 * one image used for both themes instead of two, and nothing would report it.
 */
export const darkVariant = (lightUrl: string): string => lightUrl.replace("theme=Light", "theme=Dark");
