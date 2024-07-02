import React from 'react'
import styles from './Testimonials.module.scss'
import Testimonial from './Testimonial/Testimonial'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonials() {
    return (
        <div className={styles.testimonials}>
            <div className={styles.container}>
                <p className={styles.testimonialsSubtitle}>Отзывы</p>
                <p>Впечатления гостей о посещении студии.</p>
                <p>Поделись опытом с новичками и замечаниями о работе студии с администратором студии.</p>
                <div className={styles.testimonialsContainer}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={50}
                        navigation={true}
                        slidesPerView="auto"
                        className={styles.swiper}
                        loop={true}
                    >
                        <SwiperSlide className={styles.swiperSlide}>
                            <Testimonial />
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                            <Testimonial />
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                            <Testimonial />
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                            <Testimonial />
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                            <Testimonial />
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                            <Testimonial />
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                            <Testimonial />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
