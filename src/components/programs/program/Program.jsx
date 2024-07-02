import React from 'react'
import styles from './Program.module.scss'
export default function Program() {
    return (
        <div className={styles.program}>
            <img src="/image/programImage.png" alt="" />
            <div className={styles.about}>
                <div className={styles.programName}>
                    <p>
                        Программа
                    </p>
                    <p>
                        Эстет
                    </p>
                </div>
                <div className={styles.programTime}>
                    <p>
                        Длительность:
                    </p>
                    <p>
                        90 мин
                    </p>
                </div>
                <div className={styles.programPrice}>
                    <p>
                        Стоимость
                    </p>
                    <p>
                        8 700 руб.
                    </p>
                </div>
            </div>
            <div className={styles.aboutContainer}>
                <p className={styles.aboutProgram}>Самая популярная программа в студии баланс удовольствия и релакса.</p>
                <div className={styles.buttons}>
                    <a href='#liaison'>Записаться</a>
                    <button>Подробно</button>
                </div>
            </div>
        </div>
    )
}
