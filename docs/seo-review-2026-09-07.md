# Hiriq SEO review: September 7, 2026

## Scope and evidence

Reviewed the local production build, existing product content, supplied product screenshots, and public competitor websites. Semrush tools were not exposed in this conversation. Browser permission checks rejected both the Semrush website and the supplied ChatGPT plugin connection page. No private Semrush keyword volumes, difficulty scores, ranking positions, backlink metrics, or audit results were retrieved.

The five topics below are editorial opportunities based on Hiriq's documented capabilities and buyer questions. They are not a measured Semrush keyword-gap report.

## Changes

- Added the supplied Edison address to the footer, contact page, directions, map, and Organization PostalAddress schema. This does not create or verify a Google Business Profile.
- Added five articles with distinct intent, relevant internal links, product screenshots, unique titles/descriptions, canonical URLs, social metadata, and article/breadcrumb schema.
- Unified blog data so the listing, article routes, search index, and sitemap include the same eight posts.
- Fixed category filtering that previously dropped the first result in each category.
- Removed unsupported financial multipliers and savings promises in older articles, corrected a title promising ten strategies where only two existed, and replaced unverified individual bylines with the Hiriq organization byline.
- Corrected article date formats and per-article modification dates. Preserved original publication dates for existing articles.
- Removed full-page pricing loading gates from the hiring-platform and recruiter pages. The initial server response now contains the product content, headings, and links. Regional pricing still updates after hydration.
- Removed the breadcrumb link to the nonexistent resources index.
- Updated the existing llms.txt with the address and article URLs. Left robots.txt byte-for-byte unchanged.

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
- Parsed 36 generated content pages and all embedded JSON-LD.
- Verified 35 unique sitemap URLs, including all eight articles; no sitemap entries were marked noindex.
- Found no missing or duplicate titles/descriptions, incorrect canonical URLs, or missing main headings among indexable generated pages after fixes.
- Found no broken local anchor destinations or missing directly referenced local image files in the generated pages. Dynamic API behavior and external links were not comprehensively tested.
- Verified article publication/modification date ordering, absolute article image URLs, and breadcrumb schema.
- Confirmed the address is present in generated home/contact HTML and robots.txt is unchanged.

Local server startup was denied with EPERM, so desktop/mobile browser QA could not be completed in this session. Public-domain DNS failed in the shell, and production robots/sitemap fetches through the web tool failed. These checks establish local build correctness, not live deployment, indexing, Core Web Vitals, or ranking performance.

## Remaining account work

When Semrush tools become available, compare hiriq.co with competitors in separate US, UK, UAE, and Saudi Arabia databases where supported. Use current query volume, intent, ranking pages, and difficulty to prioritize refinements; do not assume the highest-volume query is the best customer opportunity. Check Search Console landing-page queries and indexing alongside those results.

For earned references, prioritize accurate software directory profiles, existing partners, and relevant editorial coverage. Provide real product evidence and consistent company details. No external profiles, reviews, outreach messages, purchased links, or backlinks were created during this review. Google identifies manipulative link practices in its [spam policies](https://developers.google.com/search/docs/essentials/spam-policies).
