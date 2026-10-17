import React from 'react';
import { ArrowDown, ArrowUpRight, Award, Users, BookOpen, Terminal, Brain, Cloud } from 'lucide-react';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { LeetcodeIcon, GfgIcon, CodeforcesIcon } from '../ui/Icons';
import { profile } from '../../data/profile';

export default function AboutPreview() {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 border-t border-[#E5E7EB] dark:border-[#1C1C1C] relative transition-colors duration-300">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="// 02 · PHILOSOPHY & BACKGROUND"
            title="A little about how I build."
            description="Focusing on technical depth, robust system foundations, and pragmatic problem solving."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Reveal delay={0.1}>
              <div className="prose max-w-none text-base sm:text-lg text-[#4B5563] dark:text-[#A3A3A3] font-normal leading-relaxed space-y-4 transition-colors">
                <p className="text-[#111827] dark:text-[#E5E5E5] font-medium leading-relaxed">
                  "I'm interested in the intersection of thoughtful engineering and useful products. I enjoy building across the stack, learning new technologies and solving problems that require both technical depth and attention to the user experience."
                </p>
                <p>
                  As a Computer Science and Communication Engineering student at KIIT, my work centers on engineering robust backends, responsive user interfaces, and integrating modern AI capabilities into everyday digital workflows.
                </p>
                <p className="text-sm text-[#6B7280] dark:text-[#8E8E8E] leading-relaxed">
                  I complement my core academic foundations with specialized training in deep learning architectures and cloud infrastructure under Andrew Ng and AWS, translating theoretical depth into production-ready software systems.
                </p>
              </div>
            </Reveal>

            {/* Restrained Highlight: KSHITIJ */}
            <Reveal delay={0.2}>
              <div className="mt-8 bg-[#F8F9FA] dark:bg-[#141414] border border-[#E5E7EB] dark:border-[#262626] rounded-2xl p-6 relative overflow-hidden shadow-xs dark:shadow-none transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#84CC16]/10 dark:bg-[#A3E635]/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-[#2B2B2B] flex items-center justify-center text-[#4D7C0F] dark:text-[#A3E635] shrink-0 mt-0.5 shadow-xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#4D7C0F] dark:text-[#A3E635] font-semibold">
                        Leadership & Community Impact
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#84CC16]/10 dark:bg-[#A3E635]/10 text-[#4D7C0F] dark:text-[#A3E635] border border-[#84CC16]/20 dark:border-[#A3E635]/20 font-medium">
                        KIITFEST 9.0
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#111827] dark:text-[#F5F5F5] mt-1 transition-colors">
                      {profile.about.highlight.role}
                    </h3>
                    <div className="text-xs font-mono text-[#6B7280] dark:text-[#737373] mt-0.5">
                      {profile.about.highlight.organization} · Event: Transcendence
                    </div>
                    <p className="text-sm text-[#4B5563] dark:text-[#A3A3A3] mt-2.5 leading-relaxed transition-colors">
                      {profile.about.highlight.description}
                    </p>

                    {/* Certificate Link */}
                    <div className="mt-4 pt-3.5 border-t border-[#E5E7EB] dark:border-[#222222] flex items-center justify-between gap-3">
                      <a
                        href={profile.certificates.kshitijKiitfest}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-[#2A2A2A] text-xs font-mono font-medium text-[#111827] dark:text-[#E5E5E5] hover:text-[#4D7C0F] dark:hover:text-[#A3E635] hover:border-[#84CC16] dark:hover:border-[#A3E635] transition-all group shadow-xs dark:shadow-none"
                        aria-label="View KIITFEST 9.0 Certificate"
                      >
                        <span>View Certificate</span>
                        <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#737373] group-hover:text-[#4D7C0F] dark:group-hover:text-[#A3E635] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>

                      <span className="text-[11px] font-mono text-[#6B7280] dark:text-[#737373]">
                        KIITFEST 9.0 · Transcendence
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Action CTA */}
            <Reveal delay={0.3}>
              <div className="pt-4 flex items-center gap-4">
                <Button
                  as="a"
                  href="#skills"
                  variant="outline"
                  size="md"
                  icon={ArrowDown}
                >
                  Explore Technical Skills
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Metrics & Credential Cards Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Metric Card 1: DSA */}
            <Reveal delay={0.15}>
              <div className="bg-white dark:bg-[#121212] border border-[#E5E7EB] dark:border-[#222222] rounded-xl p-4 sm:p-5 hover:border-[#D1D5DB] dark:hover:border-[#333333] shadow-xs dark:shadow-none transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#6B7280] dark:text-[#737373] uppercase tracking-wider">
                    Problem Solving
                  </span>
                  <Terminal className="w-4 h-4 text-[#4D7C0F] dark:text-[#A3E635]" />
                </div>
                <div className="text-3xl font-bold font-mono text-[#111827] dark:text-[#F5F5F5] tracking-tight transition-colors">
                  350+
                </div>
                <div className="text-sm font-semibold text-[#1F2937] dark:text-[#E5E5E5] mt-1">
                  DSA Problems Solved
                </div>
                <p className="text-xs text-[#6B7280] dark:text-[#737373] mt-1.5 leading-relaxed">
                  Rigorous focus on algorithmic paradigms, time complexity optimization, and scalable data structure patterns.
                </p>

                {/* Direct Coding Profile Links */}
                <div className="mt-4 pt-3.5 border-t border-[#F3F4F6] dark:border-[#1E1E1E] flex flex-wrap items-center gap-2">
                  <a
                    href={profile.contact.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4F4F5] dark:bg-[#181818] border border-[#E5E7EB] dark:border-[#282828] text-xs font-mono font-medium text-[#374151] dark:text-[#D4D4D4] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] hover:border-[#84CC16] dark:hover:border-[#A3E635] hover:bg-white dark:hover:bg-[#202020] transition-all group shadow-xs dark:shadow-none"
                    aria-label="View LeetCode Profile"
                  >
                    <LeetcodeIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>LeetCode</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#737373] group-hover:text-[#4D7C0F] dark:group-hover:text-[#A3E635] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={profile.contact.gfg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4F4F5] dark:bg-[#181818] border border-[#E5E7EB] dark:border-[#282828] text-xs font-mono font-medium text-[#374151] dark:text-[#D4D4D4] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] hover:border-[#84CC16] dark:hover:border-[#A3E635] hover:bg-white dark:hover:bg-[#202020] transition-all group shadow-xs dark:shadow-none"
                    aria-label="View GeeksforGeeks Profile"
                  >
                    <GfgIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>GFG</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#737373] group-hover:text-[#4D7C0F] dark:group-hover:text-[#A3E635] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={profile.contact.codeforces}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4F4F5] dark:bg-[#181818] border border-[#E5E7EB] dark:border-[#282828] text-xs font-mono font-medium text-[#374151] dark:text-[#D4D4D4] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] hover:border-[#84CC16] dark:hover:border-[#A3E635] hover:bg-white dark:hover:bg-[#202020] transition-all group shadow-xs dark:shadow-none"
                    aria-label="View Codeforces Profile"
                  >
                    <CodeforcesIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>Codeforces</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#737373] group-hover:text-[#4D7C0F] dark:group-hover:text-[#A3E635] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Metric Card 2: Deep Learning Specialization by Andrew Ng */}
            <Reveal delay={0.2}>
              <div className="bg-white dark:bg-[#121212] border border-[#E5E7EB] dark:border-[#222222] rounded-xl p-4 sm:p-5 hover:border-[#D1D5DB] dark:hover:border-[#333333] shadow-xs dark:shadow-none transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#6B7280] dark:text-[#737373] uppercase tracking-wider">
                      Deep Learning & AI
                    </span>
                    <Brain className="w-4 h-4 text-[#8B5CF6] dark:text-[#A78BFA]" />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="text-lg font-bold text-[#111827] dark:text-[#F5F5F5] tracking-tight transition-colors">
                      Deep Learning Specialization
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#8B5CF6]/10 text-[#6D28D9] dark:text-[#C4B5FD] border border-[#8B5CF6]/20 font-medium">
                      Andrew Ng
                    </span>
                  </div>
                  <div className="text-xs font-medium text-[#4B5563] dark:text-[#A3A3A3] mt-1">
                    DeepLearning.AI & Coursera
                  </div>
                  <p className="text-xs text-[#6B7280] dark:text-[#737373] mt-1.5 leading-relaxed">
                    5-course sequence covering neural networks, backpropagation, hyperparameter tuning, CNNs, sequence models, and transformers.
                  </p>
                </div>

                {/* Certificate Link */}
                <div className="mt-3.5 pt-3 border-t border-[#F3F4F6] dark:border-[#1E1E1E] flex items-center justify-between">
                  <a
                    href={profile.certificates.deepLearning}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4F4F5] dark:bg-[#181818] border border-[#E5E7EB] dark:border-[#282828] text-xs font-mono font-medium text-[#374151] dark:text-[#D4D4D4] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] hover:border-[#84CC16] dark:hover:border-[#A3E635] hover:bg-white dark:hover:bg-[#202020] transition-all group shadow-xs dark:shadow-none"
                    aria-label="View Deep Learning Specialization Certificate"
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#737373] group-hover:text-[#4D7C0F] dark:group-hover:text-[#A3E635] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <span className="text-[10px] font-mono text-[#9CA3AF] dark:text-[#666666]">
                    Verified Credential
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Metric Card 3: AWS Cloud Foundations Training Badge */}
            <Reveal delay={0.25}>
              <div className="bg-white dark:bg-[#121212] border border-[#E5E7EB] dark:border-[#222222] rounded-xl p-4 sm:p-5 hover:border-[#D1D5DB] dark:hover:border-[#333333] shadow-xs dark:shadow-none transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#6B7280] dark:text-[#737373] uppercase tracking-wider">
                      Cloud Infrastructure
                    </span>
                    <Cloud className="w-4 h-4 text-[#EA580C] dark:text-[#FB923C]" />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="text-lg font-bold text-[#111827] dark:text-[#F5F5F5] tracking-tight transition-colors">
                      AWS Cloud Foundations
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#EA580C]/10 text-[#C2410C] dark:text-[#FDBA74] border border-[#EA580C]/20 font-medium">
                      Training Badge
                    </span>
                  </div>
                  <div className="text-xs font-medium text-[#4B5563] dark:text-[#A3A3A3] mt-1">
                    Amazon Web Services (AWS)
                  </div>
                  <p className="text-xs text-[#6B7280] dark:text-[#737373] mt-1.5 leading-relaxed">
                    Core cloud architecture, security & IAM governance, VPC networking, EC2 compute, S3 storage, and cloud economics.
                  </p>
                </div>

                {/* Certificate Link */}
                <div className="mt-3.5 pt-3 border-t border-[#F3F4F6] dark:border-[#1E1E1E] flex items-center justify-between">
                  <a
                    href={profile.certificates.awsCloud}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4F4F5] dark:bg-[#181818] border border-[#E5E7EB] dark:border-[#282828] text-xs font-mono font-medium text-[#374151] dark:text-[#D4D4D4] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] hover:border-[#84CC16] dark:hover:border-[#A3E635] hover:bg-white dark:hover:bg-[#202020] transition-all group shadow-xs dark:shadow-none"
                    aria-label="View AWS Cloud Foundations Certificate"
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#737373] group-hover:text-[#4D7C0F] dark:group-hover:text-[#A3E635] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <span className="text-[10px] font-mono text-[#9CA3AF] dark:text-[#666666]">
                    Verified Credential
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Metric Card 4: Stanford & DeepLearning.AI ML */}
            <Reveal delay={0.3}>
              <div className="bg-white dark:bg-[#121212] border border-[#E5E7EB] dark:border-[#222222] rounded-xl p-4 sm:p-5 hover:border-[#D1D5DB] dark:hover:border-[#333333] shadow-xs dark:shadow-none transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#6B7280] dark:text-[#737373] uppercase tracking-wider">
                      Machine Learning
                    </span>
                    <Award className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="text-lg font-bold text-[#111827] dark:text-[#F5F5F5] tracking-tight transition-colors">
                      Supervised Machine Learning
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0284C7]/10 text-[#0369A1] dark:text-[#7DD3FC] border border-[#0284C7]/20 font-medium">
                      Certified
                    </span>
                  </div>
                  <div className="text-xs font-medium text-[#4B5563] dark:text-[#A3A3A3] mt-1">
                    Stanford Online & DeepLearning.AI
                  </div>
                  <p className="text-xs text-[#6B7280] dark:text-[#737373] mt-1.5 leading-relaxed">
                    Comprehensive training in regression, classification, gradient descent, cost functions, and neural network fundamentals.
                  </p>
                </div>

                {/* Certificate Link */}
                <div className="mt-3.5 pt-3 border-t border-[#F3F4F6] dark:border-[#1E1E1E] flex items-center justify-between">
                  <a
                    href={profile.certificates.supervisedML}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4F4F5] dark:bg-[#181818] border border-[#E5E7EB] dark:border-[#282828] text-xs font-mono font-medium text-[#374151] dark:text-[#D4D4D4] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] hover:border-[#84CC16] dark:hover:border-[#A3E635] hover:bg-white dark:hover:bg-[#202020] transition-all group shadow-xs dark:shadow-none"
                    aria-label="View Supervised Machine Learning Certificate"
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#737373] group-hover:text-[#4D7C0F] dark:group-hover:text-[#A3E635] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <span className="text-[10px] font-mono text-[#9CA3AF] dark:text-[#666666]">
                    Verified Credential
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Metric Card 5: Academic Foundation */}
            <Reveal delay={0.35}>
              <div className="bg-white dark:bg-[#121212] border border-[#E5E7EB] dark:border-[#222222] rounded-xl p-4 sm:p-5 hover:border-[#D1D5DB] dark:hover:border-[#333333] shadow-xs dark:shadow-none transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#6B7280] dark:text-[#737373] uppercase tracking-wider">
                    Academic Degree
                  </span>
                  <BookOpen className="w-4 h-4 text-[#9333EA] dark:text-[#C084FC]" />
                </div>
                <div className="text-lg font-bold text-[#111827] dark:text-[#F5F5F5] tracking-tight transition-colors">
                  KIIT University
                </div>
                <div className="text-xs font-semibold text-[#1F2937] dark:text-[#E5E5E5] mt-1">
                  B.Tech in Computer Science & Communication Engineering
                </div>
                <p className="text-xs text-[#6B7280] dark:text-[#737373] mt-1.5 leading-relaxed">
                  Core curriculum covering operating systems, DBMS, computer networks, digital communication, and distributed software design.
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </Container>
    </section>
  );
}
