import React, { useState } from 'react';
import Form from './componets/Form';
import PintarDatos from './componets/PintarDatos';

const App = () => {
  const [nombrePersonaje, setNombrePersonaje] = useState('');

  return (
    <>
      <h1>App Rick and Morty</h1>
      <Form setNombrePersonaje={setNombrePersonaje} />
      <PintarDatos
        nombrePersonaje={nombrePersonaje}
        setNombrePersonaje={setNombrePersonaje}
      />
    </>
  );
};

export default App;
