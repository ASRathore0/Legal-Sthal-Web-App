import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  desc: string;
  to: string;
  icon: React.ReactNode;
  index?: number;
};

const ServiceCard: React.FC<Props> = ({ title, desc, to, icon, index = 0 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50 + (index * 80));
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className={`bg-white rounded-2xl shadow-md p-6 border border-gray-100 flex flex-col h-full transform transition-all duration-700 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } hover:shadow-2xl hover:-translate-y-2`}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 flex items-center justify-center shadow-sm">
            <div className="text-white">{icon}</div>
          </div>
        </div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      </div>

      <p className="text-gray-600 mt-4 flex-grow">{desc}</p>

      <div className="mt-6">
        <Link
          to={to}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
