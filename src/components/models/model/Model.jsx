import React from 'react';
import styles from './Model.module.scss';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Model() {
    const pagination = {
        el: ".containerForModelPagination",
        clickable: true,
        enabled: true,
    };
    const navigation = {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    };
    return (
        <div className={styles.model}>
            <div className={styles.testimonialsContainer}>
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    spaceBetween={50}
                    pagination={pagination}
                    navigation={navigation}
                    slidesPerView="auto"
                    className={styles.swiper}
                    loop={true}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src="https://studia83.ru/upload/resize_cache/iblock/65e/360_360_2/x65e2bf4a40424fbb97bef364d73b88b2.JPG.pagespeed.ic.N_yXENGOpc.webp" alt="Model" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src="https://studia83.ru/upload/resize_cache/iblock/65e/360_360_2/x65e2bf4a40424fbb97bef364d73b88b2.JPG.pagespeed.ic.N_yXENGOpc.webp" alt="Model" />
                    </SwiperSlide>
                    <div className="containerForModelPagination">
                    </div>
                </Swiper>
                <div className="customContainerForArrow">
                    <div className="custom-prev">
                        <ArrowBackIosNewIcon />
                    </div>
                    <div className="custom-next">
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
            <div className={styles.modelInfo}>
                <p>Cимона</p>
                <p>@simona-ar</p>
                {/* <img src="https://studia83.ru/upload/resize_cache/iblock/65e/360_360_2/x65e2bf4a40424fbb97bef364d73b88b2.JPG.pagespeed.ic.N_yXENGOpc.webp" alt="Model" /> */}
            </div>
            <div className={styles.modelAbout}>
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
            </div>
            <div className={styles.buttons}>
                <a href="#liaison">Записаться</a>
                <Link to={'/models/simona'}>Подробнее</Link>
            </div>
        </div>
    );
}
