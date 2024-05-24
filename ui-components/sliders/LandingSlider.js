"use client"
import React from 'react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

function LandingSlider({ slides = [], spaceBetween = 50, slidesPerView = 1, ...props }) {
    return (
        <Swiper
            loop
            modules={[Navigation, Pagination, A11y, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3800,
                disableOnInteraction: false
            }}
            speed={1200}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            {...props}
            className='w-full h-full'
        >
            {
                slides.map(slide => <SwiperSlide className='w-full h-full'>
                    <Image src={slide} objectFit='contain' priority />
                </SwiperSlide>)
            }
        </Swiper>
    )
}

export default LandingSlider