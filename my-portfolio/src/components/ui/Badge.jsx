import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
  dot = false,
  dotColor = 'bg-[#65A30D] dark:bg-[#A3E635]',
  icon: Icon,
}) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors';

  const sizeStyles = {
    xs: 'text-[11px] px-2 py-0.5 gap-1',
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-sm px-3 py-1.5 gap-2',
  };

  const variantStyles = {
    default:
      'bg-[#F3F4F6] dark:bg-[#141414] border border-[#E5E7EB] dark:border-[#262626] text-[#4B5563] dark:text-[#A3A3A3]',
    tech:
      'bg-[#F4F4F5] dark:bg-[#141414] border border-[#E5E7EB] dark:border-[#262626] text-[#374151] dark:text-[#CCCCCC] font-mono text-xs tracking-tight',
    accent:
      'bg-[#84CC16]/15 dark:bg-[#A3E635]/10 border border-[#84CC16]/30 dark:border-[#A3E635]/20 text-[#3F6212] dark:text-[#A3E635]',
    subtle:
      'bg-[#F3F4F6] dark:bg-[#1A1A1A] text-[#6B7280] dark:text-[#8E8E8E] border border-transparent',
    status:
      'bg-white dark:bg-[#141414] border border-[#E5E7EB] dark:border-[#262626] text-[#111827] dark:text-[#E5E5E5] text-xs py-1 px-3 shadow-xs',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
        </span>
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
