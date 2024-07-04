import React, {useState} from 'react'
import styles from './Program.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addProgram } from '../../../store/slice/program'
export default function Program({image, description, time, price, type, openModal}) {
    const program = useSelector((state) => state.program.programs)
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
        const program = {
          image: image,
          description: description,
          time: time,
          price: price,
          type: type,
        }
        dispatch(addProgram(program))
        openModal()
      }
    console.log(program)

    return (
        <div className={styles.program}>
            <img src={image} alt="" />
            <div className={styles.about}>
                <div className={styles.programName}>
                    <p>
                        Программа
                    </p>
                    <p>
                        {type}
                    </p>
                </div>
                <div className={styles.programTime}>
                    <p>
                        Длительность:
                    </p>
                    <p>
                        {time} мин
                    </p>
                </div>
                <div className={styles.programPrice}>
                    <p>
                        Стоимость
                    </p>
                    <p>
                        {price} руб.
                    </p>
                </div>
            </div>
            <div className={styles.aboutContainer}>
                <p className={styles.aboutProgram}>{description}</p>
                <div className={styles.buttons}>
                    <a href='#liaison'>Записаться</a>
                    <button onClick={handleSubmit}>Подробно</button>
                </div>
            </div>
        </div>
    )
}
