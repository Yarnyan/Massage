import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Loader.module.scss'
export default function Loader() {
    return (
        <div className={styles.container}>
            <CircularProgress sx={{color: '#C30000', width: '100px', height: '100px'}}/>
        </div>
    )
}
