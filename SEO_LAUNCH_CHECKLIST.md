# Hiriq SEO Launch Checklist

Last updated: 2026-08-23

## Before Deploy

- Run `npm run build`.
- Confirm `/sitemap.xml` includes all indexable solution pages.
- Confirm `/search` has `noindex` and is not in sitemap.
- Confirm `robots.txt` points to `https://hiriq.co/sitemap.xml`.
- Confirm canonical URLs resolve to `https://hiriq.co`.
- Confirm mobile pages do not horizontally scroll.
- Confirm metadata titles and descriptions are unique.

## After Deploy

- Submit `https://hiriq.co/sitemap.xml` in Google Search Console.
- Submit the sitemap in Bing Webmaster Tools.
- Use URL Inspection in Google Search Console for:
  - `https://hiriq.co/`
  - `https://hiriq.co/solutions`
  - `https://hiriq.co/solutions/ai-recruiting-software`
  - `https://hiriq.co/solutions/ai-interview-platform`
  - `https://hiriq.co/solutions/healthcare-staffing-agencies`
  - `https://hiriq.co/solutions/staffing-agencies`
  - `https://hiriq.co/solutions/high-volume-hiring`
  - `https://hiriq.co/solutions/candidate-pre-screening-software`
- Check Search Console for indexing, canonical, sitemap, and mobile usability warnings.
- Test Rich Results for solution pages with FAQ schema.
- Monitor 404s and redirect important broken URLs to the closest canonical page.
- Verify GA4 is active only after setting `NEXT_PUBLIC_GA_ID`.

## Weekly SEO Ops

- Review queries gaining impressions but low CTR.
- Improve titles/descriptions on pages with high impressions and weak clicks.
- Track rankings for P0/P1 terms in US, UK, UAE/GCC, and Middle East queries.
- Add one high-quality educational page per cluster.
- Pursue relevant backlinks with natural anchor text.
- Keep claims accurate and remove anything not backed by product reality.

## Backlink QA

- Prefer relevant HR tech, recruiting, startup, healthcare staffing, and agency operations sites.
- Avoid spam directories, paid link farms, irrelevant guest posts, and copied AI articles.
- Vary anchors between brand, product category, and page-specific phrases.
- Point backlinks to the page that best matches the anchor.
