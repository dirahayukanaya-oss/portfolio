/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResumeSection } from './components/ResumeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactFooterSection } from './components/ContactFooterSection';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#fdf9ee] text-[#1c1c15]">
      <Navbar />
      <main className="w-full pt-20">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactFooterSection />
      </main>
    </div>
  );
}
