import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' }
  ];
  const urlSections = [
    { url: 'https://github.com/crosline/', label: 'GitHub' },
    { url: 'https://crosline.itch.io/', label: 'Games' },
    { url: '/documents/i_cagkan_caglayanel-resume.pdf', label: 'Resume' },
  ];

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-100, 0]);

  return (
    <motion.div
      style={{
        opacity: isScrolled ? opacity : 1,
        y: isScrolled ? y : 0,
        position: 'fixed',
        width: '100%',
        zIndex: 1100
      }}
    >
      <AppBar
        position="static"
        sx={{
          bgcolor: isScrolled ? 'rgba(18, 18, 18, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(8px)' : 'none',
          boxShadow: isScrolled ? 1 : 'none',
          transition: 'all 0.3s'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {sections.map((section) => (
                <Button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(255, 255, 255, 0.08)'
                    }
                  }}
                >
                  {section.label}
                </Button>
              ))}

              {urlSections.map((section) => (
                <Button
                  key={section.url}
                  onClick={() => window.open(section.url, '_blank')}
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(255, 255, 255, 0.08)'
                    }
                  }}
                >
                  {section.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};

export default NavBar;