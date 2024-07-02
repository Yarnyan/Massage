import React, {useEffect, useState} from 'react'
import styles from './Header.module.scss'
import Warning from '../modal/Warning/Warning'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export default function Header() {
    const [token, setToken] = useState(localStorage.getItem('isAdult'));
    console.log(token)
    useEffect(() => {
        if (!token) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
      }, [token]);
      const handleAccept = () => {
        localStorage.setItem('isAdult', 'true');
        setToken('true');
      };
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <div className={styles.name}>
                        <p>Алиса</p>
                        <p>и</p>
                        <p>Милана</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.address}>
                            <p>г. Москва</p>
                            <p>ул. Первая д.90</p>
                        </div>
                        <div className={styles.number}>
                            <p>Запись по телефону</p>
                            <p>+ 7 900 858 69 57</p>
                        </div>
                    </div>
                </div>
                <div className={styles.slider}>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        spaceBetween={50}
                        slidesPerView={1}
                    >
                        <SwiperSlide>
                            <div className={styles.imgContainer}>
                                <img src='/image/backgroundImage.png' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.imgContainer}>
                                <img src='/image/backgroundImage2.png' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.imgContainer}>
                                <img src='/image/backgroundImage3.png' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.imgContainer}>
                                <img src='/image/backgroundImage4.png' alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className={styles.text}>
                <p>УВИДИМСЯ <span>СЕГОДНЯ</span>?</p>
                <p>Максимальное соприкосновение двух тел. Трепет, драйв, страсть и нежность</p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.links}>
                    <a href="#models">Модели</a>
                    <a href="#advantages">Сок💦</a>
                    <a href="#programs">Программы</a>
                    <a href="#liaison">Запись</a>
                </div>
                <div className={styles.record}>
                    <button>
                        Записаться
                    </button>
                </div>
            </div>
            {!token ? <Warning onAccept={handleAccept} /> : ''}
        </header>
    )
}
