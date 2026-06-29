import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'experience', 'stack', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in the top half of viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
            break;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', id: 'work' },
    { name: 'Experience', id: 'experience' },
    { name: 'Stack', id: 'stack' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm transition-all duration-200">
      <nav className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="BP Logo" className="w-8 h-8 rounded-md" />
          <div className="text-xl md:text-3xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Bhupendra Patil
          </div>
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveSection(link.id)}
              className={`font-body-md text-body-md transition-all pb-1 ${
                activeSection === link.id 
                  ? 'text-primary font-bold border-b-2 border-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <a href="mailto:bhupendrpatil6639@gmail.com" className="bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold px-6 py-2 rounded-full active:scale-95 transition-all duration-200 neon-glow-primary">
          Hire Me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
