import React from 'react';

const TextArea = ({ id, label, rows = 4, name, ...props }) => {
  return (
    <div className="relative">
      <textarea 
        id={id}
        name={name || id}
        rows={rows}
        className="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary peer transition-all" 
        placeholder=" " 
        {...props}
      ></textarea>
      <label 
        htmlFor={id}
        className="absolute text-on-surface-variant font-label-mono duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
