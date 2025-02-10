import { Card, CardContent, CardActions, Typography, Chip, IconButton, Box } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

export const ProjectCard = ({ title, description, tech, github, live }: ProjectCardProps) => (
  <Card sx={{
    bgcolor: 'background.paper',
    border: 1,
    borderColor: 'divider',
    '&:hover': { borderColor: 'primary.main' },
    transition: 'all 0.3s',
  }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {tech.map((t, i) => (
          <Chip key={i} label={t} size="small" sx={{ bgcolor: 'primary.dark' }} />
        ))}
      </Box>
    </CardContent>
    <CardActions>
      <IconButton href={github} size="small" sx={{ color: 'text.secondary' }}>
        <GitHub />
      </IconButton>
      <IconButton href={live} size="small" sx={{ color: 'text.secondary' }}>
        <OpenInNew />
      </IconButton>
    </CardActions>
  </Card>
);