import React from 'react';
import { useFormulario } from '../hooks/useFormulario';
import Swal from 'sweetalert2';

const Form = ({ setNombrePersonaje }) => {
  const [inputs, handleChange, reset] = useFormulario({
    nombre: '',
  });

  const { nombre } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      return Swal.fire({
        title: 'Error!',
        text: 'No deje el nombre vacio',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
    setNombrePersonaje(nombre.trim().toLowerCase());
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese Nombre"
          value={nombre}
          onChange={handleChange}
          name="nombre"
        />
        <button type="submit" className="btn btn-light text-primary mb-2">
          Buscar
        </button>
      </form>
    </>
  );
};

export default Form;
