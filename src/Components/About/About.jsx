import React, { useEffect } from 'react';
import styles from './About.module.css';
import img from '../../assets/Hero/About.png';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.about}>
      <div className={styles.left} data-aos="fade-right">
        <img src={img} alt="About Image" />
      </div>
      <div className={styles.right} data-aos="fade-left">
        <h4>About</h4>
        <p>
          <Typewriter
            words={["Hello! I'm Souvik Das, a frontend developer who graduated from JIS College of Engineering, Kalyani in 2022 with a degree in Information Technology. As a fresher, I have a strong foundation in HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, Java, React.js, Node.js, Git, and GitHub. Recently, I've also gained proficiency in SASS for enhanced CSS styling, Firebase for backend services, Appwrite for backend services and Netlify for deployment. My personal projects have fueled my passion for creating user-friendly and visually appealing web interfaces. I am eager to apply my skills to real-world projects, continuously learn, and grow in the dynamic field of web development. Check out my portfolio and GitHub for examples of my work and to see how I can contribute to your team."]}
            loop
            cursor
            cursorStyle=" "
            typeSpeed={10}
            deleteSpeed={2}
            delaySpeed={1000}
          />
        </p>
      </div>
    </div>
  );
}

export default About;
