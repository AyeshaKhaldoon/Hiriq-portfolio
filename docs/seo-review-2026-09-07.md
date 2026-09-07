# Hiriq SEO review: September 7, 2026

## Scope and evidence

Reviewed the local production build, live redirect and canonical behavior, existing product content, supplied product screenshots, public competitor websites, and the connected Semrush account on September 7, 2026. Semrush data was queried separately for the United States, United Kingdom, United Arab Emirates, and Saudi Arabia.

Semrush returned no configured Projects for this account. Domain Analytics and Backlink Analytics were available, but Site Audit and Position Tracking could not return campaign data without a Semrush Project ID.

## Changes

- Added the supplied Edison address to the footer, contact page, directions, map, and Organization PostalAddress schema. This does not create or verify a Google Business Profile.
- Added five articles with distinct intent, relevant internal links, product screenshots, unique titles/descriptions, canonical URLs, social metadata, and article/breadcrumb schema.
- Unified blog data so the listing, article routes, search index, and sitemap include the same eleven posts.
- Fixed category filtering that previously dropped the first result in each category.
- Removed unsupported financial multipliers and savings promises in older articles, corrected a title promising ten strategies where only two existed, and replaced unverified individual bylines with the Hiriq organization byline.
- Corrected article date formats and per-article modification dates. Preserved original publication dates for existing articles.
- Removed full-page pricing loading gates from the hiring-platform and recruiter pages. The initial server response now contains the product content, headings, and links. Regional pricing still updates after hydration.
- Removed the breadcrumb link to the nonexistent resources index.
- Updated the existing llms.txt with the address and article URLs. Left robots.txt byte-for-byte unchanged.
- Tightened keyword ownership across the AI recruiting, candidate screening, recruitment automation, and healthcare pages. Removed broad screening terms from the AI recruiting page, concentrated applicant/HR screening language on the candidate-screening page, and aligned the healthcare page with recruitment rather than workforce-management intent.
- Added concise buyer FAQs informed by Semrush question and related-keyword reports. The copy answers the query without making unsupported savings, compliance, accuracy, or ranking claims.

## Semrush visibility snapshot

| Market | Organic keywords | Estimated organic traffic | Best relevant positions observed |
| --- | ---: | ---: | --- |
| United States | 75 | 0 | HR screening software 46; AI powered recruiting software 48; medical staffing agency software 49; automated AI resume screening 51; AI candidate screening software 52 |
| United Kingdom | 3 | 0 | AI hiring software 47 |
| United Arab Emirates | No data returned | No data returned | No top-100 keyword data found |
| Saudi Arabia | No data returned | No data returned | No top-100 keyword data found |

Semrush reports estimated traffic, not analytics sessions. The US footprint shows that Google has discovered the commercial pages, but most positions are still on pages five through ten. Several screening phrases appeared against multiple URLs. The page-level targeting changes above clarify which URL should own each intent; authority, useful citations, and time are still required for material ranking gains.

## Measured keyword priorities

| Query | US volume / difficulty | UK volume / difficulty | Primary Hiriq page |
| --- | --- | --- | --- |
| Candidate screening software | 480 / 11 | 320 / 19 | /solutions/candidate-screening-software |
| Automated candidate screening | 260 / 11 | 40 / not scored | /solutions/candidate-screening-software |
| Recruiting automation software | 590 / 23 | 480 / 36 | /solutions/recruiting-automation-software |
| Recruitment automation | 1,000 / 25 | not queried in batch | /solutions/recruiting-automation-software |
| Healthcare recruitment software | 140 / 12 | 210 / 10 | /solutions/healthcare-staffing-agencies |
| Healthcare recruiting software | 210 / 16 | not queried in batch | /solutions/healthcare-staffing-agencies |
| AI recruiting software | 1,000 / 66 | 210 / 60 | /solutions/ai-recruiting-software |
| AI interview software | 390 / 75 | 90 / not scored | /compare/best-ai-interview-software |

Volume and difficulty are directional Semrush estimates and can change. Lower-volume terms with clear commercial fit are prioritized ahead of broad, high-difficulty phrases where Hiriq does not yet have enough authority.

## Backlink review

