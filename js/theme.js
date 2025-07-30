// MUI theme setup for reuse
const { createTheme, ThemeProvider } = MaterialUI;

const theme = createTheme({
  palette: {
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
  typography: {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    fontWeightBold: 600,
    h5: { color: '#e0e0e0', fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
