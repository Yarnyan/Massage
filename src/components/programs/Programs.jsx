import React, { useState, useEffect, useRef } from 'react'
import styles from './Programs.module.scss'
import Program from './program/Program'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { programData } from './data/data';
import ProgramModal from '../modal/Program/ProgramModal'
export default function Programs() {
  const containerRef = useRef(null);
  const [showModal, setShowModal] = useState(false)
  const handleDetailsClick = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showModal]);

  const pagination = {
    el: ".containerForBullets",
    clickable: true,
  };
  return (
    <div className={styles.program} id="programs">
      <div className={styles.container}>
        <p className={styles.programSubtitle}>Программы</p>
        <p>Программы эротического массажа</p>
        <p>Множество вариантов эротического массажа для мужчин в Тюмени – выберите тот, что доставит максимальное удовольствие.</p>
        <div className={styles.programsContainer} ref={containerRef}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={pagination}
            spaceBetween={50}
            slidesPerView="auto"
            className={styles.swiper}
          >
            {programData.map((item) => {
              return (
                <SwiperSlide className={styles.swiperSlide} key={item.id}>
                  <Program image={item.image} description={item.description} type={item.type} time={item.time} price={item.price} openModal={handleDetailsClick} />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className="containerForBullets"></div>
        </div>
      </div>
      {showModal && <ProgramModal closeModal={handleCloseModal} />}
    </div>
  )
}
