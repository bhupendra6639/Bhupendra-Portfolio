import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      company: 'Evonix',
      role: 'Full Stack Developer',
      date: 'Feb 18, 2026 — Present',
      link: 'https://www.evonix.co/',
      description: 'Spearheading the development of modern web applications with a focus on scalable cloud architectures. Architecting secure backend systems, designing high-throughput REST APIs, and integrating AI workflows to automate business processes and enhance user engagement.',
      theme: 'primary'
    },
    {
      company: 'RBrickks Technology',
      role: 'Full Stack Developer',
      date: 'June 30, 2025 — Feb 15, 2026',
      link: '#',
      description: 'Engineered robust full-stack solutions and modernized legacy codebases. Focused heavily on complex API development, third-party service integrations, and optimizing database schemas to reduce latency. Delivered seamless and highly interactive frontend UI components.',
      theme: 'secondary'
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-[8rem] px-gutter max-w-container-max mx-auto" id="experience">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="font-headline-lg text-headline-lg mb-4">Professional Journey</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-outline-variant/30"></div>
        
        {experienceData.map((exp, index) => {
          const isEven = index % 2 === 0;
          const alignRight = isEven ? 'md:flex-row' : 'md:flex-row-reverse';
          const textRight = isEven ? 'text-right pr-12' : 'text-left pl-12';
          const paddingClass = isEven ? 'md:pl-12 pl-8' : 'md:pr-12 pl-8';
          
          return (
            <div key={index} className={`relative mb-16 md:mb-24 flex flex-col ${alignRight} items-center w-full reveal-on-scroll`}>
              <div className={`hidden md:block w-1/2 ${textRight}`}>
                <span className={`font-label-mono text-label-mono text-${exp.theme}`}>{exp.date}</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-2">{exp.role}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {exp.link !== '#' ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className={`hover:text-${exp.theme} transition-colors hover:underline`}>
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>
              </div>
              <div className={`absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-${exp.theme} shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${exp.theme}`}></div>
              <div className={`w-full md:w-1/2 ${paddingClass}`}>
                <div className={`glass-panel p-6 rounded-xl gradient-border hover:border-${exp.theme}/50 transition-colors`}>
                  <div className="md:hidden mb-2">
                    <span className={`font-label-mono text-label-mono text-${exp.theme}`}>{exp.date}</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">{exp.role}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {exp.link !== '#' ? (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className={`hover:text-${exp.theme} transition-colors`}>{exp.company}</a>
                      ) : (
                        exp.company
                      )}
                    </p>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
    </section>
  );
};

export default Experience;
