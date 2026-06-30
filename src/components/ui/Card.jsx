import React from 'react';

const Card = ({ title, description, image, tags = [], link = '#' }) => {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden flex flex-col reveal-on-scroll group">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded text-xs font-label-mono ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-headline-md text-headline-md mb-2">{title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">{description}</p>
        <div className="mt-auto">
          <a href={link} className="w-full py-3 rounded-lg border border-outline-variant hover:bg-primary/10 hover:border-primary text-on-surface transition-all active:scale-95 flex items-center justify-center gap-2">
            View Project <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
