import React, { useState, useEffect } from 'react';
import { ActivePage } from './types';
import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
import FeaturesPage from './components/FeaturesPage';
import ProvidersPage from './components/ProvidersPage';
import WhyPage from './components/WhyPage';
import DocsPage from './components/DocsPage';
import FAQPage from './components/FAQPage';
import CopyButton from './components/CopyButton';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');

  // Handle URL Hash deep linking for TUI / CLI integration
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#features') {
        setActivePage('features');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#providers') {
        setActivePage('providers');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#why') {
        setActivePage('why');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#faq') {
        setActivePage('faq');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#docs' || hash.startsWith('#docs-')) {
        setActivePage('docs');
        if (hash.startsWith('#docs-')) {
          setTimeout(() => {
            const id = hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 200);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (hash === '#home' || hash === '') {
        setActivePage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Run once on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync activePage state back to the URL hash (if not deep link)
  useEffect(() => {
    const currentHash = window.location.hash;
    const targetHash = activePage === 'home' ? '' : `#${activePage}`;
    if (activePage === 'docs' && currentHash.startsWith('#docs-')) {
      return; // Keep deep link hash intact
    }
    if (currentHash !== targetHash && !(activePage === 'home' && currentHash === '')) {
      window.history.pushState(null, '', targetHash || window.location.pathname);
    }
  }, [activePage]);

  const handleFooterLinkClick = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg-dark text-text-custom flex flex-col justify-between selection:bg-accent-dim selection:text-accent-2">
      
      {/* PERSISTENT HEADER */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* DYNAMIC MAIN CONTENT PAGES WITH TRANSITIONS */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {activePage === 'home' && <HeroPage setActivePage={setActivePage} />}
            {activePage === 'features' && <FeaturesPage />}
            {activePage === 'providers' && <ProvidersPage />}
            {activePage === 'why' && <WhyPage />}
            {activePage === 'docs' && <DocsPage />}
            {activePage === 'faq' && <FAQPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* PERSISTENT FOOTER SECTION */}
      <footer className="border-t border-border-custom bg-bg-dark-2/40 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Logo and brief */}
            <div className="text-left space-y-4 max-w-sm">
              <button
                onClick={() => handleFooterLinkClick('home')}
                className="flex items-center font-bold text-xl tracking-tight hover:opacity-90 cursor-pointer"
              >
                <span className="font-display">ACA</span>
              </button>
              <p className="text-text-custom-2 text-xs md:text-sm leading-relaxed">
                Agentic coding CLI — any model, any provider. Local, private, and key-agnostic. Runs securely on your hardware.
              </p>
            </div>

            {/* Sitemap Navigation */}
            <div className="flex flex-wrap gap-x-12 gap-y-6 text-left">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-custom-3 font-semibold">
                  Product Details
                </span>
                <button
                  onClick={() => handleFooterLinkClick('features')}
                  className="text-sm text-text-custom-2 hover:text-accent-2 text-left cursor-pointer transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => handleFooterLinkClick('providers')}
                  className="text-sm text-text-custom-2 hover:text-accent-2 text-left cursor-pointer transition-colors"
                >
                  Model Providers
                </button>
                <button
                  onClick={() => handleFooterLinkClick('why')}
                  className="text-sm text-text-custom-2 hover:text-accent-2 text-left cursor-pointer transition-colors"
                >
                  Why ACA
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-custom-3 font-semibold">
                  Resources
                </span>
                <button
                  onClick={() => handleFooterLinkClick('docs')}
                  className="text-sm text-text-custom-2 hover:text-accent-2 text-left cursor-pointer transition-colors"
                >
                  Quickstart Guide
                </button>
                <button
                  onClick={() => handleFooterLinkClick('docs')}
                  className="text-sm text-text-custom-2 hover:text-accent-2 text-left cursor-pointer transition-colors"
                >
                  Documentation
                </button>
                <button
                  onClick={() => handleFooterLinkClick('faq')}
                  className="text-sm text-text-custom-2 hover:text-accent-2 text-left cursor-pointer transition-colors"
                >
                  FAQ
                </button>
              </div>

              {/* Contact Information Column */}
              <div className="flex flex-col gap-3 min-w-[200px]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-custom-3 font-semibold">
                  Contact
                </span>
                <div className="text-sm text-text-custom-2 flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a href="mailto:aicraftalchemy@gmail.com" className="hover:text-accent-2 transition-colors">
                    aicraftalchemy@gmail.com
                  </a>
                </div>
                <div className="text-sm text-text-custom-2 flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a href="tel:+917661081043" className="hover:text-accent-2 transition-colors">
                    +91 7661081043
                  </a>
                </div>
                <div className="text-sm text-text-custom-2 flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom attribution and credentials notice */}
          <div className="border-t border-border-soft mt-12 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
            <div className="space-y-1.5 max-w-2xl">
              <p className="text-[10.5px] text-text-custom-3/80 leading-relaxed">
                All model providers listed are independent third parties; their names, logos, and trademarks belong to their respective owners. No endorsement is implied.
              </p>
            </div>

            {/* Quick terminal indicator */}
            <div className="flex items-center gap-2 bg-bg-dark-3/60 px-3 py-1.5 rounded-lg border border-border-custom/40 font-mono text-[11px] text-text-custom-2 shrink-0">
              <Zap className="w-3.5 h-3.5 text-accent" />
              <span>Direct API Integration</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
