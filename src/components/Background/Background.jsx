import React, { useState } from 'react';

export const Background = () => {
  const [color, setColor] = useState('#fff');

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div style={{ background: color, height: '100vh' }}>
      <button onClick={generateRandomColor}>Color Aleatorio</button>
    </div>
  );
};