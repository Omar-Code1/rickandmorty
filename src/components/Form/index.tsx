import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useFormulario } from '../../hooks/useFormulario';
import { useNotification } from '../../context/Notification.context';

interface Props {
  changenombrePersonaje: (value: string) => void;
  handleReiniciar: () => void;
  changePage: (value: number) => void;
}

export const Form: React.FC<Props> = ({
  changenombrePersonaje,
  handleReiniciar,
  changePage,
}) => {
  const { inputs, handleChange, reset } = useFormulario({
    nombre: '',
  });

  let { nombre } = inputs;

  const { getError } = useNotification();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nombre.trim()) {
      getError('No deje el nombre vacio');
    }
    changenombrePersonaje(nombre.trim().toLowerCase());
    changePage(1);
    reset();
  };
  return (
    <Box>
      <Box
        component="form"
        mb={2}
        onSubmit={handleSubmit}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <TextField
          size="small"
          value={nombre}
          onChange={handleChange}
          name="nombre"
          label="Ingrese Nombre"
          variant="outlined"
        />
        <Button sx={{ ml: 2 }} variant="contained" type="submit">
          Buscar
        </Button>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          handleReiniciar();
          reset();
        }}
      >
        Reiniciar
      </Button>
    </Box>
  );
};
