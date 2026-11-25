# Astrella 2.0 review

## Scope and status

Redesign based on `980383543d6873dde2eaee18678ed9b4041cf562` on `astrella-v2-redesign`. Original stack, logo and founder photograph retained. No production deployment or domain change was performed. The current project assets explicitly identify Aurea, Solis and Aura as self-initiated concepts, not verified client engagements. Homepage and case studies now disclose this status.

## Verified baseline and defects

Baseline: `npm ci`, production build, `tsc --noEmit`, lint (zero errors, nine warnings), and homepage SSR passed.

| Defect | Severity | Reproduction | Change / verification |
| --- | --- | --- | --- |
| Enquiry falsely implies delivery | Critical | Original submit handler only waits 700ms then shows thank-you; no network request exists | Replace with explicitly labelled email preparation. Browser verified recipient and encoded draft; no live message sent. Actual email delivery remains dependent on the visitor sending it. |
| Social management absent from primary services | High | Read original four service titles | Dedicated social media service and capabilities added. |
| Legal page navigation uses local anchors | Medium | Open `/privacy`, then follow original `#work` link | Navigation now uses `/#work` etc. |
| Case study gallery nests buttons in role=button | Serious accessibility | Axe finds nested-interactive on Aura | Separate image-open button from gallery controls. Subsequent homepage axe scan reports zero violations for selected WCAG A/AA tags. |
| Menu and case study lack focus containment | High | Original overlays only set aria-modal, no focus management | Focus trap, Escape handling, background inert state and focus restoration added. Browser verified mobile Escape returns focus. |
| Motion hides content pending JS | Medium | Original CSS sets reveal opacity zero | Content visible by default; hero requires no reveal animation. |

## Design and content

Clear Cape Town positioning and a direct description of web design and social media. Large sans display paired with existing editorial serif; restrained lavender; contrasting light industry section; concise four-stage process. Removed celestial decoration, repeated manifesto/principles and custom cursor from rendered pages. Direct email and supplied telephone contact, named Sebastian Messens, ten native keyboard-operable FAQs, original logo in footer and working legal links.

Social URLs and second founder identity are not invented. WhatsApp remains omitted pending confirmation. The supplied number is used for preview review; public-company use must be confirmed before launch. Concept results are descriptions of design intent, not revenue or conversion claims.

## Structured simulated stakeholder review

These are simulated judgments, not feedback from independent people. Counts below allocate 100 role perspectives across the requested cohorts. Baseline findings derive from repository content and the captured baseline; after findings derive from the local redesign. No deployed-preview review has occurred.

| Cohort / count | Baseline concern / objection | Redesign assessment / remaining objection |
| --- | --- | --- |
| Local service owners / 20 | Unclear offer, exclusivity, no quick phone contact | Clear offer and trade-specific use cases; call option. Need genuine completed trade projects. |
| Hospitality and coffee / 10 | Abstract positioning; portfolio lacks outcomes | Explicit reservation/menu benefits, hospitality concept. Need authentic hospitality project evidence. |
| Wellness and aesthetics / 10 | Insufficient treatment/bookings relevance | Industry copy addresses informed enquiries. Need owner-verified work and service policies. |
| Property / 10 | Vague creative language | Property-specific listing and agent contact benefits. Concept is honestly disclosed. |
| Competing agencies / 10 | Repetitive editorial phrasing and visual motifs | Reduced repetition and decoration; differentiated dark/light composition. Real project photography would strengthen distinction. |
| Senior developers / 10 | Fake enquiry success; deployment target mismatch | Honest handoff, valid SSR, preserved stack and tested Vercel output. Real email backend still absent. |
| Designers / 10 | Excessive similar sections; unnecessary star systems | Stronger hierarchy and varied section rhythm. Existing conceptual mockups remain an asset limitation. |
| Conversion specialists / 10 | Mandatory budget and multi-step contact friction | Short form, direct phone/email and no mandatory budget. Email-app dependency remains a conversion compromise. |
| SEO specialists / 5 | Abstract title/description, low local relevance | Updated metadata and service schema, existing sitemap and robots preserved; preview-only noindex headers generated. Search ranking and field traffic unmeasured. |
| Accessibility/mobile specialists / 5 | Focus management, low-contrast labels, nested controls | Improved label contrast and focus isolation; no overflow in nine widths; zero selected axe violations. Cross-engine, screen reader and physical-device testing remain outstanding. |

Repeated findings consolidated into completed backlog: clarify offer, prioritise social management, simplify contact, disclose concepts, add local relevance, remove exclusive language, name known founder, add FAQ, repair keyboard interactions. Open backlog: real client evidence, second founder name/roles, WhatsApp/public phone confirmation, social URLs, owner-reviewed commercial/legal policies, real delivery provider if on-site submission is desired, deployed preview verification.

## Validation

- Default Cloudflare build, Vercel preview build and Node production build passed.
- TypeScript passed; lint baseline had nine warnings. Build output `.vercel` is now ignored by Git and ESLint.
- Playwright Chromium tested no horizontal overflow at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920 pixels.
- Tested mobile menu selection/Escape/focus restoration; case-study open/close; FAQ disclosure; reduced-motion headline; safe email-draft preparation; `/privacy` and `/terms` HTTP 200. No page errors recorded.
- Homepage axe scan: zero violations for WCAG 2 A/AA, 2.1 AA and 2.2 AA tags. This is not a compliance certification or exhaustive manual accessibility audit.
- Screenshots captured at 390, 768, 1440 and 1920 pixels. Local artifacts are under `/workspace/astrella-review`.
- Lighthouse mobile lab run against local Node production output: performance 77, accessibility 100, best practices 96, SEO 100; FCP 1.7s, LCP 6.2s, CLS 0, TBT 20ms. LCP misses the target. These are single-run simulated lab measurements, not field Core Web Vitals or INP. No reliable comparable pre-redesign Lighthouse baseline was collected. External font access is blocked in the current instance; results need repeating once settings propagate and on the deployment.
- Firefox/WebKit, physical devices, external email delivery, live WhatsApp, and deployed-preview verification have not been tested.

## Deployment

Vite chooses the supported Nitro `vercel` preset when VERCEL is set; preview builds generate `X-Robots-Tag: noindex, nofollow`, while production builds preserve indexability. `vercel.json` uses frozen npm installation. Generated `.vercel/output/config.json` and Node 24 function configuration were inspected. Existing project identity must match `prj_C1HmxiXs7x0jAakEc7vN3BmtzJX5` under `team_rd1j79EuOTCB9Dn7MHoeQ7tF`. Never use --prod.

The Vercel project and team were verified through the authenticated project API before preview deployment.
