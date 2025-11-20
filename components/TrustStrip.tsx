import React from 'react';

const items = [
  {
    title: 'Trusted by Indian Startups',
    desc: 'Nationwide registrations & support',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21h14M12 3v4" />
      </svg>
    ),
  },
  {
    title: '4.9★ Average Rating',
    desc: 'Over 20,000+ satisfied customer reviews',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.95c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.39 2.655c-.785.57-1.84-.196-1.54-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.62 9.378c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.951z" />
      </svg>
    ),
  },
  {
    title: '₹50+ Crore Saved',
    desc: 'Reduced costs for founders across services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v3m0 12v3" />
      </svg>
    ),
  },
  {
    title: 'Top-Rated Mobile App',
    desc: 'Register & manage your business on-the-go',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 18h2" />
      </svg>
    ),
  },
];

const TrustStrip: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="text-white" style={{ backgroundColor: '#032353ff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 md:py-6 space-y-4 md:space-y-0 md:space-x-4">
            {items.map((it, idx) => (
              <div key={idx} className="w-full flex flex-col md:flex-row items-center gap-3 text-sm md:text-base text-white/95 flex-1 min-w-0 p-6 md:p-0 rounded-lg md:rounded-none bg-white/5 md:bg-transparent">
                <div className="flex-shrink-0 bg-white/10 p-3 md:p-2 rounded-md text-white flex items-center justify-center mx-auto md:mx-0 mb-3 md:mb-0">
                  {it.icon}
                </div>
                <div className="leading-tight truncate text-center md:text-left">
                  <div className="font-semibold text-white text-lg md:text-base whitespace-pre-line">{it.title}</div>
                  <div className="text-white/90 text-sm md:text-sm">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
