import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const writings = defineCollection({
  loader: glob({ base: "./src/content/writings", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    // The sort key, held as a real Date so it can be compared. `getCollection`
    // hands entries back in filename order otherwise, which would silently
    // rearrange the index.
    date: z.coerce.date(),
    // The two rendered forms, deliberately not the same field: they are display
    // strings - "September 19, 2026" and its Bangla transliteration - and
    // neither can be ordered.
    dateLabel: z.object({
      en: z.string(),
      bn: z.string(),
    }),
    title: z.object({
      en: z.string(),
      bn: z.string(),
    }),
    description: z.object({
      en: z.string(),
      bn: z.string(),
    }),
    tags: z.array(
      z.object({
        en: z.string(),
        bn: z.string(),
      }),
    ),
    image: z.string(),
  }),
});

export const collections = { writings };
