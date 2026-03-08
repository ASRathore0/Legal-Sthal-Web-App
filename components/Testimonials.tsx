import React, { useEffect, useRef, useState } from 'react';
import { TestimonialItem } from '../types';
import { getStorageUrl } from '../services/cmsService';

interface TestimonialsProps {
  data?: TestimonialItem[];
}

const AUTOPLAY_INTERVAL = 4000;

const getInitials = (name: string) => {
  if (!name) return '??';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const getPlaceholderDataUri = (name: string) => {
  const initials = getInitials(name);
  const bg = '#f3f4f6';
  const fg = '#374151';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128'><rect fill='${bg}' width='100%' height='100%'/><text x='50%' y='55%' font-size='44' text-anchor='middle' fill='${fg}' font-family='Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' dy='.35em'>${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const Testimonials: React.FC<TestimonialsProps> = ({ data = [] }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const safeData = data.length > 0 ? data : [];

  useEffect(() => {
    // Start autoplay once on mount and clean up on unmount
    if (safeData.length > 0) {
      startAutoplay();
    }
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeData.length]);

  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeData.length);
    }, AUTOPLAY_INTERVAL);
  };

  const stopAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const goTo = (i: number) => {
    setIndex(i % safeData.length);
  };

  if (safeData.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900">What Our Clients Say</h2>
          <p className="mt-2 text-gray-600">Trusted by entrepreneurs and startups across India.</p>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          ref={containerRef}
          aria-roledescription="carousel"
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ width: `${safeData.length * 100}%`, transform: `translateX(-${index * (100 / safeData.length)}%)` }}
          >
            {safeData.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 p-6 sm:p-10 bg-white border border-gray-100"
                style={{ width: `${100 / safeData.length}%` }}
              >
                <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={getStorageUrl(t.image) || getPlaceholderDataUri(t.author)}
                      alt={t.author}
                      className="w-16 h-16 rounded-full object-cover shadow"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (!target.dataset.fallback) {
                          target.dataset.fallback = '1';
                          target.src = getPlaceholderDataUri(t.author);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">“{t.quote}”</p>
                    <p className="font-bold text-gray-900">{t.author}</p>
                    <p className="text-sm text-gray-500">{t.role} {t.company && `, ${t.company}`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex items-center gap-2">
            {safeData.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${i === index ? 'bg-orange-600' : 'bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
