import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.scss';

export default function ErrorBase({ code }) {
  const errorConfig = {
    "404": {
      errorMessage: "oops! КАЖЕТСЯ ЭТА СТРАНИЦА ПУСТАЯ",
      errorDesc: "",
      errorButton: <Link to={'/'}>На главную</Link>,
    },
    "403": {
      errorMessage: "Вы были заблокированы",
      errorDesc: "Вы можете уточнить причину, написав нашему администратору",
      errorButton: <Link to={'/'}>Связаться</Link>,
    },
    "500": {
      errorMessage: "Возникла ошибка сервера, зайдите позже.",
      errorDesc: "",
      errorButton: null,
    },
    default: {
      errorMessage: "Неизвестная ошибка",
      errorDesc: "Посетите главную страницу, возможно вы её найдёте",
      errorButton: <Link to={'/'}>На главную</Link>,
    }
  };

  const { errorMessage, errorDesc, errorButton } = errorConfig[code] || errorConfig.default;

  return (
    <div className={styles.error}>
      <div className={styles.overlay}></div>
      <div className={styles.body}>
        <div className={styles.errorBody}>
          <p className={styles.firstP}>{code[0]}</p>
          <img src="/image/errorImage.webp" alt="error image" />
          <p className={styles.secondP}>{code[2]}</p>
        </div>
        <div className={styles.text}>
          <p>{errorMessage}</p>
          <p>{errorDesc}</p>
          {errorButton}
        </div>
      </div>
    </div>
  );
}
