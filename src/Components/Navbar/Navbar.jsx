import React from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css'; 
import logoImage from '../../assets/Logo/Souviklogo.png';

const Navbar = () => {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className={styles.navbar}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      <div className={styles['navbar-logo']}>
        <img src={logoImage} alt="logo" />
      </div>
      <div className={styles.right}>
        <ul className={styles.links}>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Projects</li>
          <li>Contact Us</li>
        </ul>
        <button className={styles.btn}>Hire Me</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
