import { describe, expect, it } from "vitest";
import { LISTS } from "./lists";
import { PROJECTS } from "./projects";

const isHttps = (url: string) => new URL(url).protocol === "https:";

describe("curated lists", () => {
  it("have unique, URL-safe slugs", () => {
    const slugs = LISTS.map((list) => list.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it.each(LISTS.map((list) => [list.slug, list] as const))(
    "%s: entries use https, are unique and sorted by name",
    (_, list) => {
      const names = list.entries.map((entry) => entry.name.toLowerCase());
      expect(new Set(names).size).toBe(names.length);
      expect(names).toEqual([...names].sort());
      for (const entry of list.entries) {
        expect(isHttps(entry.url), entry.url).toBe(true);
        expect(entry.description.length).toBeGreaterThan(0);
      }
    },
  );
});

describe("projects", () => {
  it("use https links and unique names", () => {
    const names = PROJECTS.map((project) => project.name);
    expect(new Set(names).size).toBe(names.length);
    for (const project of PROJECTS) {
      expect(isHttps(project.repo)).toBe(true);
      if (project.site) expect(isHttps(project.site)).toBe(true);
    }
  });
});
