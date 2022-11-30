import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Form, PintarDatos } from '../../components';

const HomePage: React.FC = () => {
  const [nombrePersonaje, setNombrePersonaje] = useState('');
  const [reinicio, setReinicio] = useState(false);
  const [page, setPage] = useState(1);

  const handleReiniciar = () => {
    setPage(1);
    setNombrePersonaje('');
    setReinicio(!reinicio);
  };

  const changenombrePersonaje = (value: string) => {
    setNombrePersonaje(value);
  };
  const changePage = (value: number) => {
    setPage(value);
  };

  return (
    <Container sx={{ my: 2 }} maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        App Rick And Morty
      </Typography>
      <Form
        changenombrePersonaje={changenombrePersonaje}
        handleReiniciar={handleReiniciar}
        changePage={changePage}
      />
      <PintarDatos
        nombrePersonaje={nombrePersonaje}
        reinicio={reinicio}
        handleReiniciar={handleReiniciar}
        changePage={changePage}
        page={page}
      />
    </Container>
  );
};

export default HomePage;
