import React from 'react';
import Hero from './components/organisms/Hero';
import ResumeSection from './components/organisms/ResumeSection';
import ExperienceSection from './components/organisms/ExperienceSection';
import SkillsSection from './components/organisms/SkillsSection';
import EducationSection from './components/organisms/EducationSection';
import ProjectsSection from './components/organisms/ProjectsSection';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <ResumeSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default App;