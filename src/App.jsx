import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Timeout ensures elements are painted before querying
    setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
          observer.observe(el);
      });
    }, 100);
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="z-10 relative">
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
