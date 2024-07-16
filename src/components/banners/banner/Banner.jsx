import React from 'react'
import styles from './Banner.module.scss'
export default function Banner({img}) {
  return (
    <div className={styles.banner}>
        <a href="">
            <img src={img} alt="" />
        </a>
    </div>
  )
}
