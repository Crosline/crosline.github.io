import { Box, Chip } from '@mui/material';
export const SkillsSection = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python",
    "Docker", "AWS", "Git", "MongoDB", "PostgreSQL"
  ];

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            sx={{
              bgcolor: 'primary.dark',
              '&:hover': { bgcolor: 'primary.main' }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};