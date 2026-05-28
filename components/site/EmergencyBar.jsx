import Link from 'next/link';
import { site } from '@/lib/site-config';

// EDIT: Top emergency strip — hide by returning null if not desired.
export default function EmergencyBar() {
  const items = [
    `Live dispatch available now`,
    `Serving ${site.serviceArea}`,
    `Licensed local technicians`,
    `Flat-rate pricing before work starts`,
  ];

  return (
    <div className="bg-[#0a0f14] text-white text-xs overflow-hidden">
      <div className="container py-2 flex items-center gap-4">
        <div className="inline-flex items-center gap-2 whitespace-nowrap">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-accent/70 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
          </span>
          <span className="uppercase tracking-[0.18em] text-[10px] text-white/80">24/7 Online</span>
        </div>
        <div className="hidden md:block overflow-hidden flex-1">
          <div className="ticker-track gap-10 text-white/70">
            {[...items, ...items].map((item, index) => (
              <span key={`${item}-${index}`} className="whitespace-nowrap">{item}</span>
            ))}
          </div>
        </div>
        <Link href={`tel:${site.phoneRaw}`} className="ml-auto font-medium text-white/90 hover:text-brand-accent transition">
          {site.phone}
        </Link>
      </div>
    </div>
  );
}
