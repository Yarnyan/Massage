import React from 'react'
import styles from './Banners.module.scss'
import Banner from './banner/Banner'
export default function Banners() {
    const data = [
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5eLf0LT9XIjXGQRWYIil8UTD6GMKeADfdA&s',
        },
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5eLf0LT9XIjXGQRWYIil8UTD6GMKeADfdA&s',
        },
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5eLf0LT9XIjXGQRWYIil8UTD6GMKeADfdA&s',
        },
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5eLf0LT9XIjXGQRWYIil8UTD6GMKeADfdA&s',
        },
        {
            id: 1,
            img: 'https://d3br4o8fwubvai.cloudfront.net/uploads/banner/image/7/thumb_w450_banner-image-7-1708622731.webp',
        },
    ]
  return (
    <div className={styles.banners}>
        <div className={styles.container}>
            <div className={styles.bannersContainer}>
                {data.map((item) => {
                    return (
                        <Banner img={item.img} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}
