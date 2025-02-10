import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';
import TimelineSection from '../components/TimelineSection';
import { Hero } from '../components/Hero';
import { ExperienceSection } from '../components/ExperienceSection';
import { ProjectSection } from '../components/ProjectSection';
import { SkillsSection } from '../components/SkillsSection';

const Home = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(45deg, #1a234e 30%, #711b92 90%)',
      color: 'text.primary',
      position: 'relative'
    }}>
      <NavBar />

      <Box id="hero" sx={{ position: 'relative' }}>
        <Hero />
      </Box>

      <TimelineSection id="experience" title="Experience">
        <ExperienceSection />
      </TimelineSection>

      <TimelineSection id="projects" title="Projects">
        <ProjectSection />
      </TimelineSection>

      <TimelineSection id="skills" title="Skills">
        <SkillsSection />
      </TimelineSection>
    </Box>
  );
};

export default Home;