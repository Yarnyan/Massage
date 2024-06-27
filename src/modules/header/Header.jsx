import React from 'react'
import styles from './Header.module.scss'
export default function Header() {
    
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39GYQMHoEremuoU0-YwZsQVG2cKneeARLvw&s" alt="" />
            </div>
            <div className={styles.nav}>
                <ul>
                    <li>
                        <a href="">О девочках</a>
                    </li>
                    <li>
                        <a href="">Запись</a>
                    </li>
                    <li>
                        <a href="">Что то еще</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
