import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: 'deployed_code' },
    { name: 'Next.js', icon: 'speed' },
    { name: 'PHP', icon: 'php' },
    { name: 'Laravel', icon: 'database' },
    { name: 'Node.js', icon: 'dns' },
    { name: 'Python', icon: 'terminal' },
    { name: 'React Native', icon: 'smartphone' },
    { name: 'SQL', icon: 'table' },
    { name: 'PostgreSQL', icon: 'storage' },
    { name: 'MongoDB', icon: 'dataset' },
    { name: 'Vercel', icon: 'cloud' },
    { name: 'GitHub', icon: 'integration_instructions' },
    { name: 'Express.js', icon: 'account_tree' },
    { name: 'FastAPI', icon: 'bolt' },
    { name: 'ORM', icon: 'schema' },
  ];

  return (
    <section className="py-section-gap bg-surface-container-lowest" id="stack">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="font-headline-lg text-headline-lg mb-4">Core Technology Stack</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">A curated selection of technologies I use to build robust, scalable applications from the ground up.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 justify-items-center">
          {technologies.map((tech, index) => (
            <div key={index} className="w-[120px] h-[120px] glass-panel rounded-xl flex flex-col items-center justify-center gap-3 border border-primary/20 hover:border-primary transition-all group reveal-on-scroll">
              <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">
                {tech.icon}
              </span>
              <span className="font-label-mono text-label-mono">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
