import React, { useState } from 'react';
import Form from './componets/Form';
import PintarDatos from './componets/PintarDatos';

const App = () => {
  const [nombrePersonaje, setNombrePersonaje] = useState('');
  const [reinicio, setReinicio] = useState(false);
  return (
    <div className="container">
      <h1>App Rick and Morty</h1>
      <Form
        setNombrePersonaje={setNombrePersonaje}
        setReinicio={setReinicio}
        reinicio={reinicio}
      />
      <PintarDatos nombrePersonaje={nombrePersonaje} reinicio={reinicio} />
    </div>
  );
};

export default App;
