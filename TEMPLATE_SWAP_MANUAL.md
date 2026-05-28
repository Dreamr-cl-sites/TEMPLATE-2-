## Template Swap Manual (VA / AI Agent)

Goal: keep **all structure, animations, routes, and components the same**. Only swap placeholders (copy, data, colors, media, links).

### What to change (in order)

#### 1) Business identity (one file)
- **File:** `lib/site-config.js`
- **Replace these placeholders:**
  - `BUSINESS_NAME_GOES_HERE`
  - `TAGLINE_GOES_HERE`
  - `BUSINESS_DESCRIPTION_GOES_HERE (1-2 sentences, local + trust + primary offer)`
  - `PHONE_NUMBER_GOES_HERE` (display format)
  - `E164_PHONE_NUMBER_GOES_HERE` (tap-to-call format, e.g. `+15551234567`)
  - `EMAIL_GOES_HERE`
  - Address fields: `ADDRESS_LINE_1_GOES_HERE`, `CITY_GOES_HERE`, `STATE_OR_REGION_GOES_HERE`, `POSTAL_CODE_GOES_HERE`, `COUNTRY_GOES_HERE`
  - `HOURS_GO_HERE`
  - `SERVICE_AREA_GOES_HERE`
  - Social links: `FACEBOOK_URL_OR_EMPTY`, `INSTAGRAM_URL_OR_EMPTY`, `GOOGLE_BUSINESS_PROFILE_URL_OR_EMPTY`
  - Trust badges: `TRUST_BADGE_1..4`
  - Cities list: `CITY_1..CITY_12`
  - Stats: `STAT_VALUE_1..4` + `STAT_LABEL_1..4`
  - Testimonials: `REVIEWER_NAME_*`, `REVIEW_*_GOES_HERE`, `RELATED_SERVICE_*`
  - FAQs: `FAQ_QUESTION_*`, `FAQ_ANSWER_*`

#### 2) Services (service pages + internal linking)
- **File:** `lib/services-data.js`
- Keep slugs and structure; replace only placeholder strings:
  - `SERVICE_1_NAME_GOES_HERE` ... `SERVICE_8_NAME_GOES_HERE`
  - `SERVICE_*_PRIMARY_KEYWORD_GOES_HERE`
  - `SERVICE_*_SHORT_DESCRIPTION_GOES_HERE`
  - `SERVICE_*_TYPICAL_DURATION_GOES_HERE`
  - `SERVICE_*_PRICING_EXPLANATION_GOES_HERE`
  - `SERVICE_*_HERO_PARAGRAPH_GOES_HERE`
  - `SERVICE_*_INCLUDE_1..5`
  - `SERVICE_*_SIGN_1..5`
  - `SERVICE_*_FAQ_Q1/Q2` + `SERVICE_*_FAQ_A1/A2`

Notes:
- Each service generates a dedicated page at: `/services/{slug}`.
- These pages pull **exactly** from `lib/services-data.js`. Do not hardcode service copy anywhere else.

#### 3) Locations (location pages + ticker + SEO structure)
- **File:** `lib/locations-data.js`
- Replace:
  - `CITY_*` location names
  - `NEIGHBORHOOD_*` lists
  - `GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_*`
  - `LOCATION_*_SUMMARY_GOES_HERE`

Notes:
- Location index page: `/locations`
- Location pages: `/locations/{slug}`
- Homepage shows locations in a **ticker** (not a giant SEO block).

#### 4) Blog (buyer intent content that links to converting pages)
- **File:** `lib/blog-data.js`
- Replace placeholders:
  - `BUYER_INTENT_POST_*_SLUG_GOES_HERE`
  - `BUYER_INTENT_POST_*_TITLE_GOES_HERE`
  - `BUYER_INTENT_POST_*_EXCERPT_GOES_HERE`
  - `BUYER_INTENT_POST_*_BODY_GOES_HERE`
- Ensure each post links through:
  - `serviceSlug` -> `/services/{serviceSlug}`
  - `locationSlug` -> `/locations/{locationSlug}`

### Branding & color swaps

#### Palette
- **File:** `tailwind.config.js`
- Edit only `theme.extend.colors.brand`:
  - `navy`: darkest background/text anchor
  - `cream`: global page background
  - `blue`: accent “light-blue” used for links/CTAs
  - `accent`: secondary highlight color (sparingly)
  - `mute`: secondary body text

#### Global UI classes
- **File:** `app/globals.css`
- Keep structure; adjust only:
  - `.btn-primary` (main CTA)
  - `.btn-ghost` (secondary CTA)
  - `.eyebrow` and `.h-display` typography feel

### Images / art direction
- **File:** `lib/site-config.js` → `export const images`
- Swap URLs for:
  - moody, high-contrast, cinematic textures (metal/fixtures/pipes)
  - consistent lighting + style across the set

### SEO base URL (important)
- **File:** `app/layout.js`
- Replace:
  - `metadataBase: new URL('https://example.com')`
  - with the real production domain.

### Do NOT change
- Routes under `app/`
- Component structure or layout logic
- Animation classes / reveal behavior
- Slugs for existing routes (unless you also update links consistently)

