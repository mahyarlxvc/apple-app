"use client"
import React from 'react'
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CourseCard from '../cards/course-card/CourseCard';

function CoursesSlider({ slides = [], ...props }) {
    return (
        <Swiper
            breakpoints={{
                768: {
                    spaceBetween: 15,
                    slidesPerView: 3
                },
                1024: {
                    spaceBetween: 20,
                    slidesPerView: 4
                },
                1280: {
                    spaceBetween: 20,
                    slidesPerView: 5
                }
            }}
            loop
            modules={[Navigation, A11y, Autoplay]}
            autoplay={{
                delay: 3800,
                disableOnInteraction: false
            }}
            spaceBetween={10}
            slidesPerView={1}
            {...props}
        >
            {
                slides.map(slide => <SwiperSlide>
                    <CourseCard {...slide} />
                </SwiperSlide>
                )
            }
        </Swiper >
    )
}

export default CoursesSlider