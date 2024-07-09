import React from 'react'
import styles from './Error.module.scss'
import { Link } from 'react-router-dom'

export default function Error403() {
  return (
    <div className={styles.error}>
      <div className={styles.overlay}></div>
      <div className={styles.body}>
        <div className={styles.errorBody}>
          <p className={styles.firstP}>4</p>
          <img src="/image/errorImage.png" alt="error image" />
          <p className={styles.secondP}>3</p>
        </div>
        <div className={styles.text}>
          <p>Вы были заблокированы</p>
          <p>Свяжитесь с администратором: &nbsp;&nbsp;&nbsp;<a target='_blank' href="https://t.me/bless72adm">Связаться</a></p>
        </div>
      </div>
    </div>
  )
}
