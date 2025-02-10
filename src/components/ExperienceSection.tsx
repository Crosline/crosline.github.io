import { Box } from '@mui/material';
import ExperienceCard from "./ExperienceCard";
import { Language, LinkedIn } from "@mui/icons-material";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Panteon Games",
      role: "Mid-Core Software Engineer",
      period: "Nov 2023 - Present",
      location: "Ankara, Turkey",
      responsibilities: [
        "- Created a CI/CD and SCM Pipeline helper solution to coordinate multi-repository testing and automated merge processes from a ReactJS web interface.",
        "- Set up automated integrations between Project Management Software, Communication and SCM systems (GitLab, Linear, Jira, Jenkins, Discord) to increase productivity between teams.",
        "- Helped develop a comprehensive log tracking, debugging and crashlytics service with real-time capabilities.",
        "- Containerized the backend ecosystem to improve development workflow.",
        "- Optimized Unity Build Pipeline with developer-friendly approach, achieving 80% decreased build times.",
        "- Implemented and optimized game systems with data-oriented design patterns in Unity and C#."
      ],
      tech: ["React", "TypeScript", "Unity", "C#", "Docker", "Jenkins", "GitLab CI", "Python"],
      urlsAndIcons: [
        { url: "https://panteon.games", muiIcon: <Language /> },
        { url: "https://linkedin.com/company/panteon", muiIcon: <LinkedIn /> }
      ]
    },
    {
      title: "Panteon Games",
      role: "Software Engineer",
      period: "Feb 2022 - Nov 2023",
      location: "Ankara, Turkey",
      responsibilities: [
        "- Engineered in-house runtime analytics, ad tracking, and monetization solutions, increasing revenue by 30%.",
        "- Designed Unity tools and Package Manager for improved workflow efficiency.",
        "- Led maintenance of 8-10 HyperCasual/Casual games, optimizing performance and user retention."
      ],
      tech: ["Unity", "C#", "Git", "Jenkins", "REST APIs"],
      urlsAndIcons: [
        { url: "https://panteon.games", muiIcon: <Language /> },
        { url: "https://linkedin.com/company/panteon", muiIcon: <LinkedIn /> }
      ]
    },
    {
      title: "Epic Frame Animation and Production",
      role: "Animation Engineering Intern",
      period: "Nov 2021 - Dec 2021",
      location: "Istanbul, Turkey",
      responsibilities: [
        "- Developed procedural animations using MoCap data and implemented sprite animations in Unity.",
        "- Created VFX and physics-based shaders for visual effects.",
        "- Developed Python scripts for Blender-Unity integration pipeline."
      ],
      tech: ["Unity", "Python", "Blender", "HLSL", "Animation"]
    },
    {
      title: "DefTR Technology",
      role: "Software & Test Engineering Intern",
      period: "Jun 2021 - Nov 2021",
      location: "Ankara, Turkey",
      responsibilities: [
        "- Prototyped drone control systems and implemented pathfinding algorithms.",
        "- Worked on hardware integration, sensor installation, and component assembly.",
        "- Conducted thorough testing and documentation of sensor reliability and software functionality."
      ],
      tech: ["Python", "C++", "Embedded Systems", "Networking"],
      urlsAndIcons: [
        { url: "https://deftr.com/", muiIcon: <Language /> },
        { url: "https://linkedin.com/company/def-tr", muiIcon: <LinkedIn /> }
      ]
    }
  ];

  return (
    <Box component="section">
      {experiences.map((job, index) => (
        <ExperienceCard key={index} {...job} />
      ))}
    </Box>
  );
};