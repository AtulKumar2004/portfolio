import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  action,
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
  };

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#4D7C0F] dark:text-[#A3E635] font-semibold transition-colors">
            {eyebrow}
          </span>
          <span className="w-8 h-px bg-[#E5E7EB] dark:bg-[#262626]" />
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111827] dark:text-[#F5F5F5] transition-colors">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base sm:text-lg text-[#4B5563] dark:text-[#A3A3A3] max-w-2xl font-normal leading-relaxed transition-colors">
              {description}
            </p>
          )}
        </div>

        {action && <div className="shrink-0 pt-2 md:pt-0">{action}</div>}
      </div>
    </div>
  );
}
