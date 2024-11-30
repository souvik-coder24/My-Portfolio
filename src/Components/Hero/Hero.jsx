import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
import img from '../../assets/Hero/Hero.png';
import pdf from '../../pdf/Souvik.pdf';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Souvik Das.', 'a Frontend Developer.', 'a Designer.', 'a Guitarist.'];
  const colors = ['orange', 'red', 'purple', 'green'];

  const handleType = (count) => {
    setCurrentWordIndex(count % words.length);
  };

  return (
    <div className={styles.hero}>
      <motion.div className={styles.left}>
        <motion.div className={styles.details}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h6 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>Hello,</motion.h6>
          <motion.div className={styles.info}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.h4
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              I am {' '}
              <span style={{ color: colors[currentWordIndex] }}>
                <Typewriter
                  words={words}
                  loop={true}
                  cursor
                  cursorStyle=" "
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onType={handleType}
                />
              </span>
            </motion.h4>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}>
              Skilled in turning design mockups into interactive websites, combining creativity and technical expertise. Explore my portfolio to see how I transform ideas into visually appealing and functional web experiences.
            </motion.p>
            <motion.div className={styles.social}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}>
              <motion.a href="https://facebook.com/profile.php?id=100012452561024" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaFacebook className={styles.sicon} />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/souvik-d1" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaLinkedin className={styles.sicon} />
              </motion.a>
              <motion.a href="https://github.com/souvik-coder24" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaGithub className={styles.sicon} />
              </motion.a>
              <motion.a href="https://instagram.com/souvikdas89/profilecard/?igsh=MTK2bWFtemlrZ2FhNA==" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaInstagram className={styles.sicon} />
              </motion.a>
              <motion.a href="https://twitter.com/SouvikCoder?t=2cMOIOYHedwCxxvbgS1EwA&s=09" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaXTwitter className={styles.sicon} />
              </motion.a>
            </motion.div>
            <motion.a href={pdf} download="souvik_resume">
              <motion.button
                className={styles.btn}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}>
                Download CV
              </motion.button>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className={styles.right}>
        <motion.img
          src={img}
          alt="hero"
          loading="lazy"
          className={styles.heroImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
