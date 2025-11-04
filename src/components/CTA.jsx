import React from 'react';
import { Phone, Mail, ArrowRight, Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-white to-white" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl bg-black text-white p-8 md:p-12 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to plan your desert escape?
          </h2>
          <p className="mt-3 text-white/80 max-w-2xl">
            Tell us your dates and vibe. Our travel designers will craft a custom journey within 24 hours.
          </p>
          <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Get itinerary
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <div className="mt-4 flex items-center gap-6 text-sm text-white/70">
            <div className="inline-flex items-center gap-2"><Shield className="w-4 h-4" /> Secure & private</div>
            <div className="inline-flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (555) 012-3456</div>
            <div className="hidden sm:inline-flex items-center gap-2"><Mail className="w-4 h-4" /> trips@dunevoyage.com</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
