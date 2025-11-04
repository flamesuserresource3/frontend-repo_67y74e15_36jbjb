import React from 'react';
import Spline from '@splinetool/react-spline';
import { Plane, Compass, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that won't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 text-sm mb-6 border border-white/10">
          <Compass className="w-4 h-4" />
          <span>Adventure • Desert • Exploration</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Discover Epic Journeys Across Desert Horizons
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Curated tours, off‑road experiences, and immersive stays. Plan it in minutes, remember it forever.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#destinations"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
          >
            <Plane className="w-4 h-4" />
            Explore Destinations
          </a>
          <button
            className="inline-flex items-center gap-2 bg-transparent border border-white/30 hover:border-white px-6 py-3 rounded-full font-semibold transition"
          >
            Plan My Trip
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
