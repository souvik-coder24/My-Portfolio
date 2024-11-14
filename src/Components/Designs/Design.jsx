import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import style from './Design.module.css';
import Analog from '../../assets/Hero/Analog.png'
import snake from '../../assets/Hero/Snake.png'
import Password from '../../assets/Hero/Password.png'
import Music from '../../assets/Hero/Music.png'
import Cricket from '../../assets/Hero/Cricket.png'
import Todo from '../../assets/Hero/Todo.png'
import Education from '../../assets/Hero/education.png'

const Design = () => {
    const designs = [
        {
            title: 'Project One',
            subtitle: 'Password Generator',
            description: `A user-friendly tool for generating secure, customizable passwords, allowing users to select length, complexity, and character types for optimal protection.`,
            image: Password,
            link: 'https://binge-box.com',
        },
        {
            title: 'Project Two',
            subtitle: 'Snake Game',
            description: `A classic, interactive Snake Game with smooth controls and engaging visuals, designed for a fun and nostalgic gaming experience.`,
            image: snake,
            link: 'https://movie-app.com',
        },
        {
            title: 'Project Three',
            subtitle: 'Analog Watch',
            description: `A sleek, interactive Analog Watch app displaying real-time hours, minutes, and seconds with a smooth, visually engaging clock interface.`,
            image: Analog,
            link: 'https://ecommerce-platform.com',
        },
        {
            title: 'Project Three',
            subtitle: 'Music Player',
            description: `A user-friendly music player app for playing, organizing, and enjoying your favorite tracks with a sleek and intuitive interface.`,
            image: Music,
            link: 'https://ecommerce-platform.com',
        },
        {
            title: 'Project Three',
            subtitle: 'Cricket Logic Game',
            description: `A fun and challenging Cricket Logic Game that tests your strategic thinking with cricket-themed puzzles and engaging gameplay.`,
            image: Cricket,
            link: 'https://ecommerce-platform.com',
        },
        {
            title: 'Project Three',
            subtitle: 'Education Platform',
            description: `A simple and intuitive education platform offering courses, quizzes, and interactive lessons to enhance learning and knowledge.`,
            image: Education,
            link: 'https://ecommerce-platform.com',
        },
        {
            title: 'Project Three',
            subtitle: 'Todo List',
            description: `A simple and efficient To-Do List app for organizing tasks, setting priorities, and tracking progress with an intuitive interface.`,
            image: Todo,
            link: 'https://ecommerce-platform.com',
        },
    ];

    return (
        <div className={`${style.design} ${style.center}`}>
            <h2>Fun Time</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                autoplay={{ delay: 3000 }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {designs.map((design, index) => (
                    <SwiperSlide key={index} className={style.cards}>
                        <a href={design.link} target="_blank" rel="noopener noreferrer">
                            <img src={design.image} alt={design.subtitle} />
                            <div className={style.cardContent}>
                                <h4>{design.subtitle}</h4>
                                <p>{design.description}</p>
                                <h6>{design.date}</h6>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Design;