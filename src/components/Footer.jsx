import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-section-gap bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto gap-4">
        <div className="font-headline-md text-headline-md text-on-surface font-bold">
          Bhupendra Patil
        </div>
        <p className="font-label-mono text-label-mono text-on-tertiary-fixed-variant">
          © 2026 Bhupendra Patil. Built with precision.
        </p>
        <div className="flex gap-8">
          <a className="font-label-mono text-label-mono text-on-tertiary-fixed-variant hover:text-secondary transition-opacity duration-200" href="https://github.com/bhupendra6639" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="font-label-mono text-label-mono text-on-tertiary-fixed-variant hover:text-secondary transition-opacity duration-200" href="https://www.linkedin.com/in/bhupendrpatil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
