import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const LoadingTsx: React.FC = () => {
  return (
    <Box
      mt={2}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
