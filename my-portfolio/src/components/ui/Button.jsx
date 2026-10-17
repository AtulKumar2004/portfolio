import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  as = 'button',
  href,
  onClick,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84CC16] dark:focus-visible:ring-[#A3E635] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0A0A0A] disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-base px-6 py-3 rounded-lg gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#84CC16] dark:bg-[#A3E635] text-[#0A0A0A] hover:bg-[#A3E635] dark:hover:bg-[#BEF264] shadow-sm hover:shadow-[0_0_20px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] active:translate-y-px font-semibold',
    secondary:
      'bg-[#F4F4F5] dark:bg-[#141414] text-[#111827] dark:text-[#F5F5F5] border border-[#E5E5E5] dark:border-[#262626] hover:border-[#D1D5DB] dark:hover:border-[#404040] hover:bg-[#EAEAEA] dark:hover:bg-[#1C1C1C] active:translate-y-px',
    outline:
      'bg-transparent text-[#4B5563] dark:text-[#A3A3A3] border border-[#D1D5DB] dark:border-[#262626] hover:text-[#111827] dark:hover:text-[#F5F5F5] hover:border-[#9CA3AF] dark:hover:border-[#404040] hover:bg-black/5 dark:hover:bg-[#141414]/60',
    ghost:
      'bg-transparent text-[#6B7280] dark:text-[#A3A3A3] hover:text-[#111827] dark:hover:text-[#F5F5F5] hover:bg-black/5 dark:hover:bg-[#1A1A1A]',
    accentSubtle:
      'bg-[#84CC16]/15 dark:bg-[#A3E635]/10 text-[#3F6212] dark:text-[#BEF264] border border-[#84CC16]/30 dark:border-[#A3E635]/25 hover:bg-[#84CC16]/25 dark:hover:bg-[#A3E635]/20',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (as === 'a' || href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClasses} onClick={onClick} {...props}>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </button>
  );
}
