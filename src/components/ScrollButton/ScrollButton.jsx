import React, { useState, useEffect } from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link } from 'react-router-dom';

const ScrollButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="button-container">
      {showScrollButton && (
        <a className="scroll-button" href='#header'>
          <ArrowUpwardIcon />
        </a>
      )}
      <Link to={"https://t.me/asdasdasd"} target='_blank' className="fixed-button">
        <TelegramIcon fontSize='medium' />
      </Link>
    </div>
  );
};

export default ScrollButton;
