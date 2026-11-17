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
    name: "cargo-project-tools",
    description:
      "Install a project's cargo tools from its own Cargo.lock files, so you can audit them and patch vulnerable dependencies without waiting for a release.",
    repo: "https://github.com/osseco/cargo-project-tools",
    site: "https://osseco.github.io/cargo-project-tools/",
    status: "active",
  },
  {
    name: "setup-cargo-project-tools",
    description:
      "A GitHub Action that installs cargo-project-tools, builds the project's tools into an Actions cache and audits their locks.",
    repo: "https://github.com/osseco/setup-cargo-project-tools",
    status: "active",
  },
  {
    name: "setup-sfw-free",
    description:
      "A GitHub Action that installs Socket Firewall Free, verified against pinned checksums, so package installs block malicious packages.",
    repo: "https://github.com/osseco/setup-sfw-free",
    status: "active",
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
