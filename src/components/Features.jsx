import React from 'react';
import { Car, Camera, Star, Shield, Calendar } from 'lucide-react';

const features = [
  {
    icon: Car,
    title: 'Off-road Ready',
    desc: 'Premium 4x4 fleets and pro desert drivers for maximum thrill and safety.'
  },
  {
    icon: Camera,
    title: 'Photo Spots',
    desc: 'Sunset dunes, canyon viewpoints, and hidden oases curated by locals.'
  },
  {
    icon: Star,
    title: 'Top-rated Guides',
    desc: 'Expert storytellers and navigators with 4.9+ average ratings.'
  },
  {
    icon: Shield,
    title: 'Peace of Mind',
    desc: 'Travel insured experiences and 24/7 assistance throughout your trip.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Why Travel With Us
            </h2>
            <p className="mt-2 text-gray-600">Thoughtfully designed adventures that balance comfort and adrenaline.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            Flexible date changes
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition bg-white">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
