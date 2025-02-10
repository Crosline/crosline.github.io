import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';

interface TimelineSectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const TimelineSection = ({ title, children, id } : TimelineSectionProps) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: 8,
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #e19ee7 30%, #a4b5f6 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </Typography>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '2px',
              bgcolor: 'grey.800'
            }} />

            {/* Content */}
            <Box sx={{ ml: 4, '& > *': {  } }}>
              {React.Children.map(children, (child, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ position: 'relative' }}
                >
                  {child}
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TimelineSection;