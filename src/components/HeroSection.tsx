import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { SparkleIcon } from './SparkleIcon';
import { EditorialImage } from './EditorialImage';

export const HeroSection: React.FC = () => {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('about-me');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-[#2b4230] text-white pt-10 md:pt-12 pb-24 px-[6vw] overflow-visible"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Stacked Display Headline + 3x Outline Echoes */}
        <div className="relative z-10 select-none">
          <h1 className="font-editorial font-black text-[#F3EFE4] tracking-[-0.02em] leading-[0.9] text-[clamp(3.35rem,11vw,9.75rem)]">
            PORTFOLIO
          </h1>
          <div
            aria-hidden="true"
            className="hidden md:flex flex-col -mt-3 pointer-events-none select-none"
          >
            <span className="font-editorial font-black text-outline-hero tracking-[-0.02em] leading-[0.88] text-[clamp(3.35rem,11vw,9.75rem)]">
              PORTFOLIO
            </span>
            <span className="font-editorial font-black text-outline-hero tracking-[-0.02em] leading-[0.88] text-[clamp(3.35rem,11vw,9.75rem)]">
              PORTFOLIO
            </span>
            <span className="font-editorial font-black text-outline-hero tracking-[-0.02em] leading-[0.88] text-[clamp(3.35rem,11vw,9.75rem)]">
              PORTFOLIO
            </span>
          </div>
        </div>

        {/* Social & Email Quick Links */}
        <div className="md:absolute md:top-44 md:right-4 z-20 mt-6 md:mt-0 flex flex-col gap-2 text-[14px] font-semibold text-[#F3EFE4]/90">
          <a
            href={PROFILE.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#febf39] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#febf39]"
          >
            LI: {PROFILE.linkedinShort}
          </a>
          <a
            href={PROFILE.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#febf39] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#febf39]"
          >
            IG: {PROFILE.instagramHandle}
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hover:text-[#febf39] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#febf39]"
          >
            EM: {PROFILE.email}
          </a>
        </div>

        {/* Overlapping Portrait + Terracotta Bio Block */}
        <div className="relative z-20 mt-8 md:-mt-56 md:ml-12 max-w-md">
          <SparkleIcon className="w-10 h-10 text-[#febf39] absolute -top-5 -left-5 z-30 drop-shadow-md" />

          <div className="aspect-[3/4] w-full bg-[#E6DFD1] overflow-hidden shadow-xl relative">
            <EditorialImage
              src={PROFILE.heroPortraitUrl}
              alt={PROFILE.heroPortraitAlt}
              caption={PROFILE.name}
            />
          </div>

          <SparkleIcon className="w-8 h-8 text-[#fe8751] absolute -bottom-4 -right-4 z-30 drop-shadow-md" />

          <div className="relative md:absolute md:-bottom-10 md:-left-10 z-30 mt-4 md:mt-0 bg-[#fe8751] text-[#141414] p-6 md:max-w-sm shadow-[0_14px_30px_rgba(0,0,0,0.22)]">
            <p className="text-[13px] font-medium leading-[1.55]">
              {PROFILE.heroBio}
            </p>
          </div>
        </div>
      </div>

      {/* Circular Scroll Down Badge Straddling Hero Bottom Edge */}
      <a
        id="scroll-down-btn"
        href="#about-me"
        onClick={handleScrollDown}
        className="scroll-badge-bob absolute left-1/2 -translate-x-1/2 -bottom-[42px] z-30 w-[84px] h-[84px] rounded-full bg-[#febf39] text-[#141414] flex items-center justify-center text-center text-[13px] font-bold leading-tight shadow-[0_8px_20px_rgba(0,0,0,0.16)] hover:bg-[#fbbc37] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#141414] focus-visible:outline-offset-2"
      >
        Scroll
        <br />
        down
      </a>
    </section>
  );
};
