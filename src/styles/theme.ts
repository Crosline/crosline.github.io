import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a14ba2',
    },
    background: {
      default: '#190a29',
      paper: '#1a234e',
    },
  },
  typography: {
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});