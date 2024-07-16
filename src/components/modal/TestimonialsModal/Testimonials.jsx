import React, { useState } from 'react';
import styles from './Testimonials.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

export default function TestimonialsModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const schema = yup.object().shape({
    name: yup.string(),
    description: yup.string().required(),
    master: yup.string().required(),
    agree: yup.bool().oneOf([true], 'Вы должны согласиться с условиями политики конфиденциальности')
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    setIsFormSubmitted(true);
    console.log(data);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </button>
        {isFormSubmitted ? (
          <div className={styles.successMessage}>
            <p>Заявка отправлена на модерацию</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputField}>
              <p>Имя</p>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => <input placeholder="Инкогнито" {...field} />}
              />
              <p className={styles.error}>{errors.name && "Имя обязательно"}</p>
            </div>
            <div className={styles.inputField}>
              <p>Отзыв</p>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    placeholder="Все понравилось"
                    {...field}
                    className={styles.input}
                    rows={5}
                  />
                )}
              />
              <div>
                <p className={styles.error}>{errors.description && "Отзыв обязателен"}</p>
              </div>
            </div>
            <div className={styles.inputField}>
              <p>Выбор мастера</p>
              <Controller
                name="master"
                control={control}
                defaultValue="Милана"
                render={({ field }) => (
                  <Select {...field} className={styles.input}>
                    <MenuItem value="Милана">Милана</MenuItem>
                    <MenuItem value="Алиса">Алиса</MenuItem>
                    <MenuItem value="Милана и Алиса">Милана и Алиса</MenuItem>
                  </Select>
                )}
              />
              <p className={styles.error}>{errors.master && "Выбор мастера обязателен"}</p>
            </div>
            <div className={styles.checkField}>
              <div className={styles.gg}>
                <Controller
                  name="agree"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => <Checkbox {...field} />}
                />
                <p>Выражаю согласие с условиями политики конфиденциальности</p>
              </div>
              <div>
                <p className={styles.error}>{errors.agree && errors.agree.message}</p>
              </div>
            </div>
            <div className={styles.buttonField}>
              <button type='submit'>Отправить</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}