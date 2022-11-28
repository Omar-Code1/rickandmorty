import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Personaje } from '../../types/types';

interface Props {
  personaje: Personaje;
}

export const Personajes: React.FC<Props> = ({ personaje }) => {
  const { name, species, status, gender, image, id } = personaje;
  const navigate = useNavigate();

  return (
    <Card sx={{ height: 1 }}>
      <Stack sx={{ height: 1 }}>
        <CardMedia
          component="img"
          image={
            image
              ? image
              : 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
          }
          alt={`imagen-${name}`}
        />
        <CardContent
          sx={{
            height: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              mb: 2,
              height: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" align="center">
              {name}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ my: 2 }}>
            <Typography>Especie: {species}</Typography>
            <Typography>Status: {status}</Typography>
            <Typography>Genero: {gender}</Typography>
          </Box>
          <Button
            fullWidth
            variant="contained"
            onClick={(e) => navigate(`personaje/${id}`)}
          >
            Learn More
          </Button>
        </CardContent>
      </Stack>
    </Card>
  );
};
