import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import Warning from '../modal/Warning/Warning'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CreateIcon from '@mui/icons-material/Create';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RoomIcon from '@mui/icons-material/Room';
export default function Header() {
    const [token, setToken] = useState(localStorage.getItem('isAdult'));
    const width = window.innerWidth;
    const [menuOpen, setMenuOpen] = useState(false);
    const [isWarningOpen, setIsWarningOpen] = useState(!token);

    useEffect(() => {
        if (!token || menuOpen || isWarningOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [token, menuOpen, isWarningOpen]);

    useEffect(() => {
        if (!token) {
          document.body.classList.add('no-scroll');
        }
      }, []);

    const handleAccept = () => {
        localStorage.setItem('isAdult', 'true');
        setToken('true');
        setIsWarningOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header} id='header'>
            <div className={styles.container}>
                <div className={styles.nav}>
                    {(width >= 1200) && (
                        <div className={styles.name}>
                            <p>Bless</p>
                        </div>
                    )}
                    <div className={styles.info}>
                        <div className={styles.address}>
                            <>
                                <p>г. Тюмень</p>
                                <p>ул. 30 лет победы</p>
                            </>
                        </div>
                        <div className={styles.number}>
                            <>
                                <p>Запись по телефону</p>
                                <p>+ 7 900 900 90 90</p>
                            </>
                        </div>
                        {width < 1200 && (
                            <div className={styles.menuIcon} onClick={toggleMenu}>
                                {menuOpen ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.slider}>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
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
            <div className={`${styles.buttons}`}>
                <div className={styles.links}>
                    <a href="#models">Модели</a>
                    <a href="#advantages">Сок💦</a>
                    <a href="#programs">Программы</a>
                    <a href="#liaison">Запись</a>
                </div>
                <div className={styles.record}>
                    <a href="#liaison">
                        Записаться
                    </a>
                </div>
            </div>
            {!token && isWarningOpen && <Warning onAccept={handleAccept} />}
            {menuOpen && (
                <div className={styles.burgerMenu}>
                    <div className={styles.burgerMenuLinks}>
                        <div className={styles.burgerMenuLink}>
                            <div className={styles.LinkIcon}>
                                <GroupIcon />
                            </div>
                            <div className={styles.LinkText}>
                                <p>Модели</p>
                                <p>Мастер эротического массажа</p>
                            </div>
                        </div>
                        <div className={styles.burgerMenuLink}>
                            <div className={styles.LinkIcon}>
                                <FavoriteIcon />
                            </div>
                            <div className={styles.LinkText}>
                                <p>Сок💦</p>
                                <p>Мастер эротического массажа</p>
                            </div>
                        </div>
                        <div className={styles.burgerMenuLink}>
                            <div className={styles.LinkIcon}>
                                <MenuBookIcon />
                            </div>
                            <div className={styles.LinkText}>
                                <p>Программы</p>
                                <p>Программы эротического массажа</p>
                            </div>
                        </div>
                        <div className={styles.burgerMenuLink}>
                            <div className={styles.LinkIcon}>
                                <CreateIcon />
                            </div>
                            <div className={styles.LinkText}>
                                <p>Запись</p>
                                <p>Мастер эротического массажа</p>
                            </div>
                        </div>
                        <div className={styles.burgerMenuLink}>
                            <div className={styles.LinkIcon}>
                                <AttachMoneyIcon />
                            </div>
                            <div className={styles.LinkText}>
                                <p>Вакансии</p>
                                <p>Мастер эротического массажа</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.burgerMenuInfo}>
                        <div className={styles.burgerMenuLink}>
                            <div className={styles.LinkIcon}>
                                <LocalPhoneIcon />
                            </div>
                            <div className={styles.LinkText}>
                                <p>Запись по телефону</p>
                                <p>+ 7 900 900 90 90</p>
                            </div>
                        </div>
                        <div className={styles.burgerMenuLink}>
                            <div className={styles.LinkIcon}>
                                <RoomIcon />
                            </div>
                            <div className={styles.LinkText}>
                                <p>г. Тюмень</p>
                                <p>ул. 30 лет победы</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
