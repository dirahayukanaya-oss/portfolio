import React, { useEffect, useState } from 'react';
import { Menu, User, X } from 'lucide-react';
import { SparkleIcon } from './SparkleIcon';
import { PROFILE } from '../data/portfolioData';

const NAV_ITEMS = [
  { id: 'about-me', label: 'About me' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['about-me', 'resume', 'projects', 'get-in-touch'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#2b4230]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
      <div className="h-20 w-full px-[6vw] flex items-center justify-between gap-4">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-2 text-white hover:text-[#febf39] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#febf39] focus-visible:outline-offset-4"
        >
          <SparkleIcon className="w-6 h-6 text-[#febf39]" />
          <span className="font-editorial text-[22px] sm:text-[26px] font-black tracking-tight leading-none">
            {PROFILE.name}
          </span>
        </a>

        <div className="flex items-center gap-4 md:gap-8 shrink-0">
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`text-[14px] font-semibold leading-none whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#febf39] focus-visible:outline-offset-4 ${
                    isActive
                      ? 'text-[#febf39] font-bold'
                      : 'text-[#b3cdb5] hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a
            href="#get-in-touch"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('get-in-touch');
            }}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#febf39] text-[#271900] text-[14px] font-semibold leading-none px-6 py-3 hover:bg-[#fbbc37] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => {
              if (window.innerWidth < 768) {
                setMobileMenuOpen((prev) => !prev);
              } else {
                scrollToSection('about-me');
              }
            }}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Profile & Navigation'}
            aria-expanded={mobileMenuOpen}
            className="w-9 h-9 rounded-full bg-[#152c1b] text-white flex items-center justify-center hover:bg-[#febf39] hover:text-[#141414] transition-colors duration-150 shrink-0 focus-visible:outline-2 focus-visible:outline-[#febf39] focus-visible:outline-offset-2 cursor-pointer"
          >
            <span className="hidden md:inline-flex">
              <User className="w-[18px] h-[18px]" strokeWidth={2} />
            </span>
            <span className="inline-flex md:hidden">
              {mobileMenuOpen ? (
                <X className="w-[18px] h-[18px]" strokeWidth={2} />
              ) : (
                <Menu className="w-[18px] h-[18px]" strokeWidth={2} />
              )}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#152c1b] border-t border-white/10 px-[6vw] py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`py-2 text-[15px] font-semibold transition-colors ${
                activeSection === item.id ? 'text-[#febf39]' : 'text-[#F3EFE4]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#get-in-touch"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('get-in-touch');
            }}
            className="mt-1 inline-flex items-center justify-center rounded-full bg-[#febf39] text-[#271900] text-[14px] font-semibold px-6 py-3"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
};
