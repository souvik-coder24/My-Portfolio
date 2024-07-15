import React from 'react';
import { FaCode } from 'react-icons/fa';
import style from './Projects.module.css';
import img from '../../assets/Hero/laptop.png';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      subtitle: 'Web Development',
      description: 'Description for project one. Built using React and Node.js.',
      date: 'Jan 2021 - Mar 2021',
      image: img,
      icon: <FaCode />,
    },
    {
      title: 'Project Two',
      subtitle: 'Mobile App',
      description: 'Description for project two. Built using React Native.',
      date: 'Apr 2021 - Jun 2021',
      image: img,
      icon: <FaCode />,
    },
    {
      title: 'Project Three',
      subtitle: 'E-commerce Site',
      description: 'Description for project three. Built using Shopify and React.',
      date: 'Jul 2021 - Sep 2021',
      image: img,
      icon: <FaCode />,
    },
    {
      title: 'Project Four',
      subtitle: 'Machine Learning',
      description: 'Description for project four. Built using Python and TensorFlow.',
      date: 'Oct 2021 - Dec 2021',
      image: img,
      icon: <FaCode />,
    },
  ];

  return (
    <div className={style.project}>
      <h3>Projects</h3>
      <h6>Each Project is a Unique piece of Development</h6>
      <div className={style.prdetails}>
        {projects.map((project, index) => (
          <div key={index} className={style.verticalLine}>
            <div className={style.imgcontainer}>
              <img src={project.image} alt="Project" />
            </div>
            <div className={style.details}>
              <h3 className="vertical-timeline-element-title">{project.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{project.subtitle}</h4>
              <p>{project.description}</p>
              <span className="vertical-timeline-element-date">{project.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
