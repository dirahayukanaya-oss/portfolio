import React, { useState } from 'react';
import { BarChart3, Mic, Monitor, Terminal } from 'lucide-react';
import {
  ACHIEVEMENTS,
  CHARACTER_TAGS,
  DOMAIN_SKILLS,
  EDUCATION,
  EXPERIENCES,
  LANGUAGES,
  SKILL_PILLS,
  TOOLS,
} from '../data/portfolioData';
import { SparkleIcon } from './SparkleIcon';

const INTERESTS = [
  { label: 'Software Engineering', icon: Terminal },
  { label: 'AI & Agent Automation', icon: Monitor },
  { label: 'Data Science', icon: BarChart3 },
  { label: 'Public Speaking & MC', icon: Mic },
];

export const ResumeSection: React.FC = () => {
  const [selectedToolCode, setSelectedToolCode] = useState<string | null>(null);
  const selectedTool = TOOLS.find((t) => t.code === selectedToolCode);

  return (
    <section
      id="resume"
      className="w-full grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]"
    >
      {/* Left Cream Column: Education, Experience, Achievements */}
      <div className="paper-grain bg-[#F3EFE4] text-[#141414] py-20 px-[6vw] flex flex-col gap-14">
        {/* Education */}
        <div>
          <h2 className="font-editorial font-black text-[38px] leading-[1.1] text-[#C88A16] mb-6">
            Education
          </h2>
          <div className="flex flex-col gap-6">
            {EDUCATION.map((edu) => (
              <div key={edu.institution} className="flex items-start gap-4">
                <SparkleIcon className="w-5 h-5 text-[#fe8751] mt-1" />
                <div>
                  <span className="text-[13px] font-bold text-[#141414] block tabular-nums">
                    {edu.period}
                  </span>
                  <h3 className="font-editorial font-black text-[26px] leading-[1.2] text-[#141414]">
                    {edu.institution}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#434842]">
                    {edu.degree}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Mustard Block */}
        <div className="bg-[#febf39] text-[#271900] p-8 shadow-lg">
          <h2 className="font-editorial font-black text-[38px] leading-[1.1] text-[#141414] mb-6">
            Experience
          </h2>
          <div className="flex flex-col gap-5 mb-8">
            {EXPERIENCES.map((exp) => (
              <div
                key={`${exp.period}-${exp.role}`}
                className="flex items-start gap-3"
              >
                <SparkleIcon className="w-4 h-4 text-[#141414] mt-1.5" />
                <div>
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#5e4200] tabular-nums block">
                    {exp.period}
                  </span>
                  <h3 className="text-[14px] font-bold leading-[1.3] text-[#141414]">
                    {exp.role}
                  </h3>
                  <p className="text-[13px] leading-[1.55] text-[#271900]">
                    {exp.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {CHARACTER_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#111111] text-white text-[12px] font-semibold leading-[1.2] px-3.5 py-1.5 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="font-editorial font-black text-[38px] leading-[1.1] text-[#141414] mb-6">
            Achievements
          </h2>
          <div className="flex flex-col gap-5">
            {ACHIEVEMENTS.map((ach) => (
              <div key={ach.event} className="flex items-start gap-4">
                <SparkleIcon className="w-5 h-5 text-[#fe8751] mt-1" />
                <div>
                  <span className="text-[13px] font-bold text-[#C88A16] block tabular-nums">
                    {ach.period}
                  </span>
                  <h3 className="text-[14px] font-bold leading-[1.35] text-[#141414]">
                    {ach.title}
                  </h3>
                  <p className="text-[13px] leading-[1.55] text-[#434842]">
                    {ach.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Deep Forest Green Column: RESUME Echoes, Core Skills, Languages, Interests */}
      <div className="bg-[#2b4230] text-white py-20 px-[6vw] flex flex-col gap-12 relative overflow-hidden">
        <div className="relative">
          <div
            aria-hidden="true"
            className="flex flex-col select-none pointer-events-none"
          >
            <span className="font-editorial font-black text-outline-resume tracking-[-0.01em] leading-[0.86] text-[clamp(3rem,6.5vw,6rem)]">
              RESUME
            </span>
            <span className="font-editorial font-black text-outline-resume tracking-[-0.01em] leading-[0.86] text-[clamp(3rem,6.5vw,6rem)]">
              RESUME
            </span>
            <span className="font-editorial font-black text-outline-resume tracking-[-0.01em] leading-[0.86] text-[clamp(3rem,6.5vw,6rem)]">
              RESUME
            </span>
          </div>
          <h2 className="font-editorial font-black text-[38px] leading-[1.1] text-[#febf39] -mt-8 relative z-10">
            Core Skills
          </h2>
        </div>

        {/* Tools & Software + Domain & Tech */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[14px] font-semibold text-[#F3EFE4] mb-4">
              Tools &amp; Software
            </h3>
            <div className="grid grid-cols-3 gap-3 max-w-[200px]">
              {TOOLS.map((tool) => {
                const isSelected = selectedToolCode === tool.code;
                return (
                  <button
                    key={tool.code}
                    type="button"
                    onClick={() =>
                      setSelectedToolCode((prev) =>
                        prev === tool.code ? null : tool.code
                      )
                    }
                    title={`${tool.name} (${tool.category})`}
                    aria-label={`${tool.name} — ${tool.category}`}
                    aria-pressed={isSelected}
                    className={`aspect-square rounded-[6px] flex items-center justify-center text-[14px] font-bold shadow-sm transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#febf39] ${
                      isSelected
                        ? 'bg-[#febf39] text-[#141414]'
                        : 'bg-[#F3EFE4] text-[#141414] hover:bg-[#ffdea7]'
                    }`}
                  >
                    {tool.code}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-[12px] text-[#b3cdb5] min-h-[18px]">
              {selectedTool
                ? `${selectedTool.name} · ${selectedTool.category}`
                : 'Select an icon to inspect tool'}
            </p>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold text-[#F3EFE4] mb-4">
              Domain &amp; Tech
            </h3>
            <ul className="flex flex-col gap-2 text-[13px] leading-[1.55] text-[#b3cdb5]">
              {DOMAIN_SKILLS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pitch Black Skill Pills */}
        <div className="flex flex-wrap gap-2.5">
          {SKILL_PILLS.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-[#111111] text-white text-[12px] font-semibold leading-[1.2] px-4 py-2 whitespace-nowrap"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Language */}
        <div>
          <h3 className="font-editorial font-extrabold text-[28px] leading-[1.2] text-[#F3EFE4] mb-4">
            Language
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {LANGUAGES.map((lang) => (
              <div key={lang.name}>
                <span className="text-[14px] font-semibold text-white block">
                  {lang.name}
                </span>
                <span className="text-[13px] leading-[1.45] text-[#b3cdb5] block mt-0.5">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <h3 className="font-editorial font-extrabold text-[28px] leading-[1.2] text-[#F3EFE4] mb-5">
            Interests
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INTERESTS.map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-start gap-2">
                <Icon
                  className="w-8 h-8 text-[#febf39]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="text-[13px] leading-[1.4] text-[#F3EFE4]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
