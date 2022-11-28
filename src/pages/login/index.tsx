import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../context/Notification.context';
import { LoginValidate } from '../../utils/validateForm';

const initialState = {
  Username: '',
  Password: '',
};

type LoginType = {
  Username: string;
  Password: string;
};

const LoginPage: React.FC = () => {
  const [loginData, SetLoginData] = useState<LoginType>(initialState);
  const [inputError, setInputError] = useState({
    Username: false,
    Password: false,
  });
  const { getError, getSuccess } = useNotification();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (loginData.Username !== '') {
      setInputError({ ...inputError, Username: false });
    }
    if (loginData.Password !== '') {
      setInputError({ ...inputError, Password: false });
    }
    SetLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    LoginValidate.validate(loginData)
      .then(() => {
        getSuccess(JSON.stringify(loginData));
        setTimeout(() => navigate('/'), 3000);
      })
      .catch((error) => {
        if (!loginData.Username.trim()) {
          setInputError({ ...inputError, Username: true });
        } else if (!loginData.Password.trim()) {
          setInputError({ ...inputError, Password: true });
        }
        getError(error.message);
      });
  };

  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '90vh' }}
      >
        <Grid item>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
              Iniciar sesion
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                error={inputError.Username ? true : false}
                autoFocus
                fullWidth
                type="text"
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={handleChange}
                name="Username"
                value={loginData.Username}
              />
              <TextField
                margin="normal"
                error={inputError.Password ? true : false}
                fullWidth
                type="password"
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={handleChange}
                name="Password"
                value={loginData.Password}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
