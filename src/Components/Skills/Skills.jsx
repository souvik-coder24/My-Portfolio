import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from './Skills.module.css';
import { FaHtml5, FaCss3, FaBootstrap, FaNpm, FaGithub, FaGitAlt, FaFigma, FaReact, FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss, SiVite, SiFirebase, SiAppwrite, SiVitest } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 13,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    pause: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.skills}>
      <h4 className={styles.title} data-aos="fade-up">My Expertise</h4>
      <Slider {...settings} className={styles.skillouter}>
        <div data-aos="zoom-in"><FaFigma className={styles.sicon} /></div>
        <div data-aos="zoom-in"><FaHtml5 className={styles.sicon} /></div>
        <div data-aos="zoom-in"><FaCss3 className={styles.sicon} /></div>
        <div data-aos="zoom-in"><RiJavascriptFill className={styles.sicon} /></div>
        <div data-aos="zoom-in"><FaBootstrap className={styles.sicon} /></div>
        <div data-aos="zoom-in"><SiTailwindcss className={styles.sicon} /></div>
        <div data-aos="zoom-in"><FaNpm className={styles.sicon} /></div>
        <div data-aos="zoom-in"><FaReact className={styles.sicon} /></div>
        <div data-aos="zoom-in"><SiVite className={styles.sicon} /></div>
        <div data-aos="zoom-in"><FaGithub className={styles.sicon} /></div>
        <div data-aos="zoom-in"><FaGitAlt className={styles.sicon} /></div>
        <div data-aos="zoom-in"><FaNodeJs className={styles.sicon} /></div>
        <div data-aos="zoom-in"><SiFirebase className={styles.sicon} /></div>
        <div data-aos="zoom-in"><BiLogoNetlify className={styles.sicon} /></div>
        <div data-aos="zoom-in"><SiAppwrite className={styles.sicon} /></div>
        <div data-aos="zoom-in"><SiVitest className={styles.sicon} /></div>
      </Slider>
    </div>
  );
}

export default Skills;
