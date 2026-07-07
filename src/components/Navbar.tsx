import React, { useState } from 'react';
import { ActivePage } from '../types';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActivePage; label: string }[] = [
    { id: 'features', label: 'Features' },
    { id: 'providers', label: 'Providers' },
    { id: 'why', label: 'Why ACA' },
    { id: 'docs', label: 'Docs' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-bg-dark/85 backdrop-blur-md border-b border-border-soft">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center font-bold text-xl tracking-tight hover:opacity-90 cursor-pointer text-text-custom"
        >
          <span className="font-display">ACA</span>
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm transition-colors cursor-pointer ${
                activePage === item.id
                  ? 'text-accent font-medium'
                  : 'text-text-custom-2 hover:text-text-custom'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('docs')}
            className="flex items-center gap-1.5 font-mono text-xs text-accent-2 border border-accent-border/60 px-3.5 py-1.5 rounded-lg bg-accent-dim hover:bg-accent/20 transition-all cursor-pointer"
          >
            <span>Get started</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-text-custom-2 hover:text-text-custom rounded-md hover:bg-bg-dark-3 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-soft bg-bg-dark-2 px-6 py-4 flex flex-col gap-4 animate-in fade-in duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-sm py-2 transition-colors cursor-pointer ${
                activePage === item.id
                  ? 'text-accent font-medium'
                  : 'text-text-custom-2 hover:text-text-custom'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('docs')}
            className="flex items-center justify-center gap-1.5 font-mono text-xs text-accent-2 border border-accent-border px-4 py-2.5 rounded-lg bg-accent-dim hover:bg-accent/20 transition-all cursor-pointer mt-2"
          >
            <span>Get started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
}
