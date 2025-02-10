import { Box, Typography } from '@mui/material';
import { JobCard } from './JobCard';

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Panteon Games",
      role: "Mid-Core Software Engineer",
      period: "Nov 2023 - Present",
      location: "Ankara, Turkey",
      responsibilities: [
        "Created CI/CD and SCM Pipeline helper solution",
        "Developed Automated Integrations",
        "Optimized Unity Build Pipeline"
      ]
    },
    {
      company: "Panteon Games",
      role: "Mid-Core Software Engineer",
      period: "Nov 2023 - Present",
      location: "Ankara, Turkey",
      responsibilities: [
        "Created CI/CD and SCM Pipeline helper solution",
        "Developed Automated Integrations",
        "Optimized Unity Build Pipeline"
      ]
    },
    {
      company: "Panteon Games",
      role: "Mid-Core Software Engineer",
      period: "Nov 2023 - Present",
      location: "Ankara, Turkey",
      responsibilities: [
        "Created CI/CD and SCM Pipeline helper solution",
        "Developed Automated Integrations",
        "Optimized Unity Build Pipeline"
      ]
    },
    // Add more experiences
  ];

  return (
    <Box component="section" sx={{ py: 8 }}>
      {experiences.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </Box>
  );
};