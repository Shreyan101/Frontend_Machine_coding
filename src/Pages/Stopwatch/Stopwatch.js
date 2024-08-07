import React, { useEffect, useRef, useState } from 'react';
import './stopwatch.css';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elaspedTime, setElaspedTime] = useState(0);
  let intervalIdRef = useRef(null);
  let startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElaspedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elaspedTime;
  };
  const reset = () => {
    setElaspedTime(0);
    setIsRunning(false);
  };
  const stop = () => {
    setIsRunning(false);
  };
  const display = () => {
    let hours = Math.floor(elaspedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elaspedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elaspedTime / 1000) % 60);
    let miliSeconds = Math.floor((elaspedTime % 1000) / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    miliSeconds = String(miliSeconds).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}:${miliSeconds}`;
  };
  return (
    <div className='containerStopWatch'>
      <div className='display'>
        <h2 className='showtime'>{display()}</h2>
        <div className='buttons'>
          <button className='start' onClick={() => start()}>
            Start
          </button>
          <button className='stop' onClick={() => stop()}>
            Stop
          </button>
          <button className='reset' onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
