import React from 'react';
import Card from './ui/Card';

const Projects = () => {
  const projectsData = [
    {
      title: 'Nexus AI Engine',
      description: 'An enterprise-grade platform integrating predictive AI models with scalable data pipelines for real-time business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
      tags: ['Laravel', 'React', 'AI Integration'],
      link: '#'
    },
    {
      title: 'OmniAuth API Gateway',
      description: 'A high-performance, secure RESTful API gateway featuring advanced JWT authentication, rate limiting, and microservice routing.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
      tags: ['Node.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'SyncCore Cloud Architecture',
      description: 'Scalable cloud infrastructure designed to handle millions of concurrent operations with zero downtime and automated deployments.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop',
      tags: ['Next.js', 'Vercel', 'MongoDB'],
      link: '#'
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-[8rem] px-gutter max-w-container-max mx-auto" id="work">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="font-headline-lg text-headline-lg mb-4">Featured Work</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          A showcase of recent architectural feats and creative solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <Card 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
