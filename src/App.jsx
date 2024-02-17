import './App.css';
import { ThemeProvider } from '@mui/material';
import myTheme from './Theming/ThemeProvider';
import Router from './Services/Router';

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
          <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
