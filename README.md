# 73rdstreet.com

The website for **73rd Street Associates, Inc.**, a California corporation founded in 1985 by Peter Kellner. Static [Astro](https://astro.build/) site, published with GitHub Pages at <https://73rdstreet.com>.

The look follows [peterkellner.net](https://peterkellner.net) (Archivo, Figtree and JetBrains Mono, ink borders, hard shadows) with its own palette: teal, violet, berry and gold on warm sand, and a street-sign plate where peterkellner.net uses a diamond.

## Pages

| Route | Notes |
|---|---|
| `/`, `/about/`, `/services/`, `/contact/` | Company pages |
| `/privacy/`, `/terms/`, `/data-deletion/`, `/code-of-conduct/` | Legal pages. **Meta app settings link to these paths, so keep them.** |

Shared text (company facts, services, timeline) is in `src/data/site.ts`. The legal pages show `SITE.legalUpdated` as their date; change it whenever their text changes.

## Working on it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + build to dist/
npm run test:dist  # checks dist/: every page, canonical links, legal page contents
npm run images     # re-renders og.png, logo.png and icons with headless Chrome
```

Node 24 (`.nvmrc`).

## How it gets published

Push to `main` and GitHub does the rest. `.github/workflows/deploy.yml`:

1. installs with `npm ci`,
2. runs `npm run build`,
3. runs `npm run test:dist`,
4. uploads `dist/` and deploys it to GitHub Pages.

If any step fails, nothing is deployed. Pushes to other branches run steps 1 to 3 only. Pushes that touch only `*.md` files don't trigger a run. The Actions tab has a "Run workflow" button for a manual deploy.

The custom domain is set in **Settings → Pages** (no `CNAME` file is needed with Actions publishing), with Enforce HTTPS on.

## DNS (GoDaddy)

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | pkellner.github.io |

MX records point to Forward Email (`mx1`/`mx2.forwardemail.net`) and are separate from the website.

Before October 2026 the site was a Next.js app in `web/`, deployed with Docker on Coolify. It is in the git history.
