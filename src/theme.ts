'use client';

import { createTheme } from '@mui/material/styles';
import { deepPurple, yellow } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

// const baseTheme = createTheme();

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
    body1: {
      lineHeight: 1.8,
      fontWeight: 200,
      fontSize: '1rem',
      // [baseTheme.breakpoints.up('sm')]: {
      //   fontSize: '1.2rem', // Font size for 'sm' screens and up
      // },
    },
  },

  palette: {
    primary: {
      main: deepPurple[600],
      light: deepPurple[300],
    },
    secondary: {
      main: yellow[500],
    },
    text: {
      primary: '#ffffff',
      secondary: yellow[400],
    },
    divider: grey[600],
    background: {
      default: grey[900],
      paper: grey[800],
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.5)',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: 'text.primary',
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
