import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  IconButton,
  Box,
  ListItemText,
  ListItem,
  List,
} from '@mui/material';
import { ReactElement } from "react";

interface ExperienceCardProps {
    title: string;
    role: string;
    period: string;
    location?: string;
    responsibilities: string[];
    tech?: string[];
    urlsAndIcons?: {url :string, muiIcon: ReactElement}[];
}

export const ExperienceCard = ({ title, role, period, location, responsibilities, tech, urlsAndIcons }: ExperienceCardProps) => (
    <Card sx={{
        background: 'background.paper',
        border: 1,
        borderColor: 'divider',
        '&:hover': { borderColor: 'primary.main' },
        transition: 'all 0.3s',
        mb: 2
    }}>
    <CardContent>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
    <Typography variant="h6" color="text.main">{title}</Typography>
{location && <Typography variant="body2" color="text.secondary">{location}</Typography>}
</Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
    <Typography variant="body1" color="text.secondary">{role}</Typography>
        
    <Typography variant="body2" color="text.secondary">{period}</Typography>
    </Box>
    <List dense>
{responsibilities.map((resp, i) => (
        <ListItem key={i}>
    <ListItemText primary={resp} />
        </ListItem>
        ))}
</List>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {tech && tech.map((t, i) => (
            <Chip key={i} label={t} size="small" sx={{ bgcolor: 'primary.dark' }} />
        ))}
    </Box>
    </CardContent>
    <CardActions>

      {urlsAndIcons && urlsAndIcons.map((urlAndIcon, i) => (
        <IconButton key={i} href={urlAndIcon.url} target="_blank" size="small" sx={{ color: 'text.secondary' }}>
          {urlAndIcon.muiIcon}
        </IconButton>
      ))}
    </CardActions>
</Card>
);
    
export default ExperienceCard;