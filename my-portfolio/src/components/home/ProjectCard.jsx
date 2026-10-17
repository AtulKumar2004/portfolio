import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import Badge from '../ui/Badge';
import ProjectMockup from './ProjectMockup';

export default function ProjectCard({ project, onSelect, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imageSrc = project.image || `/images/projects/${project.id}.png`;

  return (
    <article className="group relative bg-white dark:bg-[#141414] border border-[#E5E7EB] dark:border-[#262626] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[#D1D5DB] dark:hover:border-[#3D3D3D] shadow-xs hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
      
      {/* Top Media / Thumbnail Area (16:10 ratio) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3F4F6] dark:bg-[#0D0D0D] border-b border-[#E5E7EB] dark:border-[#262626]">
        {/* Subtle accent corner glow on hover */}
        <div
          className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500 pointer-events-none z-10"
          style={{ backgroundColor: project.accent || '#A3E635' }}
        />

        {/* Thumbnail Image with fallback to vector Mockup */}
        <div className="relative w-full h-full overflow-hidden bg-[#EAEAEA] dark:bg-[#111111]">
          {!imageError && imageSrc ? (
            <>
              <img
                src={imageSrc}
                alt={`${project.title} Interface Preview`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 p-2.5 sm:p-3">
                  <ProjectMockup type={project.type} accent={project.accent} />
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full p-2.5 sm:p-3">
              <ProjectMockup type={project.type} accent={project.accent} />
            </div>
          )}
        </div>

        {/* Category tag overlaid */}
        <div className="absolute top-4 left-4 z-20">
          <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/95 dark:bg-[#0A0A0A]/90 backdrop-blur-md border border-[#E5E7EB] dark:border-[#262626] text-[#4B5563] dark:text-[#A3A3A3] shadow-xs">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content & Information Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Title and Action Arrow */}
          <div className="flex items-start justify-between gap-4 mb-2.5">
            <div>
              <span className="font-mono text-xs text-[#6B7280] dark:text-[#737373] block mb-1">
                // {project.year} · {project.stats}
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#111827] dark:text-[#F5F5F5] group-hover:text-black dark:group-hover:text-white transition-colors flex items-center gap-2">
                {project.title}
              </h3>
            </div>

            {/* Live project URL trigger button */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#F4F4F5] dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-[#2B2B2B] flex items-center justify-center text-[#4B5563] dark:text-[#A3A3A3] hover:text-[#4D7C0F] dark:hover:text-[#A3E635] hover:border-[#84CC16]/50 dark:hover:border-[#A3E635]/50 hover:bg-[#84CC16]/15 dark:hover:bg-[#A3E635]/15 transition-all duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84CC16] dark:focus-visible:ring-[#A3E635] cursor-pointer"
                title={`Open live site for ${project.title}`}
                aria-label={`Open live site for ${project.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => onSelect(project)}
                className="w-9 h-9 rounded-full bg-[#F4F4F5] dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-[#2B2B2B] flex items-center justify-center text-[#4B5563] dark:text-[#A3A3A3] group-hover:text-[#4D7C0F] dark:group-hover:text-[#A3E635] group-hover:border-[#84CC16]/40 dark:group-hover:border-[#A3E635]/40 group-hover:bg-[#84CC16]/10 dark:group-hover:bg-[#A3E635]/10 transition-all duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84CC16] dark:focus-visible:ring-[#A3E635] cursor-pointer"
                title={`View ${project.title} details`}
                aria-label={`View ${project.title} details`}
              >
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-[#4B5563] dark:text-[#A3A3A3] leading-relaxed mb-6 font-normal">
            {project.description}
          </p>
        </div>

        {/* Footer: Tech Stack Tags & Links */}
        <div>
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E5E7EB] dark:border-[#222222] mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="tech" size="xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs font-mono pt-1">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="text-[#4D7C0F] dark:text-[#A3E635] hover:text-[#3F6212] dark:hover:text-[#BEF264] flex items-center gap-1 font-semibold transition-colors cursor-pointer"
            >
              <span>Explore Architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] dark:text-[#737373] hover:text-[#111827] dark:hover:text-[#F5F5F5] flex items-center gap-1 transition-colors font-medium"
                title={`${project.title} GitHub Repository`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}
