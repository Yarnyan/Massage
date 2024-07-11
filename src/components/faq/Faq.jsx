import React, { useState } from 'react';
import styles from './Faq.module.scss';
import { faqData } from './data/faq';

export default function Faq() {
    const [showAll, setShowAll] = useState(false);

    const handleToggleShowAll = () => {
        setShowAll(!showAll);
    };

    const itemsToShow = showAll ? faqData : faqData.slice(0, 2);

    return (
        <div className={styles.faq}>
            <div className={styles.container}>
                <p className={styles.faqSubtitle}>Часто задаваемые вопросы</p>
                <p>Не можете найти ответ, который вы ищете? Обратитесь к нашему администратору</p>
                {itemsToShow.map((item) => (
                    <div className={styles.answer} key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.subtitle}</p>
                    </div>
                ))}
                {!showAll && (
                    <div className={styles.containerBtn}>
                        <button onClick={handleToggleShowAll} className={styles.showAllButton}>
                            Показать все
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
