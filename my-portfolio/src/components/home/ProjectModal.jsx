import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, CheckCircle2, Terminal, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const projectDetails = {
    bharatdocs: [
      'Headless TipTap rich-text editor engine with custom Indian font extensions and script telemetry.',
      'Real-time multiplayer synchronization via Liveblocks and Convex reactive data layer.',
      'Contextual AI writing assistant customized for multilingual grammar, transliteration, and regional synthesis.',
    ],
    merchantlens: [
      'Automated Shopify storefront scraper analyzing JSON-LD, microdata schemas, and product variant taxonomy.',
      'AI Agent Perception benchmark simulating how autonomous LLM agents interpret product availability and attributes.',
      'Ranked remediation engine delivering prioritized action items to bridge AI perception with merchant intent.',
    ],
    srijan: [
      'Granular Role-Based Access Control (RBAC) separating administrative, coordinator, and student privileges.',
      'Interactive analytics dashboard tracking session cadences, follow-ups, and engagement for 100+ users.',
      'Automated follow-up pipeline eliminating spreadsheets with traceable audit histories.',
    ],
    chatty: [
      'Low-latency bidirectional WebSocket communication powered by Socket.IO room partitioning.',
      'Scalable MongoDB schema design for persistent message history, media links, and presence states.',
      'Reactive client state management with Zustand supporting dynamic dark/light themes and instant image previews.',
    ],
    checkuv: [
      'Real-time hyper-local solar ultraviolet radiation index integration with global geolocation queries.',
      'Burn-time estimation algorithms calculating safe sun exposure times based on UV intensity.',
      'Modular Express.js backend with RESTful API endpoints providing fast, cached weather data delivery.',
    ],
  };

  const highlights = projectDetails[project.id] || [
    'Modern React & Next.js full-stack modular component architecture.',
    'Responsive, accessible layout styled with utility-first Tailwind CSS.',
    'Optimized state handling and asynchronous client-server sync.',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 dark:bg-[#000000]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#141414] border border-[#E5E7EB] dark:border-[#2B2B2B] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E7EB] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#111111]">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: project.accent || '#A3E635' }}
            />
            <span className="font-mono text-xs uppercase tracking-wider text-[#6B7280] dark:text-[#A3A3A3]">
              Architecture Overview
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#6B7280] dark:text-[#737373] hover:text-[#111827] dark:hover:text-[#F5F5F5] hover:bg-[#F3F4F6] dark:hover:bg-[#1F1F1F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84CC16] dark:focus-visible:ring-[#A3E635] cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
          
          {/* Project Screenshot Banner if available */}
          {project.image && (
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-[#262626] bg-[#F4F4F5] dark:bg-[#0A0A0A]">
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}

          {/* Title and Tagline */}
          <div>
            <div className="font-mono text-xs text-[#6B7280] dark:text-[#737373] mb-1">
              // {project.category} · {project.year}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] dark:text-[#F5F5F5] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-[#4D7C0F] dark:text-[#A3E635] mt-1 font-mono">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <div className="text-sm text-[#4B5563] dark:text-[#A3A3A3] leading-relaxed space-y-3">
            <p>{project.longDescription || project.description}</p>
          </div>

          {/* Key Architectural Highlights */}
          <div className="bg-[#F8F9FA] dark:bg-[#0E0E0E] rounded-xl p-4 sm:p-5 border border-[#E5E7EB] dark:border-[#262626] space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#111827] dark:text-[#F5F5F5] flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#4D7C0F] dark:text-[#A3E635]" />
              Technical Implementation Details
            </h4>
            <div className="space-y-2.5 text-xs text-[#4B5563] dark:text-[#A3A3A3] font-sans">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4D7C0F] dark:text-[#A3E635] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B7280] dark:text-[#737373] mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="tech" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="px-6 py-4 border-t border-[#E5E7EB] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#0E0E0E] flex items-center justify-between">
          <div className="text-xs font-mono text-[#6B7280] dark:text-[#737373]">
            {project.stats}
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            {project.liveUrl && (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                icon={ArrowUpRight}
                iconPosition="right"
              >
                Live Preview
              </Button>
            )}

            {project.githubUrl && (
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                icon={GithubIcon}
                iconPosition="left"
              >
                GitHub Repo
              </Button>
            )}

            <Button variant="ghost" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
