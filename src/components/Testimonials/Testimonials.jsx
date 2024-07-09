import React from 'react'
import styles from './Testimonials.module.scss'
import Testimonial from './Testimonial/Testimonial'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
    const pagination = {
        el: ".containerForTestimonials",
        clickable: true,
        enabled: true,
      };
    return (
        <div className={styles.testimonials}>
            <div className={styles.container}>
                <p className={styles.testimonialsSubtitle}>Отзывы</p>
                <p>Впечатления гостей о посещении студии.</p>
                <p>Поделись опытом с новичками и замечаниями о работе студии с администратором студии.</p>
                <div className={styles.create}>
                    <button>Оставить отзыв</button>
                </div>
                <div className={styles.testimonialsContainer}>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        spaceBetween={50}
                        pagination={pagination}
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
                    <div className="containerForTestimonials"></div>
                </div>
            </div>
        </div>
    )
}
