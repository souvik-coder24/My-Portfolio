import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCode, FaHtml5, FaCss3, FaBootstrap, FaNpm, FaGithub, FaGitAlt, FaFigma, FaReact, FaNodeJs, FaVideo } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss, SiVite, SiFirebase, SiAppwrite, SiVitest } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { TbBrandFramerMotion, TbApi } from "react-icons/tb";
import style from './Projects.module.css';
import img from '../../assets/Hero/laptop.png';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      subtitle: 'Binge Box',
      description: `It's an immersive and user-friendly streaming application designed to provide a seamless interface for browsing and watching movies and TV shows, built with modern web technologies.`,
      date: 'Jan 2021 - Mar 2021',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'JavaScript', icon: <RiJavascriptFill /> },
        { name: 'Module css', icon: <FaCss3 /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'TmDB API', icon: <TbApi /> },
        { name: 'npm', icon: <FaNpm /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Vitest', icon: <SiVitest /> },
        { name: 'Netlify', icon: <BiLogoNetlify /> }
      ],
      image: img,
      icon: <FaCode />,
    },
    {
      title: 'Project Two',
      subtitle: 'Mobile App',
      description: 'BingeBox is an immersive and user-friendly streaming application designed to provide a seamless interface for browsing and watching movies and TV shows, built with modern web technologies.',
      date: 'Apr 2021 - Jun 2021',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'JavaScript', icon: <RiJavascriptFill /> },
        { name: 'Module css', icon: <FaCss3 /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'npm', icon: <FaNpm /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Vitest', icon: <SiVitest /> },
        { name: 'Netlify', icon: <BiLogoNetlify /> }
      ],
      image: img,
      icon: <FaCode />,
    },
    {
      title: 'Project Three',
      subtitle: 'E-commerce Site',
      description: 'BingeBox is an immersive and user-friendly streaming application designed to provide a seamless interface for browsing and watching movies and TV shows, built with modern web technologies.',
      date: 'Jul 2021 - Sep 2021',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'JavaScript', icon: <RiJavascriptFill /> },
        { name: 'Module css', icon: <FaCss3 /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'npm', icon: <FaNpm /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Vitest', icon: <SiVitest /> },
        { name: 'Netlify', icon: <BiLogoNetlify /> }
      ],
      image: img,
      icon: <FaCode />,
    },
    {
      title: 'Project Four',
      subtitle: 'Machine Learning',
      description: 'BingeBox is an immersive and user-friendly streaming application designed to provide a seamless interface for browsing and watching movies and TV shows, built with modern web technologies.',
      date: 'Oct 2021 - Dec 2021',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'JavaScript', icon: <RiJavascriptFill /> },
        { name: 'css Module', icon: <FaCss3 /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'npm', icon: <FaNpm /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Vitest', icon: <SiVitest /> },
        { name: 'Netlify', icon: <BiLogoNetlify /> }
      ],
      image: img,
      icon: <FaCode />,
    },
    {
      title: 'Project Five',
      subtitle: 'Machine Learning',
      description: 'BingeBox is an immersive and user-friendly streaming application designed to provide a seamless interface for browsing and watching movies and TV shows, built with modern web technologies.',
      date: 'Oct 2021 - Dec 2021',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'JavaScript', icon: <RiJavascriptFill /> },
        { name: 'Module css', icon: <FaCss3 /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'npm', icon: <FaNpm /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Vitest', icon: <SiVitest /> },
        { name: 'Netlify', icon: <BiLogoNetlify /> }
      ],
      image: img,
      icon: <FaCode />,
    },
    {
      title: 'Project Six',
      subtitle: 'Machine Learning',
      description: 'BingeBox is an immersive and user-friendly streaming application designed to provide a seamless interface for browsing and watching movies and TV shows, built with modern web technologies.',
      date: 'Oct 2021 - Dec 2021',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'JavaScript', icon: <RiJavascriptFill /> },
        { name: 'Module css', icon: <FaCss3 /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'npm', icon: <FaNpm /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Vitest', icon: <SiVitest /> },
        { name: 'Netlify', icon: <BiLogoNetlify /> }
      ],
      image: img,
      icon: <FaCode />,
    }
  ];

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
                    <img src={project.image} alt="laptop" className={style.projectImage} />
                  </div>
                  <div className={style.info}>
                    <h4>{project.subtitle}</h4>
                    <div className={style.links}>
                      <FaGithub />
                      <FaVideo />
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