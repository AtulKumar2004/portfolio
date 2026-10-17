import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon } from 'lucide-react';
import Container from './Container';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['work', 'about', 'skills', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0A0A0A]/85 backdrop-blur-md border-b border-[#E5E5E5] dark:border-[#262626]/80 py-3.5 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84CC16] dark:focus-visible:ring-[#A3E635] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0A0A0A] rounded-sm"
            aria-label="Atul Kumar - Home"
          >
            <span className="font-mono text-xs text-[#4D7C0F] dark:text-[#A3E635] tracking-widest font-semibold transition-colors">
              ATUL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D7C0F] dark:bg-[#A3E635] group-hover:scale-125 transition-transform duration-200"></span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative py-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84CC16] dark:focus-visible:ring-[#A3E635] rounded-sm ${
                      isActive
                        ? 'text-[#111827] dark:text-[#F5F5F5] font-semibold'
                        : 'text-[#6B7280] dark:text-[#A3A3A3] hover:text-[#111827] dark:hover:text-[#F5F5F5]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#65A30D] dark:bg-[#A3E635] rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="h-4 w-px bg-[#E5E5E5] dark:bg-[#262626]" />

            {/* Light / Dark Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[#F4F4F5] dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#262626] text-[#4B5563] dark:text-[#A3A3A3] hover:text-[#111827] dark:hover:text-[#F5F5F5] hover:border-[#D1D5DB] dark:hover:border-[#383838] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84CC16] dark:focus-visible:ring-[#A3E635] cursor-pointer group"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[#F59E0B] transition-transform duration-300 group-hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-[#4F46E5] transition-transform duration-300 group-hover:-rotate-12" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-md bg-[#F4F4F5] dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#262626] text-[#111827] dark:text-[#E5E5E5] hover:border-[#65A30D] dark:hover:border-[#A3E635]/40 hover:text-[#4D7C0F] dark:hover:text-[#A3E635] hover:bg-[#EAEAEA] dark:hover:bg-[#1A1A1A] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84CC16] dark:focus-visible:ring-[#A3E635]"
              title="Download Atul Kumar's Resume (PDF)"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#737373] group-hover:text-[#4D7C0F] dark:group-hover:text-[#A3E635]" />
            </a>
          </nav>

          {/* Mobile Actions: Theme toggle, Resume, Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 rounded-md bg-[#F4F4F5] dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#262626] text-[#4B5563] dark:text-[#A3A3A3]"
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[#F59E0B]" />
              ) : (
                <Moon className="w-4 h-4 text-[#4F46E5]" />
              )}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded bg-[#F4F4F5] dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#262626] text-[#111827] dark:text-[#E5E5E5]"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#6B7280] dark:text-[#A3A3A3] hover:text-[#111827] dark:hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84CC16] dark:focus-visible:ring-[#A3E635] rounded-md border border-[#E5E5E5] dark:border-[#262626] bg-[#F4F4F5] dark:bg-[#141414]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#E5E5E5] dark:border-[#262626] bg-white/95 dark:bg-[#0E0E0E] rounded-xl px-4 shadow-xl dark:shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm text-[#4B5563] dark:text-[#A3A3A3] hover:text-[#111827] dark:hover:text-[#F5F5F5] hover:bg-[#F3F4F6] dark:hover:bg-[#161616] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-[#E5E5E5] dark:border-[#1F1F1F] flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    toggleTheme();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium bg-[#F4F4F5] dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#262626] text-[#111827] dark:text-[#E5E5E5]"
                >
                  <span className="flex items-center gap-2">
                    {isDark ? <Sun className="w-4 h-4 text-[#F59E0B]" /> : <Moon className="w-4 h-4 text-[#4F46E5]" />}
                    <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                  </span>
                  <span className="text-xs font-mono text-[#6B7280] dark:text-[#737373] uppercase">
                    {isDark ? 'Turn On' : 'Turn On'}
                  </span>
                </button>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-[#3F6212] dark:text-[#A3E635] bg-[#84CC16]/15 dark:bg-[#A3E635]/10 border border-[#84CC16]/30 dark:border-[#A3E635]/20"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Download Resume (PDF)
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
