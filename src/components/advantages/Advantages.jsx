import React, { useState } from 'react';
import styles from './Advantages.module.scss';
import { advantageData } from './data/data';
import Card from './Card';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function Advantages() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const visibleCards = showMore || window.innerWidth >= 600 ? advantageData : advantageData.slice(0, 2);

  return (
    <div className={styles.advantages} id="advantages">
      <div className={styles.container}>
        <p className={styles.advantagesSubtile}>Почему вам у нас понравится?</p>
        <div className={styles.cardsContainer}>
          <div className={styles.cards}>
            {visibleCards.map((item) => (
              <Card title={item.title} icon={item.icon} key={item.id} dark={item.dark}/>
            ))}
          </div>
          {!showMore && window.innerWidth < 600 && (
            <div className={styles.containerBtn}>
                <ArrowDownwardIcon />
            </div>
          )}
        </div>
        <p className={styles.ss}>*Индивидуальный подход к каждому! Позволь себе расслабиться душой и телом, доставим невероятное удовольствие, которое нужно попробовать</p>
      </div>
    </div>
  );
}
