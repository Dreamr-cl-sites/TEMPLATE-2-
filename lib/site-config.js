// ============================================================
// CLIENT-EDITABLE CONFIG — start here when applying to a new client.
// Replace these values with your client's real business info.
// Every page on the site reads from this file.
// ============================================================

export const site = {
  // EDIT: Business name (used in nav, footer, meta, copyright)
  name: 'BUSINESS_NAME_GOES_HERE',
  // EDIT: Short tagline used in nav and SEO
  tagline: 'TAGLINE_GOES_HERE',
  // EDIT: One-sentence description used for SEO and OpenGraph
  description: 'BUSINESS_DESCRIPTION_GOES_HERE (1-2 sentences, local + trust + primary offer)',
  // EDIT: Public phone number (tap-to-call on mobile)
  phone: 'PHONE_NUMBER_GOES_HERE',
  phoneRaw: 'E164_PHONE_NUMBER_GOES_HERE',
  // EDIT: Public email
  email: 'EMAIL_GOES_HERE',
  // EDIT: Physical address
  address: {
    line1: 'ADDRESS_LINE_1_GOES_HERE',
    city: 'CITY_GOES_HERE',
    region: 'STATE_OR_REGION_GOES_HERE',
    postal: 'POSTAL_CODE_GOES_HERE',
    country: 'COUNTRY_GOES_HERE',
  },
  // EDIT: Business hours (shown in header bar and footer)
  hours: 'HOURS_GO_HERE (e.g. 24/7 Emergency · Office Mon–Sat 7a–7p)',
  // EDIT: Years in business
  yearsInBusiness: 0,
  // EDIT: Service radius copy
  serviceArea: 'SERVICE_AREA_GOES_HERE (e.g. City & 30-mile radius)',
  // EDIT: Social links (leave blank to hide that icon)
  social: {
    facebook: 'FACEBOOK_URL_OR_EMPTY',
    instagram: 'INSTAGRAM_URL_OR_EMPTY',
    google: 'GOOGLE_BUSINESS_PROFILE_URL_OR_EMPTY',
    youtube: '',
  },
  // EDIT: Trust badges — short pill labels in hero & footer
  trustBadges: [
    'TRUST_BADGE_1',
    'TRUST_BADGE_2',
    'TRUST_BADGE_3',
    'TRUST_BADGE_4',
  ],
  // EDIT: Service area towns/neighborhoods (shown on home + contact)
  serviceTowns: [
    'CITY_1', 'CITY_2', 'CITY_3', 'CITY_4', 'CITY_5',
    'CITY_6', 'CITY_7', 'CITY_8', 'CITY_9', 'CITY_10',
    'CITY_11', 'CITY_12',
  ],
  // EDIT: Stats shown across the site
  stats: [
    { value: 'STAT_VALUE_1', label: 'STAT_LABEL_1' },
    { value: 'STAT_VALUE_2', label: 'STAT_LABEL_2' },
    { value: 'STAT_VALUE_3', label: 'STAT_LABEL_3' },
    { value: 'STAT_VALUE_4', label: 'STAT_LABEL_4' },
  ],
};

// ============================================================
// IMAGES — swap with the client's real photos when available.
// Keep filenames the same OR change paths here only.
// ============================================================
export const images = {
  heroPlumber:  'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=80',
  plumberTeam:  'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1400&q=80',
  workShot1:    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=80',
  workShot2:    'https://images.unsplash.com/photo-1618221710640-9f2d6fa5c651?auto=format&fit=crop&w=1400&q=80',
  workShot3:    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80',
  bathroom1:    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
  bathroom2:    'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=1400&q=80',
  bathroom3:    'https://images.unsplash.com/photo-1616594039964-3f5e5b8d4cd8?auto=format&fit=crop&w=1400&q=80',
};

// ============================================================
// TESTIMONIALS — replace with real reviews from Google/Yelp/etc.
// ============================================================
export const testimonials = [
  { name: 'REVIEWER_NAME_1', city: 'CITY_1', rating: 5, quote: 'REVIEW_1_GOES_HERE', service: 'RELATED_SERVICE_1' },
  { name: 'REVIEWER_NAME_2', city: 'CITY_2', rating: 5, quote: 'REVIEW_2_GOES_HERE', service: 'RELATED_SERVICE_2' },
  { name: 'REVIEWER_NAME_3', city: 'CITY_3', rating: 5, quote: 'REVIEW_3_GOES_HERE', service: 'RELATED_SERVICE_3' },
  { name: 'REVIEWER_NAME_4', city: 'CITY_4', rating: 5, quote: 'REVIEW_4_GOES_HERE', service: 'RELATED_SERVICE_4' },
  { name: 'REVIEWER_NAME_5', city: 'CITY_5', rating: 5, quote: 'REVIEW_5_GOES_HERE', service: 'RELATED_SERVICE_5' },
  { name: 'REVIEWER_NAME_6', city: 'CITY_6', rating: 5, quote: 'REVIEW_6_GOES_HERE', service: 'RELATED_SERVICE_6' },
];

// ============================================================
// FAQ — feel free to add/edit. Used on home + dedicated FAQ page.
// ============================================================
export const faqs = [
  { q: 'FAQ_QUESTION_1', a: 'FAQ_ANSWER_1' },
  { q: 'FAQ_QUESTION_2', a: 'FAQ_ANSWER_2' },
  { q: 'FAQ_QUESTION_3', a: 'FAQ_ANSWER_3' },
  { q: 'FAQ_QUESTION_4', a: 'FAQ_ANSWER_4' },
  { q: 'FAQ_QUESTION_5', a: 'FAQ_ANSWER_5' },
  { q: 'FAQ_QUESTION_6', a: 'FAQ_ANSWER_6' },
  { q: 'FAQ_QUESTION_7', a: 'FAQ_ANSWER_7' },
  { q: 'FAQ_QUESTION_8', a: 'FAQ_ANSWER_8' },
];
