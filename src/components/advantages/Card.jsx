import React from 'react'
import styles from './Advantages.module.scss'
export default function Card({title, icon}) {
  return (
    <div className={styles.card}>
        <img src={icon} alt="" />
        <p>{title}</p>
    </div>
  )
}
