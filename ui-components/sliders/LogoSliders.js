"use client"
import React from 'react'
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

function LogoSlider({ slides = [], ...props }) {
    return (
        <Swiper
            breakpoints={{
                900: {
                    spaceBetween: 15,
                    slidesPerView: 6
                }
            }}
            loop
            modules={[Navigation, A11y, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3800,
                disableOnInteraction: false
            }}
            speed={2000}
            spaceBetween={50}
            slidesPerView={3}
            {...props}
            className='w-full h-full'
        >
            {
                slides.map(slide => <SwiperSlide className='w-full h-full'>
                    <Image src={slide} objectFit='contain' className='grayscale custom-transition hover:grayscale-0' />
                </SwiperSlide>)
            }
        </Swiper>
    )
}

export default LogoSlider