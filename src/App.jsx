import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Destinations from './components/Destinations.jsx';
import CTA from './components/CTA.jsx';
import { Globe, Menu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Simple top bar */}
      <header className="fixed top-0 inset-x-0 z-30">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 backdrop-blur text-white px-4 py-3">
            <div className="flex items-center gap-2 font-semibold">
              <Globe className="w-5 h-5" />
              DuneVoyage
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#destinations" className="hover:text-white">Destinations</a>
              <a href="#why-us" className="hover:text-white">Why us</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <button className="md:hidden" aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <div id="why-us">
          <Features />
        </div>
        <Destinations />
        <div id="contact">
          <CTA />
        </div>
      </main>

      <footer className="py-10 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} DuneVoyage. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
