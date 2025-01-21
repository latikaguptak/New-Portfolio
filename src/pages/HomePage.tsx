import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Experience } from '../components/sections/Experience';
import { Education } from '../components/sections/Education';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <div id="home">
        <Hero />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects showAll={false} />
      </div>
    </div>
  );
}