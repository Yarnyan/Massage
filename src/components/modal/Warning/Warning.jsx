import React from 'react'
import styles from './Warning.module.scss'
import { Checkbox } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Warning({onAccept}) {

  return (
    <div className={styles.warning}>
      <div className={styles.warningBackground} />
      <div className={styles.warningContainer}>
        <h1>18+</h1>
        <p>Сайт предназначен для взрослых</p>
        <div className={styles.checkBox}>
          <div className={styles.gg}>
            <Checkbox />
          </div>
          <p>Подтверждаю свое совершеннолетие и выражаю согласие <span>с условиями оферты и политикой конфиденциальности. </span></p>
        </div>
        <button onClick={onAccept}>Перейти на сайт</button>
      </div>
    </div>
  )
}