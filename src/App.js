import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import LeadershipSection from './components/LeadershipSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ClicksSection from './components/ClicksSection';
import './index.css';

function App() {
  useEffect(() => {
    document.body.classList.add('fade-in');
  }, []);

  return (
    <div className="App">
      <Navigation />
      <main>
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LeadershipSection />
        <AchievementsSection />
        <ClicksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
