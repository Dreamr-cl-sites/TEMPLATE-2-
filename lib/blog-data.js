import { images, site } from '@/lib/site-config';

const city = site.address.city;

export const posts = [
  {
    slug: `BUYER_INTENT_POST_1_SLUG_GOES_HERE`,
    title: `BUYER_INTENT_POST_1_TITLE_GOES_HERE`,
    date: 'May 20, 2026',
    read: '6 min',
    tag: 'Buyer Intent',
    img: images.workShot2,
    excerpt: `BUYER_INTENT_POST_1_EXCERPT_GOES_HERE`,
    body: `BUYER_INTENT_POST_1_BODY_GOES_HERE\n\n(Write this with local buying intent. Link to the exact service and location pages that convert.)`,
    serviceSlug: 'water-heaters',
    locationSlug: 'city-1',
  },
  {
    slug: `BUYER_INTENT_POST_2_SLUG_GOES_HERE`,
    title: `BUYER_INTENT_POST_2_TITLE_GOES_HERE`,
    date: 'May 15, 2026',
    read: '5 min',
    tag: 'Buyer Intent',
    img: images.workShot3,
    excerpt: `BUYER_INTENT_POST_2_EXCERPT_GOES_HERE`,
    body: `BUYER_INTENT_POST_2_BODY_GOES_HERE`,
    serviceSlug: 'sewer-line',
    locationSlug: 'city-2',
  },
  {
    slug: `BUYER_INTENT_POST_3_SLUG_GOES_HERE`,
    title: `BUYER_INTENT_POST_3_TITLE_GOES_HERE`,
    date: 'May 6, 2026',
    read: '7 min',
    tag: 'Buyer Intent',
    img: images.workShot1,
    excerpt: 'BUYER_INTENT_POST_3_EXCERPT_GOES_HERE',
    body: `BUYER_INTENT_POST_3_BODY_GOES_HERE`,
    serviceSlug: 'repiping',
    locationSlug: 'city-3',
  },
  {
    slug: `BUYER_INTENT_POST_4_SLUG_GOES_HERE`,
    title: `BUYER_INTENT_POST_4_TITLE_GOES_HERE`,
    date: 'April 30, 2026',
    read: '4 min',
    tag: 'Emergency',
    img: images.bathroom3,
    excerpt: 'BUYER_INTENT_POST_4_EXCERPT_GOES_HERE',
    body: `BUYER_INTENT_POST_4_BODY_GOES_HERE`,
    serviceSlug: 'emergency-plumbing',
    locationSlug: 'city-4',
  },
];
