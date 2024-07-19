import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import style from './Design.module.css';
import img from '../../assets/Hero/laptop.png';

const Design = () => {
    const designs = [
        {
            title: 'Project One',
            subtitle: 'Binge Box',
            description: `It's an immersive and user-friendly streaming application designed to provide a seamless interface for browsing and watching movies and TV shows, built with modern web technologies.`,
            date: 'Jan 2021 - Mar 2021',
            image: img,
        },
        {
            title: 'Project Two',
            subtitle: 'Movie App',
            description: `A movie app that allows users to search for their favorite movies and shows detailed information about them.`,
            date: 'Apr 2021 - Jun 2021',
            image: img,
        },
        {
            title: 'Project 3',
            subtitle: 'E-commerce Platform',
            description: `A complete e-commerce platform with user authentication, product listings, and a shopping cart.`,
            date: 'Jul 2021 - Sep 2021',
            image: img,
        },
        {
            title: 'Project 4',
            subtitle: 'E-commerce Platform',
            description: `A complete e-commerce platform with user authentication, product listings, and a shopping cart.`,
            date: 'Jul 2021 - Sep 2021',
            image: img,
        },
        {
            title: 'Project Five',
            subtitle: 'E-commerce Platform',
            description: `A complete e-commerce platform with user authentication, product listings, and a shopping cart.`,
            date: 'Jul 2021 - Sep 2021',
            image: img,
        },
        {
            title: 'Project Six',
            subtitle: 'E-commerce Platform',
            description: `A complete e-commerce platform with user authentication, product listings, and a shopping cart.`,
            date: 'Jul 2021 - Sep 2021',
            image: img,
        },
        {
            title: 'Project Seven',
            subtitle: 'E-commerce Platform',
            description: `A complete e-commerce platform with user authentication, product listings, and a shopping cart.`,
            date: 'Jul 2021 - Sep 2021',
            image: img,
        },
        {
            title: 'Project Eight',
            subtitle: 'E-commerce Platform',
            description: `A complete e-commerce platform with user authentication, product listings, and a shopping cart.`,
            date: 'Jul 2021 - Sep 2021',
            image: img,
        }
    ];

    return (
        <div className={`${style.design} ${style.center}`}>
            <h2>Designs</h2>
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
            className="mySwiper">
                {designs.map((design, index) => (
                    <SwiperSlide key={index} className={style.cards}>
                        <img src={design.image} alt={design.subtitle} />
                        <h4>{design.subtitle}</h4>
                        <p>{design.description}</p>
                        <h6>{design.date}</h6>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Design;
