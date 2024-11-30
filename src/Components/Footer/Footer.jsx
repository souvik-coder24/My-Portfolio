import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Footer.module.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message sent successfully!', { position: "top-right" });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        toast.error('Message sending failed.', { position: "top-right" });
      });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className={styles.back} onClick={() => scrollToSection('home')}>
        <h6>Back to Top</h6>
      </div>
      <div className={styles.footer}>
        <div className={styles.left}>
          <h4>Contact Me</h4>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={styles.name} />
          <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} className={styles.email} />
          <textarea name="message" placeholder="Type your message here..." value={formData.message} onChange={handleChange} className={styles.text}></textarea>
          <button className={styles.btn} onClick={handleSubmit}>Submit</button>
        </div>
        <div className={styles.middle}>
          <p onClick={() => scrollToSection('home')}>Home</p>
          <p onClick={() => scrollToSection('about')}>About</p>
          <p onClick={() => scrollToSection('skils')}>Expertise</p>
          <p onClick={() => scrollToSection('projects')}>Projects</p>
        </div>
        <div className={styles.right}>
          <div className={styles.social}>
            <a href="https://facebook.com/profile.php?id=100012452561024" target="_blank" rel="noopener noreferrer"><FaFacebook className={styles.icon} /></a>
            <a href="https://www.linkedin.com/in/souvik-d1" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.icon} /></a>
            <a href="https://github.com/souvik-coder24" target="_blank" rel="noopener noreferrer"><FaGithub className={styles.icon} /></a>
            <a href="https://instagram.com/souvikdas89/profilecard/?igsh=MTK2bWFtemlrZ2FhNA==" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.icon} /></a>
            <a href="https://twitter.com/SouvikCoder?t=2cMOIOYHedwCxxvbgS1EwA&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter className={styles.icon} /></a>
          </div>
          <div className={styles.info}>
            <p>JIrat 2no Colony, Near Lokenath Vaban</p>
            <p>Balagarh, Hooghly</p>
            <p>WB, India</p>
            <p>souvikdascoder@gmail.com</p>
            <p>+91-760259299</p>
          </div>
          <h3>Copyright © Souvikcoder. All rights reserved. Site credit.</h3>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Footer;