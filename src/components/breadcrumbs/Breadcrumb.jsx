import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import styles from './Breadcrumb.module.scss';

export default function Breadcrumb() {
  const currentPath = window.location.pathname;
  const currentPathArray = currentPath.split('/').filter(path => path !== ''); 

  return (
    <div role="presentation" className={styles.container}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link key={0} color="inherit" href="/">
          Проститутки Тюмени 
        </Link>
        {currentPathArray.map((path, index) => (
          <Link key={index + 1} color="inherit" href={`/${currentPathArray.slice(0, index + 1).join('/')}`}>
            {path}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}