import React, {useState, useEffect} from 'react'
import styles from './Liaison.module.scss'
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Entry from '../modal/Entry/Entry';
import { MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCreateLeadMutation } from '../../store/reducers/leads/leads.actions';

const schema = yup.object().shape({
    // name: yup.string().required(),
    phone_number: yup.string().required(),
    girl_id: yup.string().required(),
    agree: yup.bool().oneOf([true], 'Вы должны согласиться с условиями политики конфиденциальности')
});

export default function Liaison() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    // TODO: Заявка хуево отправляется
    const [createLead, {isLoading, isSuccess}] = useCreateLeadMutation();

    const onSubmit = async (data) => {
        setIsModalOpen(true)
        console.log(data)
        data.display_name = "123"
        data.girl_id = data.girl_id ? data.girl_id > 0 : null
        data.user_agent = window.navigator.userAgent;
        await createLead(data);
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
                                render={({ field }) => <input placeholder="+79008007060" {...field} />}
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
                                    <Select {...field} className={styles.input}>
                                        <MenuItem value={0}>Не имеет значения</MenuItem>
                                        <MenuItem value={7}>Милана</MenuItem>
                                        <MenuItem value={2}>Алиса</MenuItem>
                                        <MenuItem value={3}>Милана и Алиса</MenuItem>
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
                            <button type='submit'>Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
            {isModalOpen && <Entry closeModal={() => setIsModalOpen(false)} />}
        </div>
    )
}
