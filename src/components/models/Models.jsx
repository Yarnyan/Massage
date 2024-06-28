import React, { useState, useEffect } from 'react'
import styles from './Models.module.scss'
import { models } from './data/data'
export default function Models() {
    const [selectedModel, setSelectedModel] = useState(null);
    const [activeModel, setActiveModel] = useState(null);

    useEffect(() => {
        setSelectedModel(models[0]);
        setActiveModel(models[0].id);
    }, []);

    const handleModelSelect = (id) => {
        const selectedModel = models.find((model) => model.id === id);
        setSelectedModel(selectedModel);
        setActiveModel(id);
    };

    return (
        <div className={styles.models}>
            <div className={styles.container}>
                <p className={styles.modelsSubtile}>Модели</p>
                <div className={styles.selection}>
                    <p>Выбор модели для комфортного визита</p>
                    <p>Мы заботимся об актуальности расписания работы моделей и достоверностью фотографий — чтобы визит в студию был максимально комфортным.</p>
                </div>
                <div className={styles.buttons}>
                    {models.map((model) => (
                        <button
                            key={model.id}
                            onClick={() => handleModelSelect(model.id)}
                            className={model.id === activeModel ? styles.active : ''}
                        >
                            {model.id === 1 ? 'Алиса' : model.id === 2 ? 'Милана' : 'Алиса и Милана'}
                        </button>
                    ))}
                </div>
                {selectedModel && (
                    <div className={styles.aboutMe}>
                        <div className={styles.data}>
                            <p>Мои данные</p>
                            <div className={styles.table}>
                                <div className={styles.pillar1}>
                                    {selectedModel.age !== null && (
                                        <p>Возраст: <span>{selectedModel.age} года</span></p>
                                    )}
                                    <p>Вес <span>{selectedModel.weight}</span></p>
                                    <p>Рост <span>{selectedModel.upsurge} см</span></p>
                                    <p>Грудь <span>{selectedModel.bosom} размер</span></p>
                                </div>
                                <div className={styles.pillar2}>
                                    <p>Волосы <span>{selectedModel.hair}</span></p>
                                    <p>Внешность <span>{selectedModel.appearance}</span></p>
                                    <p>Фигура <span>{selectedModel.figure}</span></p>
                                    <p>Ориентация <span>{selectedModel.Orientation}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tariffs}>
                            <p>Мои тарифы</p>
                            <div className={styles.table}>
                                <div className={styles.pillar1}>
                                    <span>Апартаменты:</span>
                                    <p>1 час - <span>{selectedModel.hour} рублей</span></p>
                                    <p>2 часа - <span>{selectedModel.hour * 2} рублей</span></p>
                                    <p>Ночь - <span>{selectedModel.night || '—'}</span></p>
                                </div>
                                <div className={styles.pillar2}>
                                    <span>Выезд:</span>
                                    <p>1 час - <span>{selectedModel.hour || '—'}</span></p>
                                    <p>2 часа - <span>{selectedModel.hour * 2 || '—'}</span></p>
                                    <p>Ночь - <span>{selectedModel.night || '—'}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {selectedModel && selectedModel.conditions !== null && (
                    <div className={styles.conditions}>
                        <p>Мои условия</p>
                        <p><span>Ограничение контактов в час: </span>{selectedModel.conditions}</p>
                    </div>
                )}
                {selectedModel && selectedModel.about !== null && (
                    <div className={styles.aboutInfo}>
                        <p>О себе</p>
                        <p>{selectedModel.about}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
