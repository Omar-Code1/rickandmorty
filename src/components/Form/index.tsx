import Swal from 'sweetalert2';
import { Box, Button, TextField } from '@mui/material';
import { useFormulario } from '../../hooks/useFormulario';
import React from 'react';

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nombre.trim()) {
      return Swal.fire({
        title: 'Error!',
        text: 'No deje el nombre vacio',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
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
