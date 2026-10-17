import React from 'react';
import Container from './Container';
import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E7EB] dark:border-[#1C1C1C] bg-white dark:bg-[#0A0A0A] py-12 text-xs font-mono text-[#6B7280] dark:text-[#737373] transition-colors duration-300">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Identity & Copyright */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#111827] dark:text-[#F5F5F5] transition-colors">
              {profile.name}
            </span>
            <span className="text-[#D1D5DB] dark:text-[#333333]">•</span>
            <span>© {currentYear} · Crafted with care</span>
          </div>

          {/* Understated tech info */}
          <div className="text-[#9CA3AF] dark:text-[#525252] text-center hidden md:block">
            React · Tailwind CSS · Motion
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F4F4F5] dark:bg-[#141414] border border-[#E5E7EB] dark:border-[#222222] text-[#4B5563] dark:text-[#A3A3A3] hover:text-[#111827] dark:hover:text-[#F5F5F5] hover:border-[#D1D5DB] dark:hover:border-[#383838] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84CC16] dark:focus-visible:ring-[#A3E635] cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
