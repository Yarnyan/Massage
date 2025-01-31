import React, { useRef } from 'react'
import styles from './Program.module.scss'
import { useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
export default function ProgramModal({ closeModal }) {
    // const program = useSelector((state) => state.program.programs)
    return (
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={closeModal} />
            <div className={styles.modalContent}>
                <div className={styles.modalHeader} onClick={closeModal}>
                    <p>Программа</p>
                    <div className={styles.modalHeaderBtn}>
                        Закрыть
                        <CloseIcon />
                    </div>
                </div>
                <p>Повелитель - это одна из самых популярных и интересных программ нашей студии длительностью целых полтора часа.</p>
                <p>Особенность данной программы – различные техники имитаций. Массаж будет выполняться не только руками, но и при помощи шеи, груди, плечей, прикосновений губ и легких дуновений. Вы сможете активно участвовать в процессе, одаривая модель своими поцелуями, пока не наступит полное расслабление.</p>
                <p>Всё начнётся с выбора комнаты и специалиста по удовольствиям с зеркального подиума. Пенное шоу с нашей моделью, позволит с самого начала ощутить ласки и нежные прикосновения. Продолжением водных процедур будет на татами классическим массажем. После полного расслабления вашего тела, эротическая часть программы будет приятным продолжением.</p>
                <p>Стоимость программы «Повелитель» – 9000 руб.</p>
                <div className={styles.modalLinkContainer}>
                    <a onClick={closeModal} href='#liaison'>Записаться</a>
                </div>
            </div>
        </div>
    )
}

// style={{background: `linear-gradient(rgb(0, 0, 0, 0.7), rgba(47, 47, 47, 0.9))`}} в модал контент