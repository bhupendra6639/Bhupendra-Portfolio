import React, { useState } from 'react';
import Input from './ui/Input';
import TextArea from './ui/TextArea';
import Button from './ui/Button';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "13f133b2-6cce-41b4-b112-75f2d1b202de");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Success! Thank you for connecting. I will get back to you soon.");
        event.target.reset();
      } else {
        setResult("Error: Something went wrong.");
      }
    } catch (error) {
      setResult("Error: Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 reveal-on-scroll">
          <div>
            <h2 className="font-display-mobile md:font-display md:text-display text-on-surface mb-6 leading-tight">Let's Build <br/><span className="text-secondary">The Future</span></h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Looking to architect a scalable SaaS platform, integrate AI into your workflow, or build high-performance APIs? Let's discuss how we can turn your complex technical challenges into reality.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary">mail</span>
              </div>
              <div>
                <p className="font-label-mono text-label-mono text-on-surface-variant">Email</p>
                <p className="font-body-md text-body-md font-bold">bhupendrpatil6639@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-secondary/20 group-hover:bg-secondary transition-all">
                <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary">location_on</span>
              </div>
              <div>
                <p className="font-label-mono text-label-mono text-on-surface-variant">Location</p>
                <p className="font-body-md text-body-md font-bold">Pune, Hinjewadi</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <a className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center hover:text-primary transition-all border border-outline-variant/30" href="https://github.com/bhupendra6639" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">terminal</span>
            </a>
            <a className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center hover:text-primary transition-all border border-outline-variant/30" href="https://www.linkedin.com/in/bhupendrpatil" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </div>
        
        <div className="reveal-on-scroll">
          <form onSubmit={onSubmit} className="glass-panel p-8 md:p-10 rounded-2xl border border-primary/10">
            <div className="space-y-6">
              <Input id="name" name="name" label="Your Name" required />
              <Input id="email" name="email" label="Email Address" type="email" required />
              <TextArea id="message" name="message" label="Your Message" required />
              <Button type="submit" variant="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {result && (
                <div className={`mt-6 p-4 rounded-xl border flex items-start gap-3 ${result.includes('Success') ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'} animate-fade-in`}>
                  <span className="material-symbols-outlined shrink-0">{result.includes('Success') ? 'check_circle' : 'error'}</span>
                  <p className="font-body-md text-body-md pt-0.5">
                    {result.replace('Success! ', '')}
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
