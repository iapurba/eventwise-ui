import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#EC1066',
        },
      },
    },
  },
});

export default theme;