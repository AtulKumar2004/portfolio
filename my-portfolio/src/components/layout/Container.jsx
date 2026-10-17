import React from 'react';

export default function Container({ children, className = '', id, ...props }) {
  return (
    <div
      id={id}
      className={`max-w-6xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