Semrush reported Authority Score 2, 49 backlinks, and 43 referring domains. StaffingHub was the strongest visible relevant referring domain (Authority Score 32). Most other listed domains were low-authority or unrelated, so the raw referring-domain count overstates useful authority.

Do not buy links, automate guest-post placement, or add unrelated directory links. Prioritize earned references from real customers, partners, industry publications, founder interviews, and carefully selected software directories. Do not submit a disavow file solely because low-quality links exist; first confirm a manual action or a documented history of manipulative link building.

## Article intent map

| Article | Primary topic | Main destination |
| --- | --- | --- |
| /blog/ai-ats-buyers-checklist | AI ATS evaluation | /solutions/ai-ats |
| /blog/ai-resume-screening-vs-keyword-filtering | Resume and CV screening | /solutions/ai-resume-screening |
| /blog/live-ai-interviews-vs-one-way-video | Conversational AI interview comparison | /solutions/ai-interview-platform |
| /blog/healthcare-candidate-pre-screening-checklist | Healthcare qualification workflow | /solutions/healthcare-staffing-agencies |
| /blog/high-volume-hiring-automation-playbook | High-volume recruitment automation | /solutions/high-volume-hiring |

The automation guide also links to the existing USA/UK and Middle East pages. It addresses cross-region handoffs without claiming unsupported language coverage, certifications, or regional compliance.

## Public competitor observations

[Workable](https://www.workable.com/) presents recruiting automation within a broader ATS and HR platform. [HireVue](https://www.hirevue.com/) distinguishes AI interviewing, video interviewing, assessments, and workflow automation. These are observations about their public positioning, not a performance or ranking comparison.

Editorial inference for Hiriq: explain what happens at each stage and let buyers inspect actual output. The new content makes the separate pre-screening stage, adaptive interview follow-ups, and recruiter evidence easier to evaluate. No unsupported superiority claims were added.

## Search and AI discovery

Google emphasizes useful, accurate content and a crawlable technical structure for its search and AI experiences. Eligibility does not guarantee indexing, appearance, or recommendations. See [Google's AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) and [guidance on generated content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content).

The existing robots.txt allows public pages and lists the canonical sitemap. No change was needed for this scope. The llms.txt update is a descriptive resource, not a proven ranking mechanism or a command that makes AI systems recommend Hiriq.

## Validation

- Production build, lint, and TypeScript checks passed.
- Generated 57 routes in the merged production build and parsed 48 content pages, including all embedded JSON-LD.
- Verified 47 unique live sitemap URLs, including all eleven articles; no sitemap entries were marked noindex.
- Found no missing or duplicate titles/descriptions, incorrect canonical URLs, or missing main headings among indexable generated pages after fixes.
- Found no broken local anchor destinations or missing directly referenced local image files in the generated pages. Dynamic API behavior and external links were not comprehensively tested.
- Verified article publication/modification date ordering, absolute article image URLs, and breadcrumb schema.
- Confirmed the address is present in generated home/contact HTML and robots.txt is unchanged.

Desktop and mobile browser QA passed for the blog index and a newly added article. Live checks confirmed HTTP 200 responses, non-www canonical URLs, an HTTPS redirect, a working sitemap, and the Edison address in rendered home-page schema. `http://www.hiriq.co` currently takes two redirects to reach `https://hiriq.co`; this can be reduced to one redirect in the hosting/CDN configuration, but it is not a repository change.

## Remaining account work

Create a Semrush Project for `hiriq.co`, then enable Site Audit and Position Tracking. Track the page-to-query mapping above separately for desktop and mobile in the USA, UK, UAE, and Saudi Arabia. Domain Analytics found no current UAE or Saudi top-100 footprint, so those markets need their own baselines rather than assumptions based on US rankings.

Check Search Console landing-page queries, indexing, Core Web Vitals, and conversions alongside Semrush. Neither tool can guarantee Google rankings or recommendations by AI systems.

For earned references, prioritize accurate software directory profiles, existing partners, and relevant editorial coverage. Provide real product evidence and consistent company details. No external profiles, reviews, outreach messages, purchased links, or backlinks were created during this review. Google identifies manipulative link practices in its [spam policies](https://developers.google.com/search/docs/essentials/spam-policies).
