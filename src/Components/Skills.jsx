import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Skills.module.css';
import logo1 from '../assets/Skills/Html.png';
import logo2 from '../assets/Skills/CSS.png';
import logo3 from '../assets/Skills/JS.png';
import logo4 from '../assets/Skills/Bootstrap.png';
import logo5 from '../assets/Skills/Tailwind.png';
import logo6 from '../assets/Skills/React.png';
import logo7 from '../assets/Skills/Node.png';
import logo8 from '../assets/Skills/Git.png';
import logo9 from '../assets/Skills/Java.png';
import logo10 from '../assets/Skills/Figma.png';
import logo11 from '../assets/Skills/Framer.png';
import giIcon from "../assets/Socialmedia/github.png";


const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skillsname}>
      <h1>Skills</h1></div>
      {/* <div className={styles.logobox}> */}
        <div className={styles.logos}>
          <a href="#"><img src={logo1} alt="Linked-In" /></a>
          <a href="#"><img src={logo2} alt="Github" /></a>
          <a href="#"><img src={logo3} alt="facebook" /></a>
          <a href="#"><img src={logo4} alt="Instagram" /></a>
          <a href="#"><img src={logo5} alt="Twitter" /></a>
          <a href="#"><img src={logo6} alt="Linked-In" /></a>
          <a href="#"><img src={logo7} alt="Github" /></a>
          <a href="#"><img src={logo8} alt="facebook" /></a>
          <a href="#"><img src={logo9} alt="Instagram" /></a>
          <a href="#"><img src={logo10} alt="Twitter" /></a>
          <a href="#"><img src={logo11} alt="Twitter" /></a>
          <a href="#"><img src={giIcon} alt="Twitter" /></a>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Skills;