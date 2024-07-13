import React from 'react'
import Avatar from '@mui/material/Avatar';
import styles from './Testimonial.module.scss'

export default function Testimonial({review}) {
  const maxDescSize = 256;
  let description = review.description 
                ? (review.description.length <= maxDescSize 
                    ? review.description 
                    : review.description.slice(0, maxDescSize) + "...  ")
                : "";
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialHeader}>
        <Avatar className={styles.avatar} sx={{width: '50px', height: '50px'}}/> 
        <div className={styles.testimonialMaster}>
          <p>{review.display_name}</p>
          <p>мастер: {review.girl_name}</p>
        </div>
      </div>
      <div className={styles.testimonialText}>
        <p>{description}</p>
      </div>
    </div>
  )
}
