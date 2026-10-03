import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const writings = defineCollection({
  loader: glob({ base: "./src/content/writings", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    // The sort key, held as a real Date so it can be compared. `getCollection`
    // hands entries back in filename order otherwise, which would silently
    // rearrange the index.
    //
    // This is also the only date in the schema. There used to be a dateLabel
    // holding "September 19, 2026" beside it, but a stored display string can
    // drift from the date it claims to render, so it is formatted from `date`
    // at build time instead. Note that means the formatter must pin timeZone,
    // because a bare YAML date coerces to UTC midnight and would render as the
    // previous day anywhere west of UTC.
    date: z.coerce.date(),
    // Content is stored in one language, so these are plain strings. The
    // interface chrome in ui.json stays bilingual; the two are not the same
    // kind of thing and only the chrome needs a pair per string.
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
  }),
});

export const collections = { writings };
