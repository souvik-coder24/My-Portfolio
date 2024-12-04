import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import style from './Design.module.css';
import netflix from '../../assets/Hero/netflix.png'
import Analog from '../../assets/Hero/Analog.png';
import snake from '../../assets/Hero/Snake.png';
import Password from '../../assets/Hero/Password.png';
import Music from '../../assets/Hero/Music.png';
import Cricket from '../../assets/Hero/Cricket.png';
import Todo from '../../assets/Hero/Todo.png';
import Education from '../../assets/Hero/education.png';

const Design = () => {
    const designs = [
        {
            title: 'Project One',
            subtitle: 'Netflix Clone',
            description: `A user-friendly tool for generating secure, customizable passwords, allowing users to select length, complexity, and character types for optimal protection.`,
            image: netflix,
            link: 'https://rococo-kashata-a5f1dd.netlify.app/',
        },
        {
            title: 'Project One',
            subtitle: 'Password Generator',
            description: `A user-friendly tool for generating secure, customizable passwords, allowing users to select length, complexity, and character types for optimal protection.`,
            image: Password,
            link: 'https://cute-rabanadas-d18afb.netlify.app/',
        },
        {
            title: 'Project Two',
            subtitle: 'Snake Game',
            description: `A classic, interactive Snake Game with smooth controls and engaging visuals, designed for a fun and nostalgic gaming experience.`,
            image: snake,
            link: 'https://neon-alfajores-afada8.netlify.app/',
        },
        {
            title: 'Project Three',
            subtitle: 'Analog Watch',
            description: `A sleek, interactive Analog Watch app displaying real-time hours, minutes, and seconds with a smooth, visually engaging clock interface.`,
            image: Analog,
            link: 'https://unique-nougat-54b4ad.netlify.app/',
        },
        {
            title: 'Project Four',
            subtitle: 'Music Player',
            description: `A user-friendly music player app for playing, organizing, and enjoying your favorite tracks with a sleek and intuitive interface.`,
            image: Music,
            link: 'https://jocular-tulumba-688768.netlify.app/',
        },
        {
            title: 'Project Five',
            subtitle: 'Cricket Logic Game',
            description: `A fun and challenging Cricket Logic Game that tests your strategic thinking with cricket-themed puzzles and engaging gameplay.`,
            image: Cricket,
            link: 'https://graceful-mandazi-20b82a.netlify.app/',
        },
        {
            title: 'Project Six',
            subtitle: 'Education Platform',
            description: `A simple and intuitive education platform offering courses, quizzes, and interactive lessons to enhance learning and knowledge.`,
            image: Education,
            link: 'https://magical-dolphin-14bc02.netlify.app/',
        },
        {
            title: 'Project Seven',
            subtitle: 'Todo List',
            description: `A simple and efficient To-Do List app for organizing tasks, setting priorities, and tracking progress with an intuitive interface.`,
            image: Todo,
            link: 'https://chimerical-flan-4724cb.netlify.app/',
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
                    <SwiperSlide 
                        key={index} 
                        className={style.cards} 
                        onClick={() => window.open(design.link, '_blank')}
                    >
                        <img src={design.image} alt={design.subtitle} />
                        <div className={style.cardContent}>
                            <h4>{design.subtitle}</h4>
                            <p>{design.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Design;