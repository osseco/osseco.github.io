# osseco.github.io

The OSSEco organization site: what OSSEco is, its projects, and curated lists of tools and services for the open source ecosystem.

- Live: <https://osseco.github.io/>
- Built from the [osseco web design guide](https://github.com/osseco/web-design-guide) templates.

## Content

| Path | What |
| --- | --- |
| [`src/data/projects.ts`](src/data/projects.ts) | osseco projects shown on the site |
| [`src/data/lists/`](src/data/lists/) | One file per curated list; register it in `index.ts` |
| [`src/pages/`](src/pages/) | Routes: `/`, `/projects`, `/lists`, `/lists/:slug`, `/contribute` |

To add a list, copy [`src/data/lists/_template.ts`](src/data/lists/_template.ts). Entries are sorted by name and use https links; `pnpm test` checks both.

## Develop

Needs Node 22, pnpm (the version in `package.json`), and [`sfw`](https://docs.socket.dev/docs/socket-firewall-free).

```bash
sfw pnpm install
```

```bash
sfw pnpm dev
```

```bash
sfw pnpm lint && sfw pnpm typecheck && sfw pnpm test && sfw pnpm build
```

Deploys to GitHub Pages from `main` through [`.github/workflows/pages.yml`](.github/workflows/pages.yml) (Settings → Pages → Source: GitHub Actions).
