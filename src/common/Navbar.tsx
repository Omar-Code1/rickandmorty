import {
  AppBar,
  Box,
  Toolbar,
  Grid,
  Button,
  Typography,
  Stack,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import imgRick from '../img/ricklogo.png';

import React from 'react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              sx={{ display: 'flex', flexDirection: 'row', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              <img src={imgRick} alt="logo-rick" width="60rem" />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  ml: 2,
                }}
              >
                <Typography align="left">Rick And Morty</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={() => navigate('login')}>
                  Login
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
