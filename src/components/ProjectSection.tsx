import { Box, Typography, Grid } from '@mui/material';
import { ProjectCard } from './ProjectCard';

export const ProjectSection = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      tech: ["React", "TypeScript", "MUI"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com"
    },
  ];

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Typography variant="h3" sx={{ mb: 4 }}>Projects</Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};