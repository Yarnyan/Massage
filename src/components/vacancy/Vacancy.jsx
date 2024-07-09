import React from 'react'
import styles from './Vacancy.module.scss'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';


export default function Vacancy() {
    const schema = yup.object().shape({
        // name: yup.string().required(),
        phone: yup.string().required(),
        // master: yup.string().required(),
        agree: yup.bool().oneOf([true], 'Вы должны согласиться с условиями политики конфиденциальности')
    });
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        setIsModalOpen(true)
        console.log(data)
    };
    return (
        <div className={styles.Vacancy}>
            <div className={styles.container}>
                <p className={styles.modelsSubtile}>Оставь заявку!</p>
                <div className={styles.selection}>
                    <p>Оплачиваемая стажировка 5 смен. После сдачи экзамена по нашему программному обеспечению и регламенту работы в студии мы трудоустроим тебя на должность менеджера.</p>
                </div>
                <div className={styles.vacancyBody}>
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
                            <p>Телефон</p>
                            <Controller
                                name="phone"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input placeholder="+7 (999) 999-99-99" {...field} />}
                            />
                            <p className={styles.error}>{errors.phone && "Телефон обязателен"}</p>
                        </div>
                        {/* <div className={styles.inputField}>
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
                        </div> */}
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
        </div>
    )
}
