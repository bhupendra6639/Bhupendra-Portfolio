import React from 'react';
import Input from './ui/Input';
import TextArea from './ui/TextArea';
import Button from './ui/Button';

const Contact = () => {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 reveal-on-scroll">
          <div>
            <h2 className="font-display-mobile md:font-display md:text-display text-on-surface mb-6 leading-tight">Let's Build <br/><span className="text-secondary">Something Epic</span></h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and technical challenges.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary">mail</span>
              </div>
              <div>
                <p className="font-label-mono text-label-mono text-on-surface-variant">Email</p>
                <p className="font-body-md text-body-md font-bold">hello@evonix.co</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-secondary/20 group-hover:bg-secondary transition-all">
                <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary">location_on</span>
              </div>
              <div>
                <p className="font-label-mono text-label-mono text-on-surface-variant">Location</p>
                <p className="font-body-md text-body-md font-bold">Remote / India</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <a className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center hover:text-primary transition-all border border-outline-variant/30" href="#">
              <span className="material-symbols-outlined">link</span>
            </a>
            <a className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center hover:text-primary transition-all border border-outline-variant/30" href="https://github.com" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">terminal</span>
            </a>
            <a className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center hover:text-primary transition-all border border-outline-variant/30" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </div>
        
        <div className="reveal-on-scroll">
          <form className="glass-panel p-8 md:p-10 rounded-2xl border border-primary/10">
            <div className="space-y-6">
              <Input id="name" label="Your Name" />
              <Input id="email" label="Email Address" type="email" />
              <TextArea id="message" label="Your Message" />
              <Button type="submit" variant="submit">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
