export type ListEntryKind = "tool" | "service";

export type ListEntry = {
  name: string;
  url: string;
  description: string;
  kind: ListEntryKind;
  /** SPDX identifier for open source tools. Leave out for hosted services. */
  license?: string;
};

export type CuratedList = {
  /** URL segment: `/lists/<slug>`. Lowercase, words joined by hyphens. */
  slug: string;
  title: string;
  summary: string;
  /** Sorted by name, case-insensitive. */
  entries: ListEntry[];
};
