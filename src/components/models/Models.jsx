import React, { useState, useEffect } from 'react';
import styles from './Models.module.scss';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Model from './model/Model';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
export default function Models({ isLoading, error, text }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [hasMounted, setHasMounted] = useState(false);
    const models = useSelector((state) => state.models.models);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuOpen]);

    return (
        <div className={styles.models} id="models">
            <div className={styles.container}>
                {text ? <p className={styles.modelsSubtitle}>Модели</p> : ''}
                {text ? <div className={styles.selection}>
                    <p>Выбор модели для комфортного визита</p>
                    <p>Мы заботимся об актуальности расписания работы моделей и достоверностью фотографий, чтобы визит в студию был максимально комфортным.</p>
                </div> : ''}
                <div className={styles.filter} onClick={() => setMenuOpen(!menuOpen)}>
                    <p>Фильтр</p>
                    <FilterAltIcon fontSize='medium' />
                </div>
                <div className={styles.modelsContainer}>
                    {/* {isLoading ? (
                        <p>Загрузка...</p>
                    ) : error ? (
                        <p>Ошибка загрузки данных</p>
                    ) : (
                        models.map(model => (
                            <Model key={model.girl_id} model={model} />
                        ))
                    )} */}
                    <Model />
                    <Model />
                    <Model />
                </div>
            </div>
            {menuOpen &&
                <div className={`${styles.filterMenu} ${menuOpen ? styles.open : styles.close}`}>
                    <div className={styles.filterMenuLinks}>
                        <div className={styles.closeBtn} onClick={() => setMenuOpen(!menuOpen)}>
                            <CloseIcon fontSize='large' />
                        </div>
                        <div className={styles.filterMenuLink}>
                            <p>Район</p>
                            <div className={styles.filterBtn}>
                                <button>Центральный</button>
                                <button>Восточный</button>
                                <button>Калининский</button>
                                <button>Ленинский</button>
                            </div>
                        </div>
                        <div className={styles.filterMenuLink}>
                            <p>Цена</p>
                            <div className={styles.filterBtn}>
                                <button>Дешевая</button>
                                <button>2000-2500</button>
                                <button>3000-4000</button>
                                <button>Элитные</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
