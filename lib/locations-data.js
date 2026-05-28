import { site } from '@/lib/site-config';
import { services } from '@/lib/services-data';

const city = site.address.city;

export const locations = [
  { slug: 'city-1', name: 'CITY_1', region: 'STATE_OR_REGION', neighborhoods: ['NEIGHBORHOOD_1A', 'NEIGHBORHOOD_1B', 'NEIGHBORHOOD_1C'], gbpUrl: 'GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_1', summary: `LOCATION_1_SUMMARY_GOES_HERE` },
  { slug: 'city-2', name: 'CITY_2', region: 'STATE_OR_REGION', neighborhoods: ['NEIGHBORHOOD_2A', 'NEIGHBORHOOD_2B', 'NEIGHBORHOOD_2C'], gbpUrl: 'GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_2', summary: `LOCATION_2_SUMMARY_GOES_HERE` },
  { slug: 'city-3', name: 'CITY_3', region: 'STATE_OR_REGION', neighborhoods: ['NEIGHBORHOOD_3A', 'NEIGHBORHOOD_3B', 'NEIGHBORHOOD_3C'], gbpUrl: 'GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_3', summary: `LOCATION_3_SUMMARY_GOES_HERE` },
  { slug: 'city-4', name: 'CITY_4', region: 'STATE_OR_REGION', neighborhoods: ['NEIGHBORHOOD_4A', 'NEIGHBORHOOD_4B', 'NEIGHBORHOOD_4C'], gbpUrl: 'GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_4', summary: `LOCATION_4_SUMMARY_GOES_HERE` },
  { slug: 'city-5', name: 'CITY_5', region: 'STATE_OR_REGION', neighborhoods: ['NEIGHBORHOOD_5A', 'NEIGHBORHOOD_5B', 'NEIGHBORHOOD_5C'], gbpUrl: 'GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_5', summary: `LOCATION_5_SUMMARY_GOES_HERE` },
  { slug: 'city-6', name: 'CITY_6', region: 'STATE_OR_REGION', neighborhoods: ['NEIGHBORHOOD_6A', 'NEIGHBORHOOD_6B', 'NEIGHBORHOOD_6C'], gbpUrl: 'GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_6', summary: `LOCATION_6_SUMMARY_GOES_HERE` },
  { slug: 'city-7', name: 'CITY_7', region: 'STATE_OR_REGION', neighborhoods: ['NEIGHBORHOOD_7A', 'NEIGHBORHOOD_7B', 'NEIGHBORHOOD_7C'], gbpUrl: 'GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_7', summary: `LOCATION_7_SUMMARY_GOES_HERE` },
  { slug: 'city-8', name: 'CITY_8', region: 'STATE_OR_REGION', neighborhoods: ['NEIGHBORHOOD_8A', 'NEIGHBORHOOD_8B', 'NEIGHBORHOOD_8C'], gbpUrl: 'GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_8', summary: `LOCATION_8_SUMMARY_GOES_HERE` },
  { slug: 'city-9', name: 'CITY_9', region: 'STATE_OR_REGION', neighborhoods: ['NEIGHBORHOOD_9A', 'NEIGHBORHOOD_9B', 'NEIGHBORHOOD_9C'], gbpUrl: 'GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_9', summary: `LOCATION_9_SUMMARY_GOES_HERE` },
  { slug: 'city-10', name: 'CITY_10', region: 'STATE_OR_REGION', neighborhoods: ['NEIGHBORHOOD_10A', 'NEIGHBORHOOD_10B', 'NEIGHBORHOOD_10C'], gbpUrl: 'GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_10', summary: `LOCATION_10_SUMMARY_GOES_HERE` },
  { slug: 'city-11', name: 'CITY_11', region: 'STATE_OR_REGION', neighborhoods: ['NEIGHBORHOOD_11A', 'NEIGHBORHOOD_11B', 'NEIGHBORHOOD_11C'], gbpUrl: 'GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_11', summary: `LOCATION_11_SUMMARY_GOES_HERE` },
  { slug: 'city-12', name: 'CITY_12', region: 'STATE_OR_REGION', neighborhoods: ['NEIGHBORHOOD_12A', 'NEIGHBORHOOD_12B', 'NEIGHBORHOOD_12C'], gbpUrl: 'GOOGLE_BUSINESS_PROFILE_URL_FOR_CITY_12', summary: `LOCATION_12_SUMMARY_GOES_HERE` },
];

export function getLocation(slug) {
  return locations.find((location) => location.slug === slug);
}

export function getLocationServiceLinks() {
  return services.map((service) => ({
    slug: service.slug,
    name: service.name,
    href: `/services/${service.slug}`,
    keyword: `${service.name.toLowerCase()} ${city}`,
  }));
}
