import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCode, FaHtml5, FaCss3, FaNpm, FaGithub, FaGitAlt, FaFigma, FaReact, FaNodeJs, FaVideo } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss, SiVite, SiFirebase} from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { TbBrandFramerMotion, TbApi } from "react-icons/tb";
import style from './Projects.module.css';
import Hungry from '../../assets/Hero/HungryBaaz.png';
import IronX from '../../assets/Hero/Gym.png';
import Binge from '../../assets/Hero/Binge.png';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      subtitle: 'HungryBaaz',
      description: `HungryBaaz is a modern web application designed to offer a seamless and engaging dining experience. With advanced features ranging from recipe generation to real-time data fetching and user-friendly design elements, HungryBaaz is tailored for desktop and tablet users seeking a dynamic restaurant menu experience.`,
      date: 'Sep 2024 - Oct 2024',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'JavaScript', icon: <RiJavascriptFill /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'npm', icon: <FaNpm /> },
        { name: 'Swiggy API', icon: <TbApi /> },
        { name: 'Gemini API', icon: <TbApi /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Netlify', icon: <BiLogoNetlify /> }
      ],
      image: Hungry,
      icon: <FaCode />,
      videoLink: 'https://youtu.be/GMTusnmyrWc?si=mPVljbRklu3vNHBU',
      githubLink: 'https://github.com/souvik-coder24/HungryBaaz',
      websiteLink: 'https://hungrybaaz.netlify.app'
    },
    {
      title: 'Project Two',
      subtitle: 'IronX',
      description: 'IronX is a modern web application designed for fitness enthusiasts seeking a personalized experience. This platform leverages advanced features such as AI diet and exercise generation, coupled with a sleek design, to create an engaging environment for users. Tailored for desktop and large tablet users, IronX offers beautiful animations and seamless navigation.',
      date: 'Sep 2024 - Sep 2024',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'JavaScript', icon: <RiJavascriptFill /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'Module CSS', icon: <FaCss3 /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'npm', icon: <FaNpm /> },
        { name: 'Gemini API', icon: <TbApi /> },
        { name: 'ExerciseDB API', icon: <TbApi /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
        { name: 'Netlify', icon: <BiLogoNetlify /> }
      ],
      image: IronX,
      icon: <FaCode />,
      videoLink: 'https://youtu.be/g6-rlLQx6Ck',
      githubLink: 'https://github.com/souvik-coder24/IronX',
      websiteLink: 'https://ironx.netlify.app'
    },
    {
      title: 'Project Three',
      subtitle: 'BingeBox',
      description: 'BingeBox is an immersive and user-friendly streaming application designed to provide a seamless interface for browsing and watching movies and TV shows, built with modern web technologies.',
      date: 'Aug 2024 - Sep 2024',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'JavaScript', icon: <RiJavascriptFill /> },
        { name: 'Module CSS', icon: <FaCss3 /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'npm', icon: <FaNpm /> },
        { name: 'TMDB API', icon: <TbApi /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Netlify', icon: <BiLogoNetlify /> }
      ],
      image: Binge,
      icon: <FaCode />,
      videoLink: 'https://youtu.be/mYe3ALAnS5k',
      githubLink: 'https://github.com/souvik-coder24/Bingebox--a-movie-streaming-web',
      websiteLink: 'https://boxbinge.netlify.app'
    }
  ];

  const handleVideoClick = (videoLink) => {
    window.open(videoLink, '_blank');
  };

  const handleGithubClick = (githubLink) => {
    window.open(githubLink, '_blank');
  };

  const handleWebsiteClick = (websiteLink) => {
    window.open(websiteLink, '_blank');
  };

  return (
    <div className={style.project}>
      <h3>Projects</h3>
      <h6>Each Project is a Unique piece of Development</h6>
      <div className={style.prdetails}>
        <VerticalTimeline lineColor='rgb(33, 150, 243)'>
          {projects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={project.icon}
              iconClassName={style.customIcon}
              date={project.date}
              dateClassName={style.customDate}>
              <div className={style.details}>
                <div className={style.indetails}>
                  <div className={style.display}>
                    <img 
                      src={project.image} 
                      alt="Project" 
                      className={style.projectImage} 
                      onClick={() => handleWebsiteClick(project.websiteLink)} 
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <div className={style.info}>
                    <h4>{project.subtitle}</h4>
                    <div className={style.links}>
                      <FaGithub 
                        onClick={() => handleGithubClick(project.githubLink)} 
                        style={{ cursor: 'pointer' }} 
                      />
                      <FaVideo 
                        onClick={() => handleVideoClick(project.videoLink)} 
                        style={{ cursor: 'pointer' }} 
                      />
                    </div>
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className={style.techstack}>
                  <ul className={style.tech}>
                    {project.tech.map((techItem, techIndex) => (
                      <li key={techIndex}>{techItem.icon} {techItem.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Projects;