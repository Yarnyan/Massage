import React from 'react'
import styles from './Banners.module.scss'
import Banner from './banner/Banner'
export default function Banners() {
    const data = [
        {
            id: 1,
            img: 'https://d3br4o8fwubvai.cloudfront.net/uploads/banner/image/4/thumb_w450_banner-image-4-1708622731.webp',
        },
        {
            id: 2,
            img: 'https://d3br4o8fwubvai.cloudfront.net/uploads/banner/image/30/thumb_w450_banner-image-30-1708622731.webp',
        },
        {
            id: 3,
            img: 'https://d3br4o8fwubvai.cloudfront.net/uploads/banner/image/3/thumb_w450_banner-image-3-1708622731.webp',
        },
        {
            id: 4,
            img: 'https://d3br4o8fwubvai.cloudfront.net/uploads/banner/image/25/thumb_w450_banner-image-25-1708622731.webp',
        },
        {
            id: 5,
            img: 'https://d3br4o8fwubvai.cloudfront.net/uploads/banner/image/7/thumb_w450_banner-image-7-1708622731.webp',
        },
    ]
  return (
    <div className={styles.banners}>
        <div className={styles.container}>
            <div className={styles.bannersContainer}>
                {data.map((item) => {
                    return (
                        <Banner img={item.img} key={item.id} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}
