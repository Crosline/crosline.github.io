import { Box, Container, Typography, useTheme } from '@mui/material';
import { Hero } from '../components/Hero';
import { ProjectSection } from '../components/ProjectSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { SkillsSection } from '../components/SkillsSection';

const Home = () => {
  return (
    <Box sx={{
      background: 'linear-gradient(45deg, #1a234e 30%, #711b92 90%)', color: 'text.primary', minHeight: '100vh' }}>
      <Hero />
      <Container maxWidth="lg">
        <ExperienceSection />
        <ProjectSection />
        <SkillsSection />
      </Container>
    </Box>
  );
};

export default Home;