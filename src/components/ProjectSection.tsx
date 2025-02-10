import { Box, Grid, useMediaQuery } from '@mui/material';
import ExperienceCard from "./ExperienceCard";
import { GitHub, Language, YouTube } from "@mui/icons-material";
import { theme } from "../styles/theme";

export const ProjectSection = () => {

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const projects = [
    {
      title: "AT0S",
      role: "Gameplay Developer & Team Lead",
      period: "Nov 2021",
      location: "MagaraJam#3",
      responsibilities: [
        "Created a retro-styled game in 72 hours themed 'System Error', featuring nostalgic minigames like Snake",
        "Placed 2nd among 600 games and 5000 participants"
      ],
      tech: ["Unity", "C#", "Game Design", "Retro Graphics", "Narrative Design"],
      urlsAndIcons: [
        { url: "https://crosline.itch.io/at0s", muiIcon: <Language /> },
        { url: "https://github.com/Crosline/at0s", muiIcon: <GitHub /> },
        { url: "https://www.youtube.com/watch?v=xxaNjShF12Y", muiIcon: <YouTube /> }
      ],
      image: "/images/at0s.png"
    },
    {
      title: "VAGABOND",
      role: "Gameplay Developer",
      period: "Apr 2022",
      location: "MagaraJam#4",
      responsibilities: [
        "Developed a strategic cutting game inspired by Fruit Ninja with unique gameplay twists and boss fights",
        "Ranked 4th among 500 submissions"
      ],
      tech: ["Unity", "C#", "Physics", "Game Design", "Narrative Design"],
      urlsAndIcons: [
        { url: "https://biaxthepanda.itch.io/vagabond", muiIcon: <Language /> },
        { url: "https://github.com/biaxthepanda/VAGABOND", muiIcon: <GitHub /> },
        { url: "https://www.youtube.com/watch?v=ugmenrQNpY4", muiIcon: <YouTube /> }
      ],
      image: "/images/vagabond.png"
    },
    {
      title: "The Last Session",
      role: "AI Developer",
      period: "Nov 2022",
      location: "MagaraJam#5",
      responsibilities: [
        "Developed a D&D-inspired game where players act as the Game Master against AI-controlled players",
        "Ranked 6th in the competition"
      ],
      tech: ["Unity", "C#", "AI", "Game Design", "Narrative Design"],
      urlsAndIcons: [
        { url: "https://crosline.itch.io/the-last-session", muiIcon: <Language /> },
        { url: "https://www.youtube.com/watch?v=Hro4atPtExo", muiIcon: <YouTube /> }
      ],
      image: "/images/the-last-session.png"
    },
    {
      title: "Beat Menace",
      role: "AI & VFX Developer",
      period: "Dec 2023",
      location: "Gamejam",
      responsibilities: [
        "Created a rhythm-based Hack & Slash game with synchronized combat mechanics"
      ],
      tech: ["Unity", "C#", "VFX", "Audio Programming", "AI", "Rythm"],
      urlsAndIcons: [
        { url: "https://github.com/username/VAGABOND", muiIcon: <GitHub /> },
        { url: "https://www.youtube.com/watch?v=0PnuUpA74LY", muiIcon: <YouTube /> }
      ],
      image: "https://cdn.magarajam.com/content/1700408934197280829877958.png"
    },
    {
      title: "The Wholesome Story of a Thief and a Cop",
      role: "Developer",
      period: "Feb 2021",
      location: "itch.io",
      responsibilities: [
        "Our cute thief founds himself in the middle of a huge museum, and apparently...",
        "He stole a precious diamond. So he tries to escape the place."
      ],
      tech: ["Unity", "C#"],
      urlsAndIcons: [
        { url: "https://crosline.itch.io/the-wholesome-story-of-a-thief-and-a-cop", muiIcon: <Language /> }
      ],
      image: "/images/the-wholesome-story-of-a-thief-and-a-cop.png"
    },
    {
      title: "Tell Tale Heart",
      role: "Developer",
      period: "Mar 2021",
      location: "itch.io",
      responsibilities: [
        "Dante loves Beatrice, but there are things that prevent him from reaching her.",
        "His colorless world and lack of love due to this world prevents him from reaching the woman he loves."
      ],
      tech: ["Unity", "C#"],
      urlsAndIcons: [
        { url: "https://crosline.itch.io/tell-tale-heart", muiIcon: <Language /> }
      ],
      image: "/images/tell-tale-heart.png"
    },
    {
      title: "Trapped in a Whole",
      role: "Developer",
      period: "Dec 2020",
      location: "itch.io",
      responsibilities: [
        "Developed a puzzle platformer game"
      ],
      tech: ["Unity", "C#"],
      urlsAndIcons: [
        { url: "https://crosline.itch.io/trapped-in-a-whole", muiIcon: <Language /> }
      ],
      image: "/images/trapped-in-a-whole.gif"
    },
    {
      title: "Kuruvasan",
      role: "Developer",
      period: "Jun 2021",
      location: "Project",
      responsibilities: [
        "Social club app where you can meet like-minded people."
      ],
      tech: ["Flutter", "Spring", "Java"],
      urlsAndIcons: [
        { url: "https://drive.google.com/file/d/1RimotPKAuaECLqiSozU6iUlHj1ZJJLa2/view", muiIcon: <Language /> }
      ],
      image: "/images/kuruvasan.jpg"
    },
    {
      title: "UniLibrary",
      role: "",
      period: "Apr 2022 - Present",
      location: "Github",
      responsibilities: [
        "Creating a comprehensive Unity Library to handle Unity complexities and wrap up common tasks",
      ],
      tech: ["Unity", "C#", "Physics", "Game Design"],
      urlsAndIcons: [
        { url: "https://github.com/Crosline/Library", muiIcon: <GitHub /> },
      ]
    },
  ];

  return (
    <Box component="section" alignItems={"center"}>
        {projects.map((project, index) => (
          <Grid container key={index} spacing={2} alignItems="center" direction={isMobile ? "column" : "row"} mb={2}>
            {project.image &&
                <Box
                    component="img"
                    src={project.image}
                    sx={{
                      maxHeight: 250,
                      maxWidth: 315,
                      aspectRatio: '4/3',
                      borderRadius: 2,
                      objectFit: "cover",
                      m: 2
                    }}
                />
            }
            <Box sx={{
              flexGrow: 1,
              width: { xs: '100%', md: 'auto' }
            }}>
              <ExperienceCard {...project} />
            </Box>
          </Grid>
        ))}
    </Box>
  );
};