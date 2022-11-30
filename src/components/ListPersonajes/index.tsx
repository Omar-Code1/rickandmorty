import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Pagination } from '@mui/material';
import { Apidata } from '../../types/types';
import { Personajes } from '../Card';
import { consumirApi } from '../../api/consumirApi';
import { CardsSkeleton } from '../CardSckeleton';
import { useNotification } from '../../context/Notification.context';

interface Props {
  nombrePersonaje: string;
  reinicio: boolean;
  changePage: (value: number) => void;
  page: number;
  handleReiniciar: () => void;
}

export const PintarDatos: React.FC<Props> = ({
  nombrePersonaje,
  reinicio,
  changePage,
  page,
  handleReiniciar,
}) => {
  const [personajes, setPersonajes] = useState<Apidata['results']>([]);
  const [pages, setPages] = useState<number>();
  const [loading, setLoading] = useState(false);
  const { getError } = useNotification();

  useEffect(() => {
    setLoading(true);
    consumirApi
      .getAll(page, nombrePersonaje)
      .then((data: Apidata) => {
        setPersonajes(data.results);
        setPages(data.info.pages);
      })
      .catch((e) => {
        getError(`No se encuentra el personaje ${nombrePersonaje}`);
        handleReiniciar();
      })
      .finally(() => setTimeout(() => setLoading(false), 1000));
  }, [nombrePersonaje, reinicio, page]);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    changePage(value);
  };

  const numberOfSkeletons = [];

  for (let i = 0; i < 12; i++) {
    numberOfSkeletons.push(i);
  }

  return (
    <>
      {loading ? (
        <Grid sx={{ my: 2 }} container spacing={4}>
          {numberOfSkeletons.map((i) => (
            <Grid key={i} xs={12} sm={6} md={4} lg={3}>
              <CardsSkeleton />
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <Grid sx={{ my: 2 }} container spacing={4}>
            {personajes?.map((personaje) => (
              <Grid key={personaje.id} xs={12} sm={6} md={4} lg={3}>
                <Personajes personaje={personaje} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Pagination
              count={pages}
              page={page}
              onChange={handleChange}
            ></Pagination>
          </Box>
        </>
      )}
    </>
  );
};
