import React, { useState } from 'react';
import { Check, Copy, Link2, Mail, MapPin, Phone } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

export const AboutSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1800);
    } catch {
      // Clipboard API unavailable; direct link still works
    }
  };

  return (
    <section
      id="about-me"
      className="paper-grain w-full bg-[#F3EFE4] text-[#141414] pt-28 pb-20 px-[6vw]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-[60px] items-start">
        {/* Left Bio Column */}
        <div className="flex flex-col items-start">
          <h2 className="font-editorial font-black text-[#141414] leading-[0.94] tracking-[-0.01em] text-[clamp(3rem,6.5vw,6rem)] mb-8 whitespace-pre-line">
            {PROFILE.aboutHeading}
          </h2>

          <div className="flex flex-col gap-5 text-[16px] leading-[1.65] text-[#434842] max-w-[52ch] mb-8">
            {PROFILE.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <a
            href={PROFILE.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#fe8751] text-[#141414] text-[14px] font-semibold px-7 py-3.5 shadow-md hover:bg-[#febf39] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#141414] focus-visible:outline-offset-2"
          >
            <Link2 className="w-[18px] h-[18px] shrink-0" strokeWidth={2} />
            <span>{PROFILE.linkedinLabel}</span>
          </a>
        </div>

        {/* Right Portrait + Floating Stickers + Pitch Black Contact Card */}
        <div className="relative flex flex-col items-center lg:items-end">
          <div className="relative w-full max-w-sm">
            <div className="aspect-[4/5] w-full bg-[#2b4230] overflow-hidden shadow-lg relative">
              <EditorialImage
                src={PROFILE.aboutPortraitUrl}
                alt={PROFILE.aboutPortraitAlt}
                caption={PROFILE.shortName}
                fallbackBgClass="bg-[#2b4230]"
              />
            </div>

            {/* Floating Pill Stickers */}
            <div className="absolute top-12 -left-3 md:-left-8 z-20 rounded-full bg-[#febf39] text-[#141414] text-[13px] font-bold px-5 py-2 shadow-[0_6px_16px_rgba(0,0,0,0.12)] whitespace-nowrap">
              Informatics • ITPLN
            </div>

            <div className="absolute bottom-48 -right-3 md:-right-6 z-20 rounded-full bg-[#fe8751] text-[#141414] text-[13px] font-bold px-5 py-2 shadow-[0_6px_16px_rgba(0,0,0,0.12)] whitespace-nowrap">
              Indonesian
            </div>

            {/* Pitch Black Sharp-Corner Contact Card */}
            <div className="w-full bg-[#111111] text-white p-7 shadow-xl">
              <h3 className="font-editorial font-extrabold text-[28px] leading-[1.2] text-white mb-4">
                Contact
              </h3>
              <ul className="flex flex-col gap-3 text-[13px] leading-[1.55] text-[#F3EFE4]/90">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="w-[18px] h-[18px] text-[#febf39] shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span>{PROFILE.location}</span>
                </li>
                <li className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail
                      className="w-[18px] h-[18px] text-[#febf39] shrink-0"
                      strokeWidth={2}
                    />
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="hover:text-[#febf39] transition-colors truncate"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PROFILE.email, 'email')}
                    aria-label="Copy email address"
                    title="Copy email"
                    className="p-1.5 text-[#F3EFE4]/60 hover:text-[#febf39] transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-[#febf39]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </li>
                <li className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <Phone
                      className="w-[18px] h-[18px] text-[#febf39] shrink-0"
                      strokeWidth={2}
                    />
                    <a
                      href={PROFILE.phoneHref}
                      className="hover:text-[#febf39] transition-colors tabular-nums"
                    >
                      {PROFILE.phoneDisplay}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PROFILE.phoneDisplay, 'phone')}
                    aria-label="Copy phone number"
                    title="Copy phone number"
                    className="p-1.5 text-[#F3EFE4]/60 hover:text-[#febf39] transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-[#febf39]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
