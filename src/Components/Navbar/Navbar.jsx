import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import logoImage from '../../assets/Logo/Souviklogo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <div className={styles['navbar-logo']}>
        <img src={logoImage} alt="Souvik Logo" />
      </div>
      <div className={styles.right}>
        <ul className={styles.links}>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('design')}>Design</li>
        </ul>
        <button className={styles.btn} onClick={() => scrollToSection('footer')}>
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;