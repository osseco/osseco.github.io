import type { CuratedList } from "./types";

export const supplyChainSecurity: CuratedList = {
  slug: "supply-chain-security",
  title: "Supply-chain security",
  summary:
    "Keep dependencies, build pipelines and workflows from becoming the way in.",
  entries: [
    {
      name: "actionlint",
      url: "https://github.com/rhysd/actionlint",
      description:
        "Static checker for GitHub Actions workflows: syntax, expressions, shell scripts.",
      kind: "tool",
      license: "MIT",
    },
    {
      name: "CodeQL",
      url: "https://codeql.github.com",
      description:
        "Semantic code analysis from GitHub; free for public repositories via code scanning.",
      kind: "service",
    },
    {
      name: "Dependabot",
      url: "https://docs.github.com/en/code-security/dependabot",
      description:
        "Automated dependency and action updates, plus alerts for known vulnerabilities.",
      kind: "service",
    },
    {
      name: "OpenSSF Scorecard",
      url: "https://github.com/ossf/scorecard",
      description:
        "Scores a repository against supply-chain security practices and reports what to fix.",
      kind: "tool",
      license: "Apache-2.0",
    },
    {
      name: "Socket Firewall Free (sfw)",
      url: "https://docs.socket.dev/docs/socket-firewall-free",
      description:
        "Wraps package managers and blocks known-malicious packages at install time.",
      kind: "tool",
    },
    {
      name: "zizmor",
      url: "https://github.com/zizmorcore/zizmor",
      description:
        "Security linter for GitHub Actions: injection, excessive permissions, unpinned actions.",
      kind: "tool",
      license: "MIT",
    },
  ],
};
