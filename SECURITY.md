# Security policy

## Reporting a vulnerability

Report vulnerabilities privately through GitHub: **Security → Report a vulnerability** on [osseco/osseco.github.io](https://github.com/osseco/osseco.github.io/security/advisories/new). Don't open a public issue.

Include the page, what you did, and what happened. You'll get a reply within a week.

## Supported versions

Only `main` is supported; it is what the site deploys.

## Dependencies

- pnpm refuses package versions younger than 7 days (`minimumReleaseAge`), denies dependency build scripts (`strictDepBuilds`, `allowBuilds`), and installs from the frozen lockfile.
- Installs in CI and on maintainers' machines run behind sfw (Socket Firewall Free).
- `pnpm audit` runs on every pull request.

## Workflows

- Every workflow starts with `permissions: {}`; each job asks only for what it needs.
- Actions are pinned to full commit SHAs, and `actions/checkout` runs with `persist-credentials: false`.

## The site

- The site is static: all content is bundled from this repository at build time, with no third-party runtime requests.
- It deploys from `main` only, through the `github-pages` environment.
