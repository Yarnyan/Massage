import React from 'react'
import styles from './Models.module.scss'

import Model from './model/Model'
export default function Models() {

    return (
        <div className={styles.models} id="models">
            <div className={styles.container}>
                <p className={styles.modelsSubtile}>Модели</p>
                <div className={styles.selection}>
                    <p>Выбор модели для комфортного визита</p>
                    <p>Мы заботимся об актуальности расписания работы моделей и достоверностью фотографий — чтобы визит в студию был максимально комфортным.</p>
                </div>
                <div className={styles.modelsContainer}>
                    <Model />
                    <Model />
                    <Model />
                    <Model />
                    <Model />
                </div>
            </div>
        </div>
    )
}
