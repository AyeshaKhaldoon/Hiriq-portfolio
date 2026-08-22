# Hiriq SEO Audit

Last updated: 2026-08-23

## Executive Summary

Hiriq is now structured around a clearer commercial SEO map: AI recruiting software, AI ATS, candidate screening, resume screening, candidate pre-screening, AI interviews, recruiting automation, healthcare staffing, staffing agencies, high-volume hiring, Middle East hiring, and USA/UK hiring.

The highest-value technical fixes implemented in this pass were:

- Added four new high-intent solution pages: healthcare staffing, staffing agencies, high-volume hiring, and candidate pre-screening.
- Generated solution URLs from the canonical solution registry in `app/sitemap.ts`.
- Removed `/search` from the sitemap and marked it `noindex`.
- Added crawl controls for API/private/future app paths in `public/robots.txt`.
- Added 301 redirects for common keyword URL variants.
- Updated homepage metadata and Organization schema to match the actual recruiting product.
- Removed unsupported/fake-feeling claims around SOC 2, zero bias, zero leakage, fake address, automatic rejection, and invented time-saving statistics.
- Updated internal links in navigation, footer, site search, and `llms.txt`.

## Research Inputs

Semrush phrase reports were checked directionally for the US, UK, UAE, and Saudi Arabia. Saudi Arabia returned no usable phrase report from the connected tool, so no Saudi search volume was fabricated.

Sample Semrush observations:

| Market | Keyword | Volume | KD | CPC |
| --- | --- | ---: | ---: | ---: |
| US | AI recruiting software | 1300 | 68 | 15.95 |
| US | staffing agency software | 1000 | 28 | 22.50 |
| US | recruitment automation software | 480 | 22 | 24.86 |
| US | candidate screening software | 480 | 11 | 32.00 |
| US | healthcare staffing software | 480 | 14 | 20.69 |
| US | resume screening software | 320 | 50 | 5.20 |
| US | AI interview platform | 170 | 74 | 13.73 |
| US | healthcare recruitment software | 140 | 13 | 12.56 |
| UK | recruitment agency software | 590 | 51 | 10.65 |
| UK | recruitment automation software | 480 | 36 | 30.08 |
| UK | AI recruitment software | 390 | 61 | 16.81 |
| UK | candidate screening software | 320 | 21 | 40.17 |
| UK | healthcare recruitment software | 210 | 10 | unavailable |
| UAE | recruitment software Dubai | 30 | unavailable | unavailable |

SERP research showed that AI recruiting and AI interview terms are comparison-heavy, while healthcare staffing terms often expect specialist workflow language around clinical staffing, shift/availability needs, credential context, and operational complexity. Hiriq should compete with specific, honest workflow pages instead of thin doorway pages.

## Critical Fixes Completed

| Area | Finding | Fix |
| --- | --- | --- |
| Indexability | `/search` was included in sitemap even though query-result pages are low-value index targets. | Removed `/search` from sitemap and added `noIndex: true`. |
| Solution coverage | No dedicated pages for healthcare staffing, staffing agencies, high-volume hiring, or pre-screening despite clear commercial search intent. | Added four solution pages with unique metadata, FAQs, schema, internal links, and differentiated layouts. |
| Crawling | Robots file only allowed all pages. | Added disallow rules for API, thank-you, search queries, and future private app paths. |
| Canonical consolidation | Common keyword URLs could 404 or split authority if used in backlinks. | Added permanent redirects to canonical solution URLs. |
| Trust | Site had unsupported claims such as SOC 2 compliance, zero data leakage, zero bias, fake address, and invented time-saving numbers. | Softened or removed unsupported claims and replaced them with reviewable, human-oversight language. |

## High Priority Next Steps

- Connect Google Search Console and Bing Webmaster Tools to monitor indexing, crawl errors, and query growth.
- Submit `https://hiriq.co/sitemap.xml` after deployment.
- Create real customer proof only when customers approve public usage.
- Add verified product screenshots or explainer media for the healthcare, staffing agency, and high-volume pages.
- Publish bottom-of-funnel guides for “best X software” and “X alternatives” only when Hiriq can be compared honestly.

## Risk Notes

- Do not claim SOC 2, HIPAA, GDPR compliance, EEOC compliance, bias elimination, or certified audits unless the business has documentation.
- Do not publish fake testimonials, fake office locations, fake client logos, fake review stars, or fake case studies.
- AI hiring content should emphasize human oversight, transparency, configurable criteria, transcripts, scorecards, and recruiter review.
