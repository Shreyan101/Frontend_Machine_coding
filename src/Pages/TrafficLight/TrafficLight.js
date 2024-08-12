import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
  const [light, setLight] = useState('red');

  useEffect(() => {
    const switchLight = () => {
      if (light === 'red') {
        setTimeout(() => setLight('green'), 4000);
      } else if (light === 'green') {
        setTimeout(() => setLight('yellow'), 3000);
      } else if (light === 'yellow') {
        setTimeout(() => setLight('red'), 500);
      }
    };

    switchLight();
  }, [light]);

  return (
    <div className='paren-box'>
      <div className='traffic-light'>
        <div className={`light red ${light === 'red' ? 'active' : ''}`}></div>
        <div
          className={`light yellow ${light === 'yellow' ? 'active' : ''}`}
        ></div>
        <div
          className={`light green ${light === 'green' ? 'active' : ''}`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
