// Checks the built site in dist/ before it is published.
// Every route exists, every page has a title and canonical link, and the
// legal pages that Meta links to are present with their contact details.

import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const dist = resolve(import.meta.dirname, "../dist");
const failures = [];
const fail = (msg) => failures.push(msg);

const PAGES = {
  "/": "index.html",
  "/about/": "about/index.html",
  "/services/": "services/index.html",
  "/contact/": "contact/index.html",
  "/privacy/": "privacy/index.html",
  "/terms/": "terms/index.html",
  "/data-deletion/": "data-deletion/index.html",
  "/code-of-conduct/": "code-of-conduct/index.html",
};

for (const [route, file] of Object.entries(PAGES)) {
  const path = join(dist, file);
  if (!existsSync(path)) {
    fail(`${route}: missing ${file}`);
    continue;
  }
  const html = readFileSync(path, "utf8");
  if (!/<title>[^<]+<\/title>/.test(html)) fail(`${route}: no <title>`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== `https://73rdstreet.com${route}`) fail(`${route}: canonical is ${canonical}`);
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (/\.[a-z0-9]+$/i.test(href)) {
      if (!existsSync(join(dist, href))) fail(`${route}: broken asset link ${href}`);
    } else if (!(href in PAGES)) {
      fail(`${route}: link to unknown page ${href}`);
    }
  }
}

const must = {
  "/privacy/": ["info@73rdstreet.com", "peter@peterkellner.net", "publish_video", "7 business days"],
  "/terms/": ["info@73rdstreet.com", "State of California"],
  "/data-deletion/": ["peter@peterkellner.net", "Data Deletion Request", "+1-408-234-1385", "7 business days"],
  "/code-of-conduct/": ["peter@peterkellner.net", "Contributor Covenant"],
};
for (const [route, needles] of Object.entries(must)) {
  const path = join(dist, PAGES[route]);
  if (!existsSync(path)) continue;
  const html = readFileSync(path, "utf8");
  for (const n of needles) if (!html.includes(n)) fail(`${route}: missing "${n}"`);
}

for (const [route, file] of Object.entries(PAGES)) {
  const p = join(dist, file);
  if (existsSync(p) && !readFileSync(p, "utf8").includes(`href="https://peterkellner.net"`)) fail(`${route}: no link to peterkellner.net`);
}

for (const f of ["404.html", "og.png", "logo.png", "favicon.svg", "favicon-32.png", "apple-touch-icon.png", "sitemap-index.xml"]) {
  if (!existsSync(join(dist, f))) fail(`missing ${f}`);
}

if (failures.length) {
  console.error(`check-dist: ${failures.length} problem(s)\n  ${failures.join("\n  ")}`);
  process.exit(1);
}
console.log(`check-dist: ${Object.keys(PAGES).length} pages OK`);
