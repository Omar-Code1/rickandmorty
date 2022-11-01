import { useFormulario } from '../hooks/useFormulario';
import Swal from 'sweetalert2';

interface Props {
  setNombrePersonaje: React.Dispatch<React.SetStateAction<string>>;
  setReinicio: React.Dispatch<React.SetStateAction<boolean>>;
  reinicio: boolean;
}

const Form = ({ setNombrePersonaje, setReinicio, reinicio }: Props) => {
  const { inputs, handleChange, reset } = useFormulario({
    nombre: '',
  });

  const { nombre } = inputs;

  const handleReiniciar = () => {
    setReinicio(!reinicio);
    setNombrePersonaje('');
  };

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
      <button
        onClick={handleReiniciar}
        className="btn btn-primary text-light mb-2"
      >
        Reiniciar
      </button>
    </>
  );
};

export default Form;
