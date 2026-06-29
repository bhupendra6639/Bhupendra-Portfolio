import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-16 md:py-24 lg:py-[8rem] bg-surface-container-lowest border-t border-outline-variant/20 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto gap-4">
        <div className="font-headline-md text-headline-md text-on-surface font-bold">
          Bhupendra Patil
        </div>
        <p className="font-label-mono text-label-mono text-on-tertiary-fixed-variant">
          © 2026 Bhupendra Patil. Built with precision.
        </p>
        <div className="flex gap-6 items-center">
          <a className="flex items-center gap-2 font-label-mono text-label-mono text-secondary hover:text-primary transition-all duration-200" href="https://github.com/bhupendra6639" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined text-lg">terminal</span> GitHub
          </a>
          <a className="flex items-center gap-2 font-label-mono text-label-mono text-secondary hover:text-primary transition-all duration-200" href="https://www.linkedin.com/in/bhupendrpatil" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined text-lg">share</span> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
