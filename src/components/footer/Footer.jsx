import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.container}>
                <div className={styles.footerHeader}>
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
                <div className={styles.footerBody}>
                    <p>Сайт имеет возрастное ограничение 18+. Данные, размещенные на сайте, представляют собой информационный характер. Администрация сайта не преследует цели оскорбить честь и достоинство посетителей сайта.</p>
                    <img src="/image/Telegram_black.svg" alt="" />
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
