import './reset.css';
import './App.css';
import './variaveis.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { CadastroDisciplina } from './pages/cadastro-disciplina/cadastro-disciplina';
import { CadastroTurma } from './pages/cadastro-turma/cadastro-turma';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-BR">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<>
                página inicial</>} />
              <Route path="/cadastro-disciplina" element={<CadastroDisciplina />} />
              <Route path="/cadastro-turma" element={<CadastroTurma />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LocalizationProvider>

    </>
  )
}

export default App
