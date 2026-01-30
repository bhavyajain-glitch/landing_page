import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-brand-dark/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Shape Mockup */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-neon shape-star animate-pulse-fast"></div>
            <span className="text-2xl font-black tracking-tighter italic text-white" style={{ fontFamily: 'Impact, sans-serif' }}>
              Vyb <span className="text-brand-purple">APP</span>
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/coins" className="text-slate-300 hover:text-brand-neon transition-colors font-bold uppercase tracking-wider text-sm">
            Store
          </Link>
          <button className="btn-neon text-sm py-2 px-6">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
