// import logo from './logo.svg';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import Navbar from './Components/Navbar';
import { createTheme } from '@mui/material/styles';
import GriedSystem from './Components/GriedSystem';
import { Container } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB6C1'
    }
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar theme={theme}></Navbar>
      <Container>
      <GriedSystem></GriedSystem>
      </Container>
    </ThemeProvider>
  );
}

export default App;
