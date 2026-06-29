import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm transition-all duration-200">
      <nav className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <div className="font-headline-md text-headline-md font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          DevMastery
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md transition-all" href="#work">Work</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#experience">Experience</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#stack">Stack</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#contact">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold px-6 py-2 rounded-full active:scale-95 transition-all duration-200 neon-glow-primary">
          Hire Me
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
