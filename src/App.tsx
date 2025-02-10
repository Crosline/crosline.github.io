import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './styles/theme';
import Home from './pages/Home';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Home />
  </ThemeProvider>
);

export default App;