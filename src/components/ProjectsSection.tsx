import React, { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { ProjectRole, SELECTED_PROJECTS } from '../data/portfolioData';
import { SparkleIcon } from './SparkleIcon';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectRole | null>(
    null
  );

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="paper-grain w-full bg-[#F3EFE4] text-[#141414] py-24 px-[6vw]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-editorial font-black text-[#141414] leading-[0.95] text-[clamp(2.625rem,5vw,4.5rem)]">
            Selected Work &amp; Roles
          </h2>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fe8751] text-[#141414] text-[14px] font-semibold px-5 py-2.5 shadow-sm self-start md:self-auto whitespace-nowrap">
            2023 — 2026 Highlights ✦
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {SELECTED_PROJECTS.map((project) => (
            <button
              key={project.index}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="card-editorial bg-[#FAF7F0] p-7 text-left flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2b4230] focus-visible:outline-offset-4 group"
            >
              <div>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C88A16] block mb-3 tabular-nums">
                  {project.kicker}
                </span>
                <h3 className="font-editorial font-black text-[26px] leading-[1.2] text-[#141414] mb-3 group-hover:text-[#2b4230] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-[#434842]">
                  {project.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#141414]/10 flex items-center justify-between text-[#2b4230] text-[13px] font-bold">
                <span className="inline-flex items-center gap-1.5">
                  {project.category}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="tabular-nums">{project.index}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Role Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-[#111111]/70 backdrop-blur-[2px] flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="w-full max-w-xl bg-[#FAF7F0] text-[#141414] border-2 border-[#141414] shadow-[8px_8px_0_#2b4230] p-7 sm:p-9 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close role details"
              className="absolute top-5 right-5 w-9 h-9 bg-[#111111] text-white flex items-center justify-center hover:bg-[#fe8751] hover:text-[#141414] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C88A16] block mb-2 tabular-nums">
              {selectedProject.kicker}
            </span>
            <h3
              id="project-modal-title"
              className="font-editorial font-black text-[32px] leading-[1.15] text-[#141414] mb-1 pr-10"
            >
              {selectedProject.title}
            </h3>
            <p className="text-[13px] font-medium text-[#434842] mb-5">
              {selectedProject.organization} · {selectedProject.period}
            </p>

            <p className="text-[15px] leading-[1.65] text-[#1c1c15] mb-6">
              {selectedProject.summary}
            </p>

            <div className="mb-6">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#2b4230] mb-3">
                Key Responsibilities
              </h4>
              <ul className="flex flex-col gap-2.5">
                {selectedProject.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-[#434842]"
                  >
                    <SparkleIcon className="w-3.5 h-3.5 text-[#fe8751] mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#2b4230] mb-2.5">
                Key Deliverables
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.deliverables.map((del) => (
                  <span
                    key={del}
                    className="rounded-full bg-[#111111] text-white text-[12px] font-semibold px-3.5 py-1.5"
                  >
                    {del}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
