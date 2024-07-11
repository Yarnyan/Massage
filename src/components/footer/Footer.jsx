import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.container}>
                <div className={styles.footerHeader}>
                    <div className={styles.name}>
                        <img height={70} src="/bless-1000x1000svglogofooter.svg" alt="bless logo" />
                        <p> - Элитный мужской клуб в Тюмени</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.address}>
                            <p>г. Тюмень</p>
                            <p>ул. 30 лет победы</p>
                        </div>
                        <div className={styles.number}>
                            <p>Запись по телефону</p>
                            <p>+ 7 900 900 90 90</p>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBody}>
                    <p>Сайт имеет возрастное ограничение 18+. Данные, размещенные на сайте, представляют собой информационный характер. Администрация сайта не преследует цели оскорбить честь и достоинство посетителей сайта.</p>
                </div>
                <div className={styles.footerLink}>
                    <div className={styles.footerText}>
                        <p>Сайт не является интимным предложением</p>
                    </div>
                    <div className={styles.link}>
                        <p>© 2024 Все права защищены</p>
                        <Link to={'/404'}>Политика конфиденциальности</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
