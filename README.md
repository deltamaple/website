# Delta Maple website

A static site: plain HTML, CSS and a little JavaScript. No build step.

## Preview
Double-click `index.html` to open it in your browser.

## Files
- `index.html` — all page content (English).
- `css/styles.css` — design. Brand colours are at the top under `:root`.
- `js/i18n.js` — French text. The EN/FR button in the header switches language. `?lang=fr` in the URL opens French directly.
- `js/main.js` — mobile menu, scroll effects, and the quote form.
- `assets/brand/` — logo files and the social share image (`og-image.jpg`).
- `assets/fonts/` — Outfit and Inter, self-hosted (no Google requests).
- `404.html`, `robots.txt`, `sitemap.xml` — for when the site goes live.

## Swapping the logo
The logo is not final. To change it, replace these files and keep the same names:
- `assets/brand/logo.svg` — header logo (on light background)
- `assets/brand/logo-on-dark.svg` — footer logo (on dark background)
- `assets/brand/mark-on-dark.svg` — leaf on the hero card
- `assets/brand/mark.svg` — leaf on light background (spare)
- `assets/brand/favicon.png` (64 px) and `assets/brand/app-icon.png` (512 px)
- `assets/brand/og-image.jpg` (1200 x 630, the preview shown when the link is shared)
The site uses the approved logo, version 4.1 (triangle with a solid maple leaf). The header and footer use the version without the CANADA · EGYPT line, because it is too small to read at header size. Master files are in D:\DeltaMaple\claude-logo\v4.1.
If the new logo has a different shape, adjust `.brand-logo` and `.footer-logo` height in `css/styles.css`.

## Placeholders
There are none on the live site. Details not yet confirmed (pack sizes, certifications, CFIA licence, payment terms, addresses, phone numbers, legal name) were left out rather than shown as placeholders. Add them once confirmed. The `.ph` style is still in the CSS if a draft marker is ever needed, but must not be used on the live site.
Nothing on the site claims certifications, clients, volumes or prices.

## Quote form
The form opens the visitor's email app with a pre-filled message to sales@deltamaple.com. To receive submissions directly instead, use a form service such as Formspree or Netlify Forms (set the form's `action` and remove the submit handler in `js/main.js`).

## Hosting
Hosted on GitHub Pages from the deltamaple/website repository, with the custom domain in the `CNAME` file. Keep the existing MX/SPF/DKIM/DMARC email records when changing DNS: only add or change the A/CNAME records for the website.

## Product photos
The product cards use drawn illustrations. To use photos, replace the `<svg>` inside each `.product-art` with `<img src="assets/img/dates.jpg" alt="...">` and add `.product-art img{width:100%;height:100%;object-fit:cover}` to the CSS.
