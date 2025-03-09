import './reset.css';
import './App.css';
import './variaveis.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { PaginaInicial } from './pages/pagina-inicial/pagina-inicial';
import { CadastroDisciplina } from './pages/cadastro-disciplina/cadastro-disciplina';
import { CadastroTurma } from './pages/cadastro-turma/cadastro-turma';
import { Matricula } from './pages/matricula/matricula';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ptBR } from '@mui/material/locale';


const theme = createTheme({
  palette: {
    primary: {
      main: '#00796B',
    },
  },

}, ptBR);
function App() {
  return (
    <>

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-BR">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/pagina-inicial" element={<PaginaInicial />} />
              <Route path="/cadastro-disciplina" element={<CadastroDisciplina />} />
              <Route path="/cadastro-turma" element={<CadastroTurma />} />
              <Route path="/matricula" element={<Matricula />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LocalizationProvider>

    </>
  )
}

export default App
