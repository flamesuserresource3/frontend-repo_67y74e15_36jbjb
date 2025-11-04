import React from 'react';
import { Map, Star, Plane } from 'lucide-react';

const cards = [
  {
    name: 'Sahara Ridge',
    desc: 'Golden dunes, starry nights, and Berber hospitality.',
    price: 899,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Wadi Canyon',
    desc: 'Carved valleys, petroglyph trails, and freshwater pools.',
    price: 1049,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1526481280698-8fcc13fd24f8?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Red Dune Sea',
    desc: 'Endless scarlet sandscape with sunrise balloon rides.',
    price: 1190,
    rating: 5.0,
    image:
      'https://images.unsplash.com/photo-1528821154947-1aa3d1b7495e?q=80&w=1600&auto=format&fit=crop'
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Signature Destinations</h2>
            <p className="mt-2 text-gray-600">Handpicked routes with reliable logistics and magical scenery.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
            <Map className="w-4 h-4" />
            View all on map
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.name} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500" />
                  {c.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{c.name}</h3>
                <p className="mt-1 text-gray-600 text-sm">{c.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-900 font-bold">${c.price}
                    <span className="text-gray-500 font-normal text-sm"> / person</span>
                  </span>
                  <button className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                    <Plane className="w-4 h-4" /> Book now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
