import React from 'react'
import styles from './Faq.module.scss'
import { faqData } from './data/faq'
export default function Faq() {
    return (
        <div className={styles.faq}>
            <div className={styles.container}>
                <p className={styles.faqSubtitle}>Часто задаваемые вопросы</p>
                <p>Не можете найти ответ, который вы ищете? Обратитесь к нашему администратору</p>
                {faqData.map((item) => {
                    return (
                        <div className={styles.answer} key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.subtitle}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
