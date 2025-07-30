// MUI theme setup for reuse
const { createTheme } = MaterialUI;

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1a1a2e',
      paper: '#232344',
    },
    primary: { main: '#357abd' },
    secondary: { main: '#2d3561' },
    success: { main: '#4caf50' },
    error: { main: '#c0392b' },
    info: { main: '#20b2ff' },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    fontWeightBold: 600,
    h5: { color: '#e0e0e0', fontWeight: 600 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#232344',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#232344',
          color: '#fff',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: '#e0e0e0',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
  },
});

export default theme;
