import React, {useState, useEffect} from 'react'
import styles from './Liaison.module.scss'
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Entry from '../modal/Entry/Entry';
import { MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    master: yup.string().required(),
    agree: yup.bool().oneOf([true], 'Вы должны согласиться с условиями политики конфиденциальности')
});

export default function Liaison() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        setIsModalOpen(true)
        console.log(data)
    };

    useEffect(() => {
        if (isModalOpen) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
      }, [isModalOpen]);

    return (
        <div className={styles.liaison}>
            <div className={styles.container}>
                <div className={styles.bodyLiaison}>
                    <div className={styles.title}>
                        <p>Запишись прямо сейчас!</p>
                        <p>Мы свяжемся с тобой в течение 29 секунд и закажем до нас такси бесплатно.</p>
                        <div>
                            <img src="/image/reg.png" alt="" />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} id='liaison'>
                        <div className={styles.inputField}>
                            <p>Имя</p>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} />}
                            />
                            <p className={styles.error}>{errors.name && "Имя обязательно"}</p>
                        </div>
                        <div className={styles.inputField}>
                            <p>Телефон</p>
                            <Controller
                                name="phone"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} />}
                            />
                            <p className={styles.error}>{errors.phone && "Телефон обязателен"}</p>
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
                                <p>Выражаю согласие с условиями политики конфиденциальности</p>
                            </div>
                            <div>
                                <p className={styles.error}>{errors.agree && errors.agree.message}</p>
                            </div>
                        </div>
                        <div className={styles.buttonField}>
                            <button type='submit'>Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
            {isModalOpen && <Entry closeModal={() => setIsModalOpen(false)} />}
        </div>
    )
}
