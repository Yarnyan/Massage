import React, { useState, useEffect } from 'react'
import styles from './Model.module.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Testimonial from '../Testimonials/Testimonial/Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Breadcrumb from '../breadcrumbs/Breadcrumb';
import 'swiper/css';
import 'swiper/css/pagination';
export default function Model() {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const images = [
        "https://studia83.ru/upload/iblock/7f3/x7f32cf3593b87e501723f9ada4d0a068.jpg.pagespeed.ic.HLH6FwC4nz.webp",
        "https://studia83.ru/upload/iblock/7f3/x7f32cf3593b87e501723f9ada4d0a068.jpg.pagespeed.ic.HLH6FwC4nz.webp",
        "https://studia83.ru/upload/iblock/2a6/x2a64e548af37e7219aa644dbba31ed45.jpg.pagespeed.ic.AMw6z2Kk-c.webp",
        "https://studia83.ru/upload/resize_cache/iblock/35b/400_400_2/x35bd6e207230253be8fa68f7c60d12c6.jpg.pagespeed.ic.8eXng621YK.webp"
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);
    const pagination = {
        el: ".containerForTestimonials",
        clickable: true,
        enabled: true,
    };
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={styles.model}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src="https://studia83.ru/upload/resize_cache/iblock/65e/360_360_2/x65e2bf4a40424fbb97bef364d73b88b2.JPG.pagespeed.ic.N_yXENGOpc.webp" alt="" />
                    <div className={styles.modelAbout}>
                        <p className={styles.modelName}>Симона</p>
                        <div className={styles.info}>
                            <div className={styles.pp}>
                                <p>Вес</p>
                                <p>46кг</p>
                            </div>
                            <div className={styles.pp}>
                                <p>Возраст</p>
                                <p>18 лет</p>
                            </div>
                            <div className={styles.pp}>
                                <p>Рост</p>
                                <p>168 см</p>
                            </div>
                            <div className={styles.pp}>
                                <p>Размер груди</p>
                                <p>Первый</p>
                            </div>
                            <div className={styles.pp}>
                                <p>Татуировки</p>
                                <p>Нет</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.body}>
                    <p>Фотографии моделей</p>
                    {windowWidth < 600 ? (
                        <div className={styles.squareContainer}>
                            {images.map((src, index) => {
                                let imgClass = '';
                                switch (index) {
                                    case 0:
                                        imgClass = styles.imgTopLeft;
                                        break;
                                    case 1:
                                        imgClass = styles.imgTopRight;
                                        break;
                                    case 2:
                                        imgClass = styles.imgBottomLeft;
                                        break;
                                    case 3:
                                        imgClass = styles.imgBottomRight;
                                        break;
                                    default:
                                        break;
                                }
                                return (
                                    <div key={index} className={styles.squareImageContainer}>
                                        <img
                                            src={src}
                                            alt=""
                                            onClick={() => { setIsOpen(true); setPhotoIndex(index); }}
                                            style={{ cursor: 'pointer' }}
                                            className={imgClass}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className={styles.imageContainer}>
                            {images.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt=""
                                    onClick={() => { setIsOpen(true); setPhotoIndex(index); }}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div className={styles.testimonials}>
                    <p className={styles.testimonialsTitle}>Отзывы</p>
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
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </div>
    )
}
