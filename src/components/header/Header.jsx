import React from 'react'
import styles from './Header.module.scss'

export default function Header() {
    
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.name}>
                    <p>Алиса</p>
                    <p>и</p>
                    <p>Милана</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.address}>
                        <p>г. Москва</p>
                        <p>ул. Первая д.90</p>
                    </div>
                    <div className={styles.number}>
                        <p>Запись по телефону</p>
                        <p>+ 7 900 858 69 57</p>
                    </div>
                </div>
            </div>

        </div>
    </header>
  )
}
