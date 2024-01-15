import React, { useEffect, useState } from 'react';
import styles from './Timer.module.scss';

const Timer = ({ isRunning }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(time => time + 3);  
      }, 1);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (60 * 60 * 1000));
    const minutes = Math.floor((milliseconds % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);
    const remainingMilliseconds = milliseconds % 1000;

    const padZero = (num) => (num < 10 ? `0${num}` : num);

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${remainingMilliseconds}`;
  };

  return (
    <div className={styles.container}>
      <h2>{formatTime(time)}</h2>
    </div>
  );
};

export default Timer;