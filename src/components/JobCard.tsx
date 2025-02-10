import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

interface JobCardProps {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export const JobCard = ({ company, role, period, responsibilities }: JobCardProps) => (
  <Card sx={{
    bgcolor: 'background.paper',
    border: 1,
    borderColor: 'divider',
    mb: 2
  }}>
    <CardContent>
      <Typography variant="h6" color="primary.main">{company}</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {role} | {period}
      </Typography>
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