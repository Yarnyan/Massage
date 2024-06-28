import React from 'react'
import styles from './Advantages.module.scss'
import { advantageData } from './data/data'
import Card from './Card'
export default function Advantages() {
  return (
    <div className={styles.advantages}>
        <div className={styles.container}>
            <p className={styles.advantagesSubtile}>Почему вам у нас понравится?</p>
            <div className={styles.cards}>
                {advantageData.map((item) => {
                    return <Card title={item.title} icon={item.icon} key={item.id}/>
                })}
            </div>
            <p>*Индивидуальный подход к каждому! Позволь себе расслабиться душой и телом, доставим невероятное удовольствие, которое нужно попробовать</p>
        </div>
    </div>
  )
}
