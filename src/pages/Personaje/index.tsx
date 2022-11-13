import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { consumirApi } from '../../api/consumirApi';
import { LoadingTsx } from '../../components';
import { Personaje } from '../../types/types';

const PersonajePage: React.FC = () => {
  const { id } = useParams();
  const [personaje, SetPersonaje] = useState<Personaje>();

  useEffect(() => {
    consumirApi
      .getById(id)
      .then((res) => res.json())
      .then((data: Personaje) => SetPersonaje(data));
  }, [id]);

  return !personaje ? (
    <LoadingTsx />
  ) : (
    <Grid container spacing={8} sx={{ p: 3 }}>
      {/* Info */}
      <Grid item xs={12} lg={6}>
        <Typography mb={2} variant="h1" align="center">
          {personaje?.name}
        </Typography>
        <Divider />
        <Box mt={2}>
          {personaje?.gender === 'Male' ? (
            <Typography
              align="center"
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 500, color: '#9b9b9e' }}
            >
              Gender{' '}
              <Typography align="center" gutterBottom sx={{ color: '#1c2efc' }}>
                {personaje?.gender}
              </Typography>
            </Typography>
          ) : (
            <Typography
              align="center"
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 500, color: '#9b9b9e' }}
            >
              Gender{' '}
              <Typography align="center" gutterBottom sx={{ color: '#fc1cf5' }}>
                {personaje?.gender}
              </Typography>
            </Typography>
          )}
          {personaje?.status === 'Alive' ? (
            <Typography
              align="center"
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 500, color: '#9b9b9e' }}
            >
              Status{' '}
              <Typography align="center" gutterBottom sx={{ color: '#4caf50' }}>
                {personaje?.status}
              </Typography>
            </Typography>
          ) : personaje?.status === 'Dead' ? (
            <Typography
              align="center"
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 500, color: '#9b9b9e' }}
            >
              Status{' '}
              <Typography align="center" gutterBottom sx={{ color: '#d50000' }}>
                {personaje?.status}
              </Typography>
            </Typography>
          ) : (
            <Typography
              align="center"
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 500, color: '#9b9b9e' }}
            >
              Status{' '}
              <Typography align="center" gutterBottom sx={{ color: '#fff' }}>
                {personaje?.status}
              </Typography>
            </Typography>
          )}
          <Typography
            align="center"
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 500, color: '#9b9b9e' }}
          >
            Species{' '}
            <Typography align="center" gutterBottom sx={{ color: '#fff' }}>
              {personaje?.species}
            </Typography>
          </Typography>

          <Typography
            align="center"
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 500, color: '#9b9b9e' }}
          >
            Type{' '}
            <Typography align="center" gutterBottom sx={{ color: '#fff' }}>
              {personaje!.type === '' ? 'Undefined' : `${personaje?.type}`}
            </Typography>
          </Typography>

          <Typography
            align="center"
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 500, color: '#9b9b9e' }}
          >
            Origin{' '}
            <Typography align="center" gutterBottom sx={{ color: '#fff' }}>
              {personaje?.origin.name}
            </Typography>
          </Typography>
          <Typography
            align="center"
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 500, color: '#9b9b9e' }}
          >
            Location Actual{' '}
            <Typography align="center" gutterBottom sx={{ color: '#fff' }}>
              {personaje?.location.name}
            </Typography>
          </Typography>
        </Box>
      </Grid>
      {/* Img */}
      <Grid
        item
        sx={{ display: 'flex', justifyContent: 'center' }}
        xs={12}
        lg={6}
      >
        <img src={personaje?.image} alt={`Imagen de ${personaje?.name}`} />
      </Grid>
    </Grid>
  );
};

export default PersonajePage;
