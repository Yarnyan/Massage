import React from 'react'
import styles from './Model.module.scss'
import { Link } from 'react-router-dom'
export default function Model() {
    return (

        <div className={styles.model}>
            <img src="https://studia83.ru/upload/resize_cache/iblock/65e/360_360_2/x65e2bf4a40424fbb97bef364d73b88b2.JPG.pagespeed.ic.N_yXENGOpc.webp" alt="" />
            <div className={styles.modelInfo}>
                <p>Cимона</p>
                <p>@simona-ar</p>
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
                <a href="">Записаться</a>
                <Link to={'/models/simona'}>Подробнее</Link>
            </div>
        </div>
    )
}
