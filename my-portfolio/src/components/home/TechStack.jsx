import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  Terminal,
} from 'lucide-react';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { profile } from '../../data/profile';

export default function TechStack() {
  const categories = [
    {
      title: 'Languages',
      icon: Code2,
      description: 'Core programming languages for application and systems development',
      skills: profile.skills.languages,
    },
    {
      title: 'Frontend',
      icon: Layout,
      description: 'Component architecture, responsive styling, and modern UI performance',
      skills: profile.skills.frontend,
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      description: 'RESTful architecture, microservices, and real-time bidirectional streams',
      skills: profile.skills.backend,
    },
    {
      title: 'Databases',
      icon: Database,
      description: 'Relational data modeling, ACID compliance, and scalable document stores',
      skills: profile.skills.databases,
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      description: 'Version control, containerization, local pipelines, and cloud hosting',
      skills: profile.skills.tools,
    },
    {
      title: 'AI & Integrations',
      icon: Sparkles,
      description: 'Machine learning foundations, LLM integrations, and reactive data sync',
      skills: profile.skills.aiIntegrations,
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 lg:py-32 border-t border-[#E5E7EB] dark:border-[#1C1C1C] relative transition-colors duration-300">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="// 03 · TECHNICAL CAPABILITIES"
            title="Technical Expertise"
            description="The languages, frameworks, and foundational tools I use to design and engineer resilient digital systems."
          />
        </Reveal>

        {/* 6-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={0.08 * idx}>
                <div className="bg-white dark:bg-[#141414] border border-[#E5E7EB] dark:border-[#242424] rounded-2xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:border-[#D1D5DB] dark:hover:border-[#383838] hover:bg-[#FDFDFD] dark:hover:bg-[#161616] shadow-xs dark:shadow-none">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#F4F4F5] dark:bg-[#1C1C1C] border border-[#E5E7EB] dark:border-[#2B2B2B] flex items-center justify-center text-[#4D7C0F] dark:text-[#A3E635] shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-semibold text-[#111827] dark:text-[#F5F5F5] tracking-tight transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#6B7280] dark:text-[#737373] leading-relaxed mb-5 transition-colors">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Pill List */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E5E7EB] dark:border-[#222222]">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F4F4F5] dark:bg-[#181818] border border-[#E5E7EB] dark:border-[#282828] text-xs font-mono text-[#1F2937] dark:text-[#D4D4D4] hover:border-[#84CC16]/50 dark:hover:border-[#A3E635]/40 hover:text-black dark:hover:text-[#FFFFFF] transition-colors"
                      >
                        <span className="font-medium">{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] text-[#6B7280] dark:text-[#737373] font-normal">
                            · {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Footer Technical Note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-[#6B7280] dark:text-[#525252] max-w-xl mx-auto transition-colors">
            Focusing on clean architecture, type safety, modular design patterns, and continuous evaluation of emerging developer tools.
          </p>
        </div>
      </Container>
    </section>
  );
}
