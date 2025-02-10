import { Card, CardContent, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

interface JobCardProps {
  company: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: string[];
}

export const JobCard = ({ company, role, period, location, responsibilities }: JobCardProps) => (
  <Card sx={{
    bgcolor: 'background.paper',
    border: 1,
    borderColor: 'divider',
    mb: 2
  }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Typography variant="h6" color="text.main">{company}</Typography>
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
    </CardContent>
  </Card>
);