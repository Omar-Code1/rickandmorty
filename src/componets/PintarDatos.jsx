import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Loading from './Loading';
import Personajes from './Personajes';

const PintarDatos = ({ nombrePersonaje, reinicio }) => {
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `https://rickandmortyapi.com/api/character`;

  useEffect(() => {
    consumirApi(url, nombrePersonaje);
  }, [nombrePersonaje, reinicio]);

  const consumirApi = async (url, nombre) => {
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

      const datos = await res.json();
      setPersonajes(datos.results);
      setInfo(datos.info);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePagination = (e) => {
    if (e.target.textContent === 'Next') {
      consumirApi(info.next);
    }
    if (e.target.textContent === 'Prev') {
      consumirApi(info.prev);
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
