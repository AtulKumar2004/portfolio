import React from 'react';
import { ArrowDown, ArrowUpRight, Download, Terminal, MapPin, GraduationCap } from 'lucide-react';
import Container from '../layout/Container';
import HeroPortrait from './HeroPortrait';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { profile } from '../../data/profile';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Subtle ambient gradient overlay for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10 opacity-30">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#84CC16]/10 dark:bg-[#A3E635]/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-black/[0.02] dark:bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Typography, Eyebrow, CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Eyebrow Label with status indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <Badge variant="status" dot dotColor="bg-[#65A30D] dark:bg-[#A3E635]">
                {profile.title.toUpperCase()}
              </Badge>
              <span className="text-xs font-mono text-[#6B7280] dark:text-[#737373] hidden sm:inline-flex items-center gap-1.5 transition-colors">
                <MapPin className="w-3 h-3 text-[#4B5563] dark:text-[#A3A3A3]" />
                {profile.location}
              </span>
            </motion.div>

            {/* Deliberate Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-[#0A0A0A] dark:text-[#F5F5F5] leading-[1.08] mb-6 text-balance transition-colors"
            >
              <span>{profile.headline.part1}</span>
              <br />
              <span className="text-[#374151] dark:text-[#E5E5E5]">{profile.headline.part2}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F6212] via-[#65A30D] to-[#84CC16] dark:from-[#A3E635] dark:via-[#BEF264] dark:to-[#E2F896]">
                {profile.headline.part3}
              </span>
            </motion.h1>

            {/* Concise Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-lg md:text-xl text-[#4B5563] dark:text-[#A3A3A3] font-normal leading-relaxed max-w-2xl mb-8 transition-colors"
            >
              {profile.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button
                as="a"
                href="#work"
                variant="primary"
                size="lg"
                icon={ArrowDown}
                className="group"
              >
                Explore My Work
              </Button>

              <Button
                as="a"
                href={profile.contact.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                icon={Download}
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Understated Education & Verified Milestones Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 border-t border-[#E5E7EB] dark:border-[#262626] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#6B7280] dark:text-[#737373] font-mono transition-colors"
            >
              <div className="flex items-center gap-1.5 text-[#374151] dark:text-[#A3A3A3]">
                <GraduationCap className="w-3.5 h-3.5 text-[#4D7C0F] dark:text-[#A3E635]" />
                <span>KIIT (CS & CE)</span>
              </div>
              <span className="text-[#D1D5DB] dark:text-[#333333] hidden sm:inline">•</span>
              <div className="text-[#374151] dark:text-[#A3A3A3]">
                <span className="text-[#111827] dark:text-[#F5F5F5] font-semibold">350+</span> DSA Problems
              </div>
              <span className="text-[#D1D5DB] dark:text-[#333333] hidden sm:inline">•</span>
              <div className="text-[#374151] dark:text-[#A3A3A3]">
                <span className="text-[#111827] dark:text-[#F5F5F5] font-semibold">KSHITIJ</span> Tech Lead
              </div>
              <span className="text-[#D1D5DB] dark:text-[#333333] hidden sm:inline">•</span>
              <div className="text-[#374151] dark:text-[#A3A3A3]">
                Deep Learning & AWS Certified
              </div>
            </motion.div>
          </div>

          {/* Right Column: Portrait (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <HeroPortrait
              imageSrc="/images/profile.jpg"
              caption="Building with curiosity"
              altText="Atul Kumar — Full-Stack Developer & AI Enthusiast"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
