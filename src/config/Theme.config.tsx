import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

type ThemeProps = {
  children: JSX.Element;
};

export enum ThemePalette {
  Bg = '#12181b',
  Lime = '#C8FA5F',
  FontGlobal = "'JetBrains Mono', monospace",
  ErrorMain = '#f44336',
  BgErrorMain = 'rgba(244,57,54,0.1)',
  SuccessMain = '#66bb6a',
  BgSuccessMain = 'rgba(102,187,106,0.1)',
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: ThemePalette.Bg,
    },
    primary: {
      main: ThemePalette.Lime,
    },
  },
  typography: {
    fontFamily: ThemePalette.FontGlobal,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: '0.8em',
          fontSize: '1em',
        },
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${ThemePalette.ErrorMain}`,
          background: ThemePalette.BgErrorMain,
        },
        standardSuccess: {
          border: `1px solid ${ThemePalette.SuccessMain}`,
          background: ThemePalette.BgSuccessMain,
        },
      },
    },
  },
});

export const ThemeConfig: React.FunctionComponent<ThemeProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
