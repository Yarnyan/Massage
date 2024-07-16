import React, { useState, useEffect } from 'react'
import styles from './Liaison.module.scss'
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Entry from '../modal/Entry/Entry';
import { MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import { useCreateLeadMutation } from '../../store/reducers/leads/leads.actions';
import { useSelector, useDispatch } from 'react-redux';
import { chooseModel } from '../../store/reducers/models/models.slice';

const schema = yup.object().shape({
    // name: yup.string().required(),
    phone_number: yup.string().required(),
    girl_id: yup.string().required(),
    agree: yup.bool().oneOf([true], 'Вы должны согласиться с условиями политики конфиденциальности')
});

export default function Liaison({ error, isLoading }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const dispatch = useDispatch();
    const { models, chosenModel } = useSelector((state) => state.models);
    const [createLead, { isLoading: isLoadingLead, isError: isErrorLead, error: errorLead, isSuccess: isSuccessLead}] = useCreateLeadMutation();

    const handleChange = (event) => {
        const selectedModelId = event.target.value;
        dispatch(chooseModel(selectedModelId));
    };
    console.log(chosenModel)
    const onSubmit = async (data) => {
        setIsModalOpen(true)
        console.log(data)
        if (data.display_name === null || data.display_name.length <= 0) {
            data.display_name = "Инкогнито"
        }
        const girlId = parseInt(data.girl_id)
        data.girl_id = girlId ? girlId > 0 : null
        data.type = "GIRL"
        console.log(data.girl_id)
        data.user_agent = window.navigator.userAgent;
    
        await createLead(data);

        if (isErrorLead) {
            console.log("123", errorLead)
        }

    };

    return (
        <div className={styles.liaison}>
            <div className={styles.container}>
                <div className={styles.bodyLiaison}>
                    <div className={styles.title} id='liaison'>
                        <p>Запишись прямо сейчас!</p>
                        <p>Мы свяжемся с тобой в течение минуты и договоримся о встрече.</p>
                        <div>
                            <img src="/image/reg.webp" alt="" />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <div className={styles.inputField}>
                            <p>Имя</p>
                            <Controller
                                name="display_name"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input placeholder="Инкогнито" {...field} />}
                            />
                            <p className={styles.error}>{errors.name && "Имя обязательно"}</p>
                        </div>
                        <div className={styles.inputField}>
                            <p>Телефон</p>
                            <Controller
                                name="phone_number"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <InputMask mask="+7 (999) 999-99-99" placeholder="+7 (___) ___-__-__" {...field} />}
                            />
                            <p className={styles.error}>{errors.phone_number && "Телефон обязателен"}</p>
                        </div>
                        <div className={styles.inputField}>
                            <p>Выбор мастера</p>
                            <Controller
                                name="girl_id"
                                control={control}
                                defaultValue={0} // Default value should be a valid option value
                                render={({ field }) => (
                                    <Select {...field} className={styles.input} onChange={(event) => {
                                        field.onChange(event);
                                        handleChange(event);
                                    }}>
                                        <MenuItem value={0}>Не имеет значения</MenuItem>
                                        {isLoading ? (
                                            <MenuItem disabled>Загрузка...</MenuItem>
                                        ) : error ? (
                                            <MenuItem disabled>Ошибка загрузки данных</MenuItem>
                                        ) : (
                                            models.map((model) => (
                                                <MenuItem key={model.girl_id} value={model.girl_id}>
                                                    {model.name}
                                                </MenuItem>
                                            ))
                                        )}
                                    </Select>
                                )}
                            />
                            <p className={styles.error}>{errors.girl_id && "Выбор мастера обязателен"}</p>
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
                            {isLoadingLead ? (
                                <button type='submit' disabled>Отправить</button>
                            ) : isSuccessLead ? (<button type='submit'>Успешно отправлена!</button>) : (<button type='submit'>Отправить</button>)}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
