import type { CuratedList } from "./types";

/**
 * Starting point for a new list. Copy to `<slug>.ts`, rename the export,
 * fill it in, and add it to `LISTS` in `index.ts`. This file is not shown.
 */
export const templateList: CuratedList = {
  slug: "my-category",
  title: "My category",
  summary: "One sentence on what the tools in this list help with.",
  entries: [],
};
