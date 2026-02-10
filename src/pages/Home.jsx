import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles/Home.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination , Navigation, Autoplay } from 'swiper/modules';

import { homeSlides } from '../data/HomeSlides';

const Home = () => {
  return (
    <section className='home'>
        <div className='inner'>
            <h2>Home</h2>
        </div>
        <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
        //   disableOnInteraction: false,
        }}
        loop
        pagination={{dynamicBullets: true}}
        modules={[Autoplay, Pagination, Navigation]}
        className="home-swiper">
            {homeSlides.map(({id, title, img, subtitle})=>(
                <SwiperSlide key={id} style={{backgroundImage:`url(${img})`}}>
                    <div className="text-content-wrapper">
                        <h4>
                            {title}
                        </h4>
                        <p>{subtitle}</p>
                    </div>
                </SwiperSlide>
            ))}
      </Swiper>
    </section>
  )
}

export default Home
