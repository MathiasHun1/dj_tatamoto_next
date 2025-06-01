'use client';
import { createTheme } from '@mui/material/styles';
import { deepPurple, yellow } from '@mui/material/colors';

const theme = createTheme({
  // cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
    body1: {
      lineHeight: 1.8,
    },
  },
  palette: {
    primary: {
      main: deepPurple[600],
    },
    secondary: {
      main: yellow[500],
    },
    text: {
      secondary: 'white',
    },
  },
});

export default theme;
