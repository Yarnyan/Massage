import React from 'react'
import styles from './Programs.module.scss'
import Program from './program/Program'
export default function Programs() {
  return (
    <div className={styles.program} id="programs">
        <div className={styles.container}>
            <p className={styles.programSubtitle}>Программы</p>
            <p>Программы эротического массажа</p>
            <p>Множество вариантов эротического массажа для мужчин в Тюмени – выберите тот, что доставит максимальное удовольствие.</p>
            <div className={styles.programsContainer}>
                <Program />
                <Program />
                <Program />
                <Program />
            </div>
        </div>
    </div>
  )
}
