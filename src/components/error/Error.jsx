import React from 'react'
import styles from './Error.module.scss'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <div className={styles.error}>
      <div className={styles.overlay}></div>
      <div className={styles.body}>
        <div className={styles.errorBody}>
          <p className={styles.firstP}>4</p>
          <img src="/image/errorImage.png" alt="" />
          <p className={styles.secondP}>4</p>
        </div>
        <div className={styles.text}>
          <p>oops! КАЖЕТСЯ ЭТА СТРАНИЦА ПУСТАЯ</p>
          <p>Поситите главную страницу, возможно вы ее найдете</p>
          <Link to={'/'}>На главную</Link>
        </div>
      </div>
    </div>
  )
}
