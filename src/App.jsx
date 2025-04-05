import './reset.css';
import './App.css';
import './variaveis.css'
import { TurmasCadastradas } from './pages/turmas-cadastradas/turmas-cadastradas';
import { BrowserRouter, Routes, Route } from "react-router";
import { PaginaInicial } from './pages/pagina-inicial/pagina-inicial';
import { HomeInstituicao } from './pages/home-instituicao/home-instituicao';
import { HomeAluno } from './pages/home-aluno/home-aluno';
import { HomeProfessor } from './pages/home-professor/home-professor';
import { CadastroDisciplina } from './pages/cadastro-disciplina/cadastro-disciplina';
import { CadastroTurma } from './pages/cadastro-turma/cadastro-turma';
import { Matricula } from './pages/matricula/matricula';
import { EditarDisciplina } from './pages/editar-disciplina/editar-disciplina';
import { EditarTurma } from './pages/editar-turma/editar-turma';
import { DisciplinasCadastradas } from './pages/disciplinas-cadastradas/disciplinas-cadastradas';
import { DisciplinasVinculadas } from './pages/disciplinas-vinculadas/disciplinas-vinculadas';
import { Disciplinas } from './pages/disciplinas/disciplinas';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ptBR } from '@mui/material/locale';
//IMPORTAS DOS COMPONENTES DO PROJETO

//TEMA APLICADO NA APLICAÇÃO
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
      {/*ROTAS DAS TELAS - FOI UTILIZADO O REACT ROUTER*/}
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-BR">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PaginaInicial />} />
              <Route path="/home-instituicao" element={<HomeInstituicao />} />
              <Route path="/disciplinas-cadastradas" element={<DisciplinasCadastradas />} />
              <Route path="/cadastro-disciplina" element={<CadastroDisciplina />} />
              <Route path="/editar-disciplina" element={<EditarDisciplina />} />
              <Route path="/turmas-cadastradas" element={<TurmasCadastradas />} />
              <Route path="/cadastro-turma" element={<CadastroTurma />} />
              <Route path="/editar-turma" element={<EditarTurma />} />
              <Route path="/home-professor" element={<HomeProfessor />} />
              <Route path="/home-professor/disciplinas-vinculadas" element={<DisciplinasVinculadas />} />
              <Route path="/home-aluno" element={<HomeAluno />} />
              <Route path="/matricula" element={<Matricula />} />
              <Route path="/disciplinas" element={<Disciplinas />} />
              <Route path="/editar-disciplina/:id" element={<EditarDisciplina />} />
              <Route path="/editar-turma/:id" element={<EditarTurma />} />
              <Route path="/turmas-cadastradas/:id" element={<TurmasCadastradas />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LocalizationProvider>

    </>
  )
}

export default App
