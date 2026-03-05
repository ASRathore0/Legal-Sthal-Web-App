import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: 'Legal स्थल made our company registration effortless. Their team handled every detail quickly and professionally — we had everything sorted within days.',
    name: 'Rohit Sharma',
    role: 'Founder, TechBazaar',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80'
  },
  {
    quote: 'Excellent guidance and transparent pricing. The consultants were responsive and helped me choose the right structure for my business.',
    name: 'Rishu Rai',
    role: 'Founder, GenSky Tech',
    img: 'https://genskytech.com/assets/images/team/team-image1.jpg'
  },
  {
    quote: 'Fast, clear, and reliable. The process was completely online and saved us both time and money — highly recommended.',
    name: 'Amit Singh',
    role: 'Founder, BookingYard',
    img: 'https://media.licdn.com/dms/image/v2/D5603AQHJ7Cyd61k8mg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710703266461?e=1765411200&v=beta&t=bjrpaeR4DlI137zwZfBNM1sS0CMPET1OxSLunUqK1pk'
  },
  {
    quote: 'The team provided excellent post-registration support and answered all questions patiently. Great value for money.',
    name: 'Vikram Patel',
    role: 'Founder, FinEdge',
    img: 'https://images.unsplash.com/photo-1548142813-1f9bd8e3b2a6?auto=format&fit=crop&w=256&q=80'
  },
  {
    quote: 'A very smooth digital experience. Documentation and timelines were clear and the advisors were knowledgeable.',
    name: 'Shruti Rao',
    role: 'Co-founder, HomeBite',
    img: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=256&q=80'
  }
];

const AUTOPLAY_INTERVAL = 4000;

const getInitials = (name: string) => {
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

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Start autoplay once on mount and clean up on unmount
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTOPLAY_INTERVAL);
  };

  const stopAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const goTo = (i: number) => {
    setIndex(i % testimonials.length);
  };

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
            style={{ width: `${testimonials.length * 100}%`, transform: `translateX(-${index * (100 / testimonials.length)}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 p-6 sm:p-10 bg-white border border-gray-100"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover shadow"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (!target.dataset.fallback) {
                          target.dataset.fallback = '1';
                          target.src = getPlaceholderDataUri(t.name);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">“{t.quote}”</p>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex items-center gap-2">
            {testimonials.map((_, i) => (
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
