import React from 'react'
import styles from './Warning.module.scss'
import { Checkbox } from '@mui/material'
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
export default function Warning({ onAccept }) {

  const validateSchema = yup.object().shape({
    agree: yup.bool().oneOf([true], 'Вы должны согласиться с условиями политики конфиденциальности')
  });
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validateSchema)
  });

  const onSubmit = (data) => {
    onAccept();
  };

  return (
    <div className={styles.warning}>
      <div className={styles.warningBackground} />
      <div className={styles.warningContainer}>
        <h1>18+</h1>
        <p>Сайт предназначен для взрослых</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.checkBox}>
            <div className={styles.gg}>
              <Controller
                name="agree"
                control={control}
                defaultValue={false}
                render={({ field }) => <Checkbox {...field} />}
              />
            </div>
            <p>Подтверждаю свое совершеннолетие и выражаю согласие <span>с условиями оферты и политикой конфиденциальности. </span></p>
          </div>
          {errors.agree && <p className={styles.error}>{errors.agree.message}</p>}
          <button type="submit">Перейти на сайт</button>
        </form>
      </div>
    </div>
  )
}