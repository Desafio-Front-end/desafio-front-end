import './reset.css';
import './App.css';
import './variaveis.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { CadastroDisciplina } from './pages/cadastro-disciplina/cadastro-disciplina';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796B',
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>
              página inicial</>} />
            <Route path="/cadastro-disciplina" element={<CadastroDisciplina />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
