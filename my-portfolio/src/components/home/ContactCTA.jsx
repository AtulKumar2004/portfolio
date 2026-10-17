import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, GfgIcon, CodeforcesIcon } from '../ui/Icons';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { profile } from '../../data/profile';

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 border-t border-[#E5E7EB] dark:border-[#1C1C1C] relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#84CC16]/10 dark:bg-[#A3E635]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#141414] border border-[#E5E7EB] dark:border-[#262626] text-xs font-mono text-[#4D7C0F] dark:text-[#A3E635] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#65A30D] dark:bg-[#A3E635] animate-pulse" />
              <span>// 04 · LET'S COLLABORATE</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A] dark:text-[#F5F5F5] mb-6 text-balance transition-colors">
              Have an idea worth building?
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-[#4B5563] dark:text-[#A3A3A3] max-w-xl mx-auto leading-relaxed mb-10 transition-colors">
              I'm always interested in meaningful engineering challenges, interesting collaborations and opportunities to build useful products.
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              {/* Mailto Direct Link */}
              <Button
                as="a"
                href={`mailto:${profile.contact.email}`}
                variant="primary"
                size="lg"
                icon={Mail}
              >
                Send an Email
              </Button>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#F4F4F5] dark:bg-[#141414] border border-[#E5E7EB] dark:border-[#282828] text-sm font-medium text-[#111827] dark:text-[#E5E5E5] hover:border-[#D1D5DB] dark:hover:border-[#404040] hover:bg-[#EAEAEA] dark:hover:bg-[#1A1A1A] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84CC16] dark:focus-visible:ring-[#A3E635] cursor-pointer shadow-xs"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#65A30D] dark:text-[#A3E635]" />
                    <span className="text-[#3F6212] dark:text-[#A3E635] font-medium">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#6B7280] dark:text-[#A3A3A3]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </Reveal>

          {/* Social Profiles & Direct Coordinates */}
          <Reveal delay={0.4}>
            <div className="pt-8 border-t border-[#E5E7EB] dark:border-[#222222] w-full flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#4B5563] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#525252]" />
              </a>

              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#4B5563] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#525252]" />
              </a>

              <a
                href={profile.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#4B5563] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] transition-colors"
              >
                <LeetcodeIcon className="w-3.5 h-3.5" />
                <span>LeetCode</span>
                <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#525252]" />
              </a>

              <a
                href={profile.contact.gfg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#4B5563] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] transition-colors"
              >
                <GfgIcon className="w-3.5 h-3.5" />
                <span>GFG</span>
                <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#525252]" />
              </a>

              <a
                href={profile.contact.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#4B5563] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] transition-colors"
              >
                <CodeforcesIcon className="w-3.5 h-3.5" />
                <span>Codeforces</span>
                <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#525252]" />
              </a>

              <span className="text-[#D1D5DB] dark:text-[#333333] hidden md:inline">•</span>

              <div className="text-[#6B7280] dark:text-[#737373]">
                {profile.contact.email}
              </div>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
