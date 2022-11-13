import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Box,
  Card,
  CardContent,
  Pagination,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { Apidata } from '../../types/types';
import { Personajes } from '../Card';
import { LoadingTsx } from '../Loading';
import { consumirApi } from '../../api/consumirApi';
import { useNotification } from '../../context/Notification.context';
import { CardsSkeleton } from '../CardSckeleton';

interface Props {
  nombrePersonaje: string;
  reinicio: boolean;
  changePage: (value: number) => void;
  page: number;
}

export const PintarDatos: React.FC<Props> = ({
  nombrePersonaje,
  reinicio,
  changePage,
  page,
}) => {
  const [personajes, setPersonajes] = useState<Apidata['results']>([]);
  const [pages, setPages] = useState<number>();
  const [loading, setLoading] = useState(false);
  const { getError } = useNotification();

  useEffect(() => {
    consumirApi
      .getAll(page, nombrePersonaje)
      .then((res) => {
        if (!res.ok) {
          return getError(`No se encuentra el personaje ${nombrePersonaje}`);
        }
        return res.json();
      })
      .then((data: Apidata) => {
        setLoading(true);
        setPersonajes(data.results);
        setPages(data.info.pages);
      })
      .catch((e) => console.log(e))
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
