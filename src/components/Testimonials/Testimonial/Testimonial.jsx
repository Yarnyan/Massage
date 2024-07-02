import React from 'react'
import Avatar from '@mui/material/Avatar';
import styles from './Testimonial.module.scss'
export default function testimonial() {
  return (
    <div className={styles.testimonial}>
        <div className={styles.testimonialHeader}>
            <Avatar className={styles.avatar}/>
            <p>Николай</p>
        </div>
        <div className={styles.testimonialMaster}>
            <p>мастер: Милана</p>
        </div>
        <div className={styles.testimonialText}>
            <p>Очень красивая и тёплая студия, все чисто.Отдохнул хорошо, спасибо Милане.Обязательно приду ещё раз.</p>
        </div>
    </div>
  )
}
