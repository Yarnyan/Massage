import React from 'react'
import styles from './Entry.module.scss'
export default function Entry({ closeModal }) {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={closeModal} />
      <div className={styles.modalContent}>
        <h1>Спасибо за заявку!</h1>
        <p>Наш администратор свяжется с вами в течении <span>29 секунд </span> для уточнения детатей по времени посещеня и наполнению Вашей программы.</p>
        <button onClick={closeModal}>Вернуться на главную</button>
      </div>
    </div>
  )
}
