import React, { useState } from 'react';

export const Saludo= () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input 
        type="text" 
        placeholder="Ingrese su nombre" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hola {name}</h2>
    </div>
  );
};