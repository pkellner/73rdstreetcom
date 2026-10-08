// Renders the PNG images in public/ (OG card, logo, touch icon, favicon) with
// headless Chrome, so they use the site's own Archivo font. Run after changing
// the logo or the card: `npm run images`, then commit the PNGs.
// Set CHROME to the browser binary if it isn't in the default macOS location.

import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const root = resolve(import.meta.dirname, "..");
const fonts = pathToFileURL(join(root, "public/fonts/web")).href;

const head = `<meta charset="utf-8"><style>
@font-face { font-family: Archivo; font-weight: 400 900; font-stretch: 62% 125%; src: url(${fonts}/archivo-normal-latin.woff2) format("woff2"); }
@font-face { font-family: Figtree; font-weight: 400 800; src: url(${fonts}/figtree-normal-latin.woff2) format("woff2"); }
@font-face { font-family: "JetBrains Mono"; font-weight: 400 700; src: url(${fonts}/jetbrains-mono-normal-latin.woff2) format("woff2"); }
html, body { margin: 0; overflow: hidden; }
</style>`;

const plate = (w, h, size, text, extra = "") => `
<div style="position:relative;width:${w}px;height:${h}px;${extra}">
  <div style="position:absolute;inset:0;translate:${size * 0.12}px ${size * 0.12}px;background:#14201f;border-radius:${size * 0.38}px"></div>
  <div style="position:absolute;inset:0;display:grid;place-items:center;background:#0b7f7a;border:${size * 0.1}px solid #14201f;border-radius:${size * 0.38}px;box-shadow:inset 0 0 0 ${size * 0.12}px #0b7f7a, inset 0 0 0 ${size * 0.2}px #fff;color:#fff;font:900 ${size}px/1 Archivo;font-stretch:118%;letter-spacing:-0.03em">${text}</div>
</div>`;

const wordmark = (scale) => `
<div style="display:flex;align-items:center;gap:${14 * scale}px">
  ${plate(196 * scale, 52 * scale, 23 * scale, "73rd Street", "rotate:-1.5deg")}
  <span style="font:800 ${27 * scale}px/1 Archivo;font-stretch:112%;letter-spacing:-0.03em;color:#14201f">Associates<span style="color:#c2336b">.</span></span>
</div>`;

const grid = "background-image:linear-gradient(rgba(20,32,31,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(20,32,31,.07) 1px,transparent 1px);background-size:44px 44px";

const images = [
  {
    file: "og.png",
    w: 1200,
    h: 630,
    body: `<div style="width:1200px;height:630px;box-sizing:border-box;padding:70px 80px;background:#f6f1e7;${grid};display:grid;align-content:space-between;font-family:Figtree">
      ${wordmark(2.15)}
      <div>
        <div style="font:850 68px/1.02 Archivo;font-stretch:118%;letter-spacing:-0.045em;color:#14201f">Technology solutions<br>since 1985<span style="color:#c2336b">.</span></div>
        <div style="margin-top:22px;font:500 28px/1.3 Figtree;color:#4d5a58">Social media integration · Custom software · Content publishing</div>
      </div>
      <div style="display:flex;gap:14px">
        ${["#0b7f7a", "#6a3fd0", "#c2336b", "#e0a92e"].map((c) => `<span style="width:64px;height:22px;border-radius:6px;background:${c};border:3px solid #14201f"></span>`).join("")}
        <span style="margin-left:auto;font:600 22px/1 'JetBrains Mono';letter-spacing:.08em;color:#4d5a58">73RDSTREET.COM</span>
      </div>
    </div>`,
  },
  {
    file: "logo.png",
    w: 800,
    h: 150,
    body: `<div style="width:800px;height:150px;display:grid;place-items:center">${wordmark(2)}</div>`,
    transparent: true,
  },
  {
    file: "apple-touch-icon.png",
    w: 180,
    h: 180,
    body: `<div style="width:180px;height:180px;display:grid;place-items:center;background:#f6f1e7">${plate(150, 116, 64, "73")}</div>`,
  },
  {
    file: "favicon-32.png",
    w: 32,
    h: 32,
    body: `<div style="width:32px;height:32px;display:grid;place-items:center">${plate(30, 24, 14, "73")}</div>`,
    transparent: true,
  },
];

const tmp = mkdtempSync(join(tmpdir(), "st-images-"));
try {
  for (const img of images) {
    const html = join(tmp, img.file.replace(".png", ".html"));
    writeFileSync(html, `<!doctype html>${head}<body>${img.body}</body>`);
    const out = join(root, "public", img.file);
    execFileSync(CHROME, [
      "--headless",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      `--window-size=${img.w},${img.h}`,
      ...(img.transparent ? ["--default-background-color=00000000"] : []),
      "--virtual-time-budget=2000",
      `--screenshot=${out}`,
      pathToFileURL(html).href,
    ], { stdio: "pipe" });
    console.log(`wrote public/${img.file}`);
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
