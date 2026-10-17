import React, { useState } from 'react';
import Container from '../layout/Container';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../../data/projects';
import Reveal from '../ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: `All (${projects.length})` },
    { id: 'ai', label: 'AI & Tools' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'realtime', label: 'Real-Time' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai')
      return project.id === 'bharatdocs' || project.id === 'merchantlens';
    if (activeFilter === 'fullstack')
      return project.id === 'srijan' || project.id === 'bharatdocs';
    if (activeFilter === 'realtime')
      return project.id === 'chatty' || project.id === 'checkuv';
    return true;
  });

  const featuredProject = filteredProjects.find((p) => p.id === 'bharatdocs') || filteredProjects[0];
  const gridProjects = activeFilter === 'all' 
    ? filteredProjects.filter((p) => p.id !== featuredProject?.id)
    : filteredProjects;

  return (
    <section id="work" className="py-20 md:py-28 lg:py-32 border-t border-[#E5E7EB] dark:border-[#1C1C1C] relative transition-colors duration-300">
      <Container>
        {/* Editorial Section Heading */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#4D7C0F] dark:text-[#A3E635] font-semibold transition-colors">
                  // 01 · FEATURED REPERTORY
                </span>
                <span className="w-8 h-px bg-[#E5E7EB] dark:bg-[#262626]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111827] dark:text-[#F5F5F5] transition-colors">
                Selected Work
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#4B5563] dark:text-[#A3A3A3] max-w-2xl font-normal leading-relaxed transition-colors">
                Featured software engineering projects spanning AI diagnostics, multilingual word processors, real-time channels, and scalable internal platforms.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
              {filterCategories.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#84CC16]/15 dark:bg-[#A3E635]/15 text-[#3F6212] dark:text-[#A3E635] border-[#84CC16]/40 dark:border-[#A3E635]/40 font-semibold shadow-xs'
                        : 'bg-[#F4F4F5] dark:bg-[#141414] text-[#6B7280] dark:text-[#8E8E8E] border-[#E5E7EB] dark:border-[#262626] hover:text-[#111827] dark:hover:text-[#E5E5E5] hover:border-[#D1D5DB] dark:hover:border-[#383838]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Editorial Grid Layout */}
        <div className="space-y-8">
          
          {/* Spotlight Featured Card (When "All" is active) */}
          {activeFilter === 'all' && featuredProject && (
            <Reveal delay={0.1}>
              <div className="w-full">
                <ProjectCard
                  project={featuredProject}
                  onSelect={setSelectedProject}
                  index={0}
                />
              </div>
            </Reveal>
          )}

          {/* Staggered Grid: MerchantLens, Srijan, Chatty, CheckUV */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridProjects.map((project, index) => (
              <Reveal key={project.id} delay={0.1 + (index % 2) * 0.08}>
                <ProjectCard
                  project={project}
                  onSelect={setSelectedProject}
                  index={index + 1}
                />
              </Reveal>
            ))}
          </div>

        </div>

        {/* Editorial Bottom Note */}
        <div className="mt-12 text-center text-xs font-mono text-[#6B7280] dark:text-[#525252] transition-colors">
          <span>Additional research experiments and open-source contributions available on </span>
          <a
            href="https://github.com/AtulKumar2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4D7C0F] dark:text-[#A3E635] hover:underline inline-flex items-center gap-0.5 font-medium"
          >
            GitHub
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </Container>

      {/* Interactive Architecture Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
