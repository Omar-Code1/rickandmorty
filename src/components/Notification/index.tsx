import { Alert, AlertColor, Snackbar, Typography } from '@mui/material';
import React from 'react';

type Props = {
  open: boolean;
  msg: string;
  severity?: AlertColor;
  handleClose: () => void;
};

export const Notification: React.FC<Props> = ({
  open,
  msg,
  severity,
  handleClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={2000}
      open={open}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        <Typography>{msg}</Typography>
      </Alert>
    </Snackbar>
  );
};
