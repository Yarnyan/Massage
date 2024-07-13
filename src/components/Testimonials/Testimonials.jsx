import React, { useState, useEffect } from 'react'
import styles from './Testimonials.module.scss'
import Testimonial from './Testimonial/Testimonial'
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialsModal from '../modal/TestimonialsModal/Testimonials';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useGetReviewsQuery } from '../../store/reducers/reviews/reviews.actions';

export default function Testimonials() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {data, isSuccess} = useGetReviewsQuery();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isModalOpen]);

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
                    <button onClick={handleOpenModal}>Оставить отзыв</button>
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
                        {isSuccess && (
                            <Swiper>
                            {data.reviews.items.map(review => (
                                <SwiperSlide key={review.review_id} className={styles.swiperSlide}>
                                <Testimonial review={review} />
                                </SwiperSlide>
                            ))}
                            </Swiper>
                        )}
                    </Swiper>
                    <div className="containerForTestimonials"></div>
                </div>
            </div>
            <TestimonialsModal isOpen={isModalOpen} onClose={handleCloseModal}/>
        </div>
    )
}
