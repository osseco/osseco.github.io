import { supplyChainSecurity } from "./supply-chain-security";
import type { CuratedList } from "./types";

export type { CuratedList, ListEntry, ListEntryKind } from "./types";

/** Every curated list, in the order the lists page shows them. */
export const LISTS: CuratedList[] = [supplyChainSecurity];

export function findList(slug: string | undefined) {
  return LISTS.find((list) => list.slug === slug);
}
