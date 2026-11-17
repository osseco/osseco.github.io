import type { StatusTone } from "../components/status-badge";

export type ProjectStatus = "active" | "incubating" | "archived";

export type Project = {
  name: string;
  description: string;
  repo: string;
  site?: string;
  status: ProjectStatus;
};

/** Each project status mapped to a tone from the status palette. */
export const PROJECT_STATUS: Record<
  ProjectStatus,
  { tone: StatusTone; meaning: string }
> = {
  active: { tone: "success", meaning: "Maintained and in use" },
  incubating: { tone: "progress", meaning: "Being brought into osseco" },
  archived: { tone: "neutral", meaning: "No longer maintained" },
};

export const PROJECTS: Project[] = [
  {
    name: "git-uplink",
    description:
      "A git subcommand for building on a public project from a private fork: keep unreleased work internal, gate it through IP review, and contribute upstream.",
    // Update to github.com/osseco/git-uplink once the repository is transferred.
    repo: "https://github.com/npetzall/git-uplink",
    status: "incubating",
  },
  {
    name: "web-design-guide",
    description:
      "One look for every osseco web frontend: tokens, components, starter templates and a Pages workflow.",
    repo: "https://github.com/osseco/web-design-guide",
    site: "https://osseco.github.io/web-design-guide/",
    status: "active",
  },
];
