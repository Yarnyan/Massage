import React from 'react'
import Avatar from '@mui/material/Avatar';
import styles from './Testimonial.module.scss'
import PersonIcon from '@mui/icons-material/Person';
export default function testimonial() {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialHeader}>
        <Avatar className={styles.avatar} sx={{width: '50px', height: '50px'}}/> 
        <div className={styles.testimonialMaster}>
          <p>Николай</p>
          <p>мастер: Милана</p>
        </div>
      </div>
      <div className={styles.testimonialText}>
        <p>Был 08.01. 24. Вначале встретила милая помощница администратора Лера и сопроводила меня до мастера Саманты. Саманта же меня окунула в мир блаженства и ласки. Мне все очень сильно понравилось и отношение помощника администратора и сам мастер. Приду к вам ещё!</p>
      </div>
    </div>
  )
}
