import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function HeroPortrait({
  imageSrc = '/images/profile.jpg',
  caption = 'Building with curiosity',
  altText = 'Portrait of Atul Kumar',
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { isDark } = useTheme();

  // Dark mode: soft mask blend into page
  const darkMaskStyle = isDark
    ? {
        maskImage:
          'linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 90%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 90%, transparent 100%)',
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
      }
    : {};

  if (imageError) {
    return (
      <div className="w-full max-w-sm p-8 rounded-2xl bg-[#F4F4F5] dark:bg-[#141414] border border-[#E5E7EB] dark:border-[#262626] text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white dark:bg-[#1C1C1C] border border-[#E5E7EB] dark:border-[#2B2B2B] flex items-center justify-center text-[#65A30D] dark:text-[#A3E635]">
          <Terminal className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-[#111827] dark:text-[#F5F5F5]">Atul Kumar</h3>
        <p className="text-xs font-mono text-[#6B7280] dark:text-[#A3A3A3] mt-1">
          Full-Stack Developer · AI Enthusiast
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] mx-auto lg:mx-0 lg:ml-auto">
      {/* Soft ambient backlight behind the subject */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[85%] h-[65%] bg-[#84CC16]/[0.08] dark:bg-[#A3E635]/[0.06] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Frame container: unboxed in dark mode; elegant studio card in light mode */}
      <div
        className={`relative aspect-[4/5] w-full transition-all duration-300 ${
          isDark
            ? ''
            : 'rounded-2xl overflow-hidden bg-[#111111] border border-[#E5E7EB] shadow-2xl ring-1 ring-black/5'
        }`}
        style={darkMaskStyle}
      >
        <img
          src={imageSrc}
          alt={altText}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-[85%_center] transition-all duration-700 ease-out select-none ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          draggable="false"
        />

        {/* Light mode inner subtle vignette */}
        {!isDark && (
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]" />
        )}
      </div>

      {/* Caption badge */}
      {caption && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 lg:left-[16%] lg:translate-x-0 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#121212]/90 backdrop-blur-md border border-[#E5E7EB] dark:border-[#262626] text-xs text-[#111827] dark:text-[#E5E5E5] font-mono shadow-lg whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#65A30D] dark:bg-[#A3E635] animate-pulse" />
            <span>{caption}</span>
          </div>
        </div>
      )}
    </div>
  );
}
