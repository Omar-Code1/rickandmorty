import React, { useState } from 'react';
import Form from './componets/Form';
import PintarDatos from './componets/PintarDatos';

const App = () => {
  const [nombrePersonaje, setNombrePersonaje] = useState('');

  const handleScroll = (event) => {
    console.log('scrollTop: ', event.currentTarget.scrollTop);
    console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    if (('scrollTop: ', event.currentTarget.scrollTop > 100)) {
    }
  };

  return (
    <div onScroll={handleScroll} className="container">
      <h1>App Rick and Morty</h1>
      <Form setNombrePersonaje={setNombrePersonaje} />
      <PintarDatos
        nombrePersonaje={nombrePersonaje}
        setNombrePersonaje={setNombrePersonaje}
      />
    </div>
  );
};

export default App;
