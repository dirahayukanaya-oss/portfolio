import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { SparkleIcon } from './SparkleIcon';

export const ContactFooterSection: React.FC = () => {
  return (
    <>
      <section
        id="get-in-touch"
        className="w-full bg-[#2b4230] text-white pt-24 pb-12 px-[6vw]"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <SparkleIcon className="w-10 h-10 text-[#febf39] mb-6" />

          <h2 className="font-editorial font-black text-[#F3EFE4] leading-[0.94] tracking-[-0.01em] text-[clamp(3rem,6.5vw,6rem)] mb-6">
            Let’s work together!
          </h2>

          <p className="text-[16px] leading-[1.6] text-[#b3cdb5] max-w-2xl mb-10">
            Open for organizational collaborations, event moderation, and
            technology-driven projects. Reach out directly through any channel
            below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <a
              href={PROFILE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#febf39] text-[#141414] text-[14px] font-semibold px-7 py-3.5 shadow-md hover:bg-[#fbbc37] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              WhatsApp Me ↗
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-full bg-[#fe8751] text-[#141414] text-[14px] font-semibold px-7 py-3.5 shadow-md hover:bg-[#febf39] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              Send an Email ↗
            </a>
            <a
              href={PROFILE.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#111111] text-white text-[14px] font-semibold px-7 py-3.5 shadow-md hover:bg-[#e6e2d7] hover:text-[#141414] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#febf39] focus-visible:outline-offset-2"
            >
              LinkedIn ↗
            </a>
            <a
              href={PROFILE.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#152c1b] text-[#F3EFE4] text-[14px] font-semibold px-7 py-3.5 shadow-md hover:bg-[#febf39] hover:text-[#141414] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#febf39] focus-visible:outline-offset-2"
            >
              Instagram ({PROFILE.instagramHandle}) ↗
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#b3cdb5]">
          <span>© 2026 {PROFILE.name}. All rights reserved.</span>
          <span>✦ Informatics Engineering · Jakarta Barat</span>
        </div>
      </section>

      <footer className="w-full bg-[#f7f3e8] py-8">
        <div className="w-full px-[6vw] flex flex-col md:flex-row items-center justify-between gap-3.5 text-[#434842] text-[13px]">
          <span>© 2026 {PROFILE.name}. All rights reserved.</span>
          <span>Editorial Retro-Modern Portfolio</span>
        </div>
      </footer>
    </>
  );
};
