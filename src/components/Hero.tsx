import { Box, Typography, IconButton, Container } from '@mui/material';
import { Gamepad, GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';
import { motion } from 'framer-motion';
import TextTransition, { presets } from 'react-text-transition';
import React from "react";


export const Hero = () => {
  const TitleList = ['Computer Scientist', 'Software Engineer', 'Computer Enthusiast', 'Dance Instructor', 'Guitar Instructor'];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1_500, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  
  return (
    <Box
      component={motion.div}
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="md" sx={{textAlign: 'center'}}>
        <Typography variant="h1" sx={{
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #e19ee7 30%, #a4b5f6 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          İ. Çağkan Çağlayanel
        </Typography>
          <Typography variant="h5" sx={{color: 'grey.300', my: 2}}>
            <TextTransition springConfig={presets.stiff} direction={"down"} inline={true}>
              {TitleList[index % TitleList.length]}
            </TextTransition>
          </Typography>
        <Box sx={{mt: 3}}>
          {[
            {icon: <GitHub/>, href: 'https://github.com/crosline'},
            {icon: <LinkedIn/>, href: 'https://linkedin.com/in/crosline'},
            {icon: <Mail/>, href: 'mailto:cagkancaglayanel@gmail.com'},
            {icon: <Instagram/>, href: 'https://instagram.com/croslines'},
            {icon: <Gamepad/>, href: 'https://crosline.itch.io/'},
          ].map((item, index) => (
            <IconButton
              key={index}
              component="a"
              href={item.href}
              sx={{mx: 1, color: 'grey.300', '&:hover': {color: 'primary.light'}}}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
