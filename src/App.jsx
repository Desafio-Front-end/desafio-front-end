import './reset.css';
import './App.css';
import './variaveis.css'
import { TurmasCadastradas } from './pages/turmas-cadastradas/turmas-cadastradas';
import { BrowserRouter, Routes, Route } from "react-router";
import { PaginaInicial } from './pages/pagina-inicial/pagina-inicial';
import { CadastroDisciplina } from './pages/cadastro-disciplina/cadastro-disciplina';
import { CadastroTurma } from './pages/cadastro-turma/cadastro-turma';
import { Matricula } from './pages/matricula/matricula';
import { EditarDisciplina } from './pages/editar-disciplina/editar-disciplina';
import { EditarTurma } from './pages/editar-turma/editar-turma';
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
              <Route path="/editar-disciplina" element={<EditarDisciplina />} />
              <Route path="/editar-turma" element={<EditarTurma />} />
              <Route path="/turmas-cadastradas" element={<TurmasCadastradas />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LocalizationProvider>

    </>
  )
}

export default App
