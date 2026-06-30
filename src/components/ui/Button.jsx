import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'font-bold rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-on-primary-fixed px-8 py-4 neon-glow-primary',
    secondary: 'border border-secondary text-secondary px-8 py-4 hover:bg-secondary/10',
    outline: 'border border-outline-variant hover:bg-primary/10 hover:border-primary text-on-surface py-3',
    submit: 'w-full py-4 bg-gradient-to-r from-primary to-secondary text-on-primary-fixed neon-glow-primary'
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button className={`${baseClasses} ${selectedVariant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
