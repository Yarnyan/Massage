import React from 'react';
import styles from './Models.module.scss';

import Model from './model/Model';
import { useSelector } from 'react-redux';

export default function Models({isLoading, error}) {
    const models = useSelector((state) => state.models.models);
    return (
        <div className={styles.models} id="models">
            <div className={styles.container}>
                <p className={styles.modelsSubtitle}>Модели</p>
                <div className={styles.selection}>
                    <p>Выбор модели для комфортного визита</p>
                    <p>Мы заботимся об актуальности расписания работы моделей и достоверностью фотографий, чтобы визит в студию был максимально комфортным.</p>
                </div>
                <div className={styles.modelsContainer}>
                    {isLoading ? (
                        <p>Загрузка...</p>
                    ) : error ? (
                        <p>Ошибка загрузки данных</p>
                    ) : (
                        models.map(model => (
                            <Model key={model.girl_id} model={model} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
