import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Apidata } from '../types/types';
import Loading from './Loading';
import Personajes from './Personajes';

interface Props {
  nombrePersonaje: string;
  reinicio: boolean;
}

const PintarDatos = ({ nombrePersonaje, reinicio }: Props) => {
  const [personajes, setPersonajes] = useState<Apidata['results']>([]);
  const [info, setInfo] = useState<Apidata['info']>();
  const [loading, setLoading] = useState(false);

  const url = `https://rickandmortyapi.com/api/character`;

  useEffect(() => {
    consumirApi(url, nombrePersonaje);
  }, [nombrePersonaje, reinicio]);

  const consumirApi = async (url?: string, nombre?: string) => {
    setLoading(true);
    try {
      const res = await fetch(url + `${nombre ? `/?name=${nombre}` : ''}`);
      if (!res.ok) {
        return Swal.fire({
          title: 'Error!',
          text: 'Personaje No Encontrado',
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      }

      const datos: Apidata = await res.json();
      console.log(datos);
      setPersonajes(datos.results);
      setInfo(datos.info);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePagination = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.textContent === 'Next') {
      consumirApi(info?.next);
    }
    if (e.currentTarget.textContent === 'Prev') {
      consumirApi(info?.prev);
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="row">
        {personajes.map((item) => (
          <Personajes key={item.id} personaje={item} />
        ))}
      </div>
      <nav className="d-flex justify-content-center mt-2">
        <ul className="pagination pagination-lg">
          <li className="page-item">
            <button onClick={handlePagination} className="page-link">
              Prev
            </button>
          </li>
          <li className="page-item">
            <button onClick={handlePagination} className="page-link">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PintarDatos;
