import React from 'react';

const Personajes = ({ personaje }) => {
  const { name, species, status, gender, image } = personaje;

  return (
    <div className="col-12 col-md-4 mb-2">
      <div className="card">
        <img src={image} alt={`imagen-${name}`} className="card-img-top" />
        <div className="card-body">
          <p className="fw-bold card-text fs-5">
            Nombre: <span className="fw-normal">{name}</span>
          </p>
          <p className="fw-bold card-text fs-5">
            Especie: <span className="fw-normal">{species}</span>
          </p>
          <p className="fw-bold card-text fs-5">
            Estatus:{' '}
            <span
              className={`fw-normal ${
                status === 'Alive'
                  ? 'text-success'
                  : status === 'Dead'
                  ? 'text-danger'
                  : 'text-secondary'
              }`}
            >
              {status}
            </span>
          </p>
          <p className="fw-bold card-text fs-5">
            Genero: <span className="fw-normal">{gender}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Personajes;
