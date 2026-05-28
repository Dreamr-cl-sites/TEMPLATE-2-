import { services } from '@/lib/services-data';

export const locations = [
  {
    slug: 'tulsa',
    name: 'Tulsa',
    region: 'OK',
    neighborhoods: ['Midtown', 'Brookside', 'Cherry Street', 'South Tulsa', 'Kendall-Whittier'],
    gbpUrl: 'https://www.google.com/search?q=Maston%27s+Plumbing+and+Drain+Tulsa',
    summary:
      'Tulsa homeowners and businesses call Maston’s for emergency plumbing, drain cleaning, water heaters, leak repair, sewer service, and fixture work from a local team that knows the city.',
  },
  {
    slug: 'broken-arrow',
    name: 'Broken Arrow',
    region: 'OK',
    neighborhoods: ['Rose District', 'Stone Wood Hills', 'Forest Ridge', 'Aspen Creek', 'Battle Creek'],
    gbpUrl: 'https://www.google.com/search?q=Maston%27s+Plumbing+Broken+Arrow',
    summary:
      'From newer subdivisions to established homes, Maston’s supports Broken Arrow with same-day plumbing repairs, drain solutions, and water heater help.',
  },
  {
    slug: 'bixby',
    name: 'Bixby',
    region: 'OK',
    neighborhoods: ['Downtown Bixby', 'Southtown', 'Riverbend', 'The Estates', 'Leonard'],
    gbpUrl: 'https://www.google.com/search?q=Maston%27s+Plumbing+Bixby',
    summary:
      'Bixby residents rely on Maston’s for clean, careful plumbing work, including leak detection, water filtration, fixture replacement, and emergency response.',
  },
  {
    slug: 'jenks',
    name: 'Jenks',
    region: 'OK',
    neighborhoods: ['Downtown Jenks', 'South Lakes', 'Yorktown', 'Forest Hills', 'River District'],
    gbpUrl: 'https://www.google.com/search?q=Maston%27s+Plumbing+Jenks',
    summary:
      'Maston’s serves Jenks homes and businesses with responsive plumbing, sewer and drain support, water heaters, and remodel-ready fixture installation.',
  },
  {
    slug: 'owasso',
    name: 'Owasso',
    region: 'OK',
    neighborhoods: ['Bailey Ranch', 'Stone Canyon', 'Elm Creek', 'Three Lakes', 'Coffee Creek'],
    gbpUrl: 'https://www.google.com/search?q=Maston%27s+Plumbing+Owasso',
    summary:
      'For Owasso plumbing problems, Maston’s brings clear communication, 24/7 emergency availability, and practical repair options.',
  },
  {
    slug: 'sand-springs',
    name: 'Sand Springs',
    region: 'OK',
    neighborhoods: ['Prattville', 'Angus Valley', 'Keystone', 'Berryhill', 'Downtown Sand Springs'],
    gbpUrl: 'https://www.google.com/search?q=Maston%27s+Plumbing+Sand+Springs',
    summary:
      'Maston’s helps Sand Springs customers with drain cleaning, sewer concerns, pipe repair, water heaters, and urgent plumbing service.',
  },
  {
    slug: 'sapulpa',
    name: 'Sapulpa',
    region: 'OK',
    neighborhoods: ['Downtown Sapulpa', 'Lone Star', 'Pretty Water', 'Allen Bowden', 'Kellyville Road'],
    gbpUrl: 'https://www.google.com/search?q=Maston%27s+Plumbing+Sapulpa',
    summary:
      'Sapulpa-area homes get friendly, reliable plumbing help from Maston’s, from fixture repairs to sewer backups and water heater failures.',
  },
  {
    slug: 'coweta',
    name: 'Coweta',
    region: 'OK',
    neighborhoods: ['Downtown Coweta', 'Mission Heights', 'Wagoner County', 'Oneta', 'Porter'],
    gbpUrl: 'https://www.google.com/search?q=Maston%27s+Plumbing+Coweta',
    summary:
      'Maston’s routes plumbing and drain technicians to Coweta for repair calls, inspections, water heaters, and emergency issues.',
  },
  {
    slug: 'claremore',
    name: 'Claremore',
    region: 'OK',
    neighborhoods: ['Will Rogers', 'Verdigris', 'Sequoyah', 'Foyil', 'Rogers State area'],
    gbpUrl: 'https://www.google.com/search?q=Maston%27s+Plumbing+Claremore',
    summary:
      'Claremore customers can call Maston’s for professional plumbing service backed by the same Tulsa-area standards and response-first approach.',
  },
  {
    slug: 'catoosa',
    name: 'Catoosa',
    region: 'OK',
    neighborhoods: ['Port of Catoosa', 'Redbud Valley', 'Cherokee Hills', 'Verdigris River', 'Rolling Hills'],
    gbpUrl: 'https://www.google.com/search?q=Maston%27s+Plumbing+Catoosa',
    summary:
      'Maston’s supports Catoosa with residential and light commercial plumbing, drains, water heaters, and leak repair.',
  },
  {
    slug: 'glenpool',
    name: 'Glenpool',
    region: 'OK',
    neighborhoods: ['Black Gold Park', 'Kendalwood', 'South County', 'Elwood', 'Jasper Street area'],
    gbpUrl: 'https://www.google.com/search?q=Maston%27s+Plumbing+Glenpool',
    summary:
      'Glenpool homeowners call Maston’s for courteous plumbing repairs, drain clearing, filtration options, and same-day scheduling when available.',
  },
  {
    slug: 'collinsville',
    name: 'Collinsville',
    region: 'OK',
    neighborhoods: ['Downtown Collinsville', 'Morrow Road', 'North County', 'Vera', 'Highway 20 corridor'],
    gbpUrl: 'https://www.google.com/search?q=Maston%27s+Plumbing+Collinsville',
    summary:
      'Maston’s extends dependable Green Country plumbing service to Collinsville, including emergency calls, water heaters, drain cleaning, and pipe repairs.',
  },
];

export function getLocation(slug) {
  return locations.find((location) => location.slug === slug);
}

export function getLocationServiceLinks() {
  return services.slice(0, 8).map((service) => ({
    slug: service.slug,
    name: service.name,
    href: `/services/${service.slug}`,
    keyword: `${service.name.toLowerCase()} near ${service.slug === 'emergency-plumbing' ? 'me' : 'Tulsa'}`,
  }));
}
