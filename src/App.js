import React, { useState } from 'react';
import Timer from './components/Timer/Timer';
import styles from './components/Timer/Timer.module.scss';


const App = () => {

  const [isRunning, setIsRunning] = useState(false);
  const [resetKey, setResetKey] = useState(0); 

  const start= () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setResetKey(prevKey => prevKey + 1);
  };

  return (
    <div className='container'>
      <Timer key={resetKey} isRunning={isRunning} />
      <div>
        <button className={styles.button} onClick={start}>Start</button>
        <button className={styles.button} onClick={stop}>Stop</button>
        <button className={styles.button} onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;