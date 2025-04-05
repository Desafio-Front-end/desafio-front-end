import './cadastro-turma.css';
import { Button, Card, CardContent, TextField, MenuItem, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../Api';
import { useMask } from '@react-input/mask';

// ARRAYS PARA MAPEAR O DIA/TURNO
const opcoesDiaDaSemana = [
  {
    value: '2',
    label: 'Segunda-feira',
  },
  {
    value: '3',
    label: 'Terça-feira',
  },
  {
    value: '4',
    label: 'Quarta-feira',
  },
  {
    value: '5',
    label: 'Quinta-feira',
  },
  {
    value: '6',
    label: 'Sexta-feira',
  },
  {
    value: '7',
    label: 'Sábado',
  },
];

const opcoesTurno = [
  {
    value: '1',
    label: 'Manhã',
  },
  {
    value: '2',
    label: 'Tarde',
  },
  {
    value: '3',
    label: 'Noite',
  },
];



export const CadastroTurma = () => {

  //USE STATES DO COMPONENTE
  const [professores, setProfessores] = useState([]);
  const [professorSelecionado, setProfessorSelecionado] = useState(null);
  const [disciplinas, setDisciplinas] = useState([])
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState(null)
  const [numVagas, setNumVagas] = useState(0);
  const [anoSemestre, setAnoSemestre] = useState("");
  const [diaSelecionado, setDiaSelecionado] = useState("2");
  const [turnoSelecionado, setTurnoSelecionado] = useState("1");
  //HOOK PARA PEGAR A FUNÇÃO DE NAVEGAÇÃO DE PÁGINA
  const navigate = useNavigate();
  // CHAMANDO A HOOK PARA DEFINIR A MÁSCARA DO SEMESTRE ANO
  const inputRef = useMask({
    mask: '____/_',
    replacement: { '_': /\d/ },
  });
  //USE STATES E FUNÇÕES DAS MENSAGENS DE ERRO AO CADASTRAR TURMA
  const [openErro, setOpenErro] = useState(false);
  const handleCloseErro = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenErro(false);
  };

  //FUNÇÃO CADASTRAR TURMA
  const cadastrarTurma = (e) => {
    e.preventDefault();
    api.post('turmas/cadastrar', {
      idProfessor: professorSelecionado,
      idDisciplina: disciplinaSelecionada,
      numVagas: parseInt(numVagas),
      anoSemestre,
      horarioTurno: diaSelecionado + turnoSelecionado

    })
      .then(function () {
        navigate('/turmas-cadastradas')
      })
      .catch(function () {
        setOpenErro(true);
      })
  }

  ///USE EFFECTS CRIADO PARA TRAZER A LISTA DE DISCIPLINAS
  // QUANDO A PÁGINA FOR CARREGADA INICIALMENTE
  useEffect(() => {
    api.get('disciplinas/instituicao').then(function (resposta) {
      setDisciplinas(resposta.data);
    })
  }, [])

  //USE EFFECTS CRIADO PARA TRAZER A LISTA DE PROFESSORES
  // QUANDO A PÁGINA FOR CARREGADA INICIALMENTE
  useEffect(() => {
    api.get('professores').then(function (resposta) {
      setProfessores(resposta.data);
    })
  }, [])

  return (
    <>
      <div className='container-cadastro-turma'>
        {/* ESTRUTURA DO BOTÃO VOLTAR <--- ELE VOLTA PARA A TELA TURMAS CADASTRADAS */}
        <IconButton className='button-voltar' color='primary' size='large' onClick={() => navigate("/turmas-cadastradas")}>
          <ArrowBackIcon fontSize='inherit' />
        </IconButton>

        {/* ESTRUTURA DO FORMULÁRIO CADASTRAR TURMA */}
        {/* AQUI A GENTE CHAMA A FUNÇÃO CADASTRAR TURMA*/}
        <form onSubmit={cadastrarTurma}>
          <Card sx={{ width: 600, padding: '24px' }} >
            <CardContent className='card-cadastro-turma'>
              <h2 className='card-cadastro-titulo-turma'>
                CADASTRAR TURMA
              </h2>
              <div className='card-cadastro-turma-colunas'>
                <div className='colunas-coluna'>

                  <TextField
                    className='card-cadastro-turma-input-selector'
                    label="Professor(a)"
                    select
                    required
                    value={professorSelecionado}
                    onChange={(e) => setProfessorSelecionado(e.target.value)}>
                    {professores.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.usuario.nome}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    className='card-cadastro-turma-input'
                    label="N° de vagas"
                    required
                    value={numVagas}
                    type='number'
                    onChange={(e) => setNumVagas(e.target.value)}
                  />

                  <TextField
                    className='card-cadastro-turma-input-selector'
                    label="Dia"
                    select
                    required
                    value={diaSelecionado}
                    onChange={(e) => setDiaSelecionado(e.target.value)}>
                    {opcoesDiaDaSemana.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>


                </div>
                <div className='colunas-coluna'>
                  <TextField
                    className='card-cadastro-turma-input-selector'
                    label="Disciplina"
                    select
                    required
                    value={disciplinaSelecionada}
                    onChange={(e) => setDisciplinaSelecionada(e.target.value)}>
                    {disciplinas.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.nome}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    className='card-cadastro-turma-input'
                    label="Ano/Semestre"
                    placeholder="0000/0"
                    required
                    inputRef={inputRef}
                    value={anoSemestre}
                    onChange={(e) => setAnoSemestre(e.target.value)}
                  />

                  <TextField
                    className='card-cadastro-turma-input-selector'
                    label="Turno"
                    select
                    required
                    value={turnoSelecionado}
                    onChange={(e) => setTurnoSelecionado(e.target.value)}>
                    {opcoesTurno.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                </div>
              </div>

              <Button variant="contained" className='card-cadastro-turma-button' type='submit'>CADASTRAR</Button>
            </CardContent>
          </Card>
        </form>
        {/* ESTRUTURA DA MENSAGEM DE ERRO */}
        <Snackbar open={openErro} autoHideDuration={5000} onClose={handleCloseErro}>
          <Alert
            onClose={handleCloseErro}
            severity='error'
            variant='filled'
            sx={{ width: '100%' }}
          >
            Problema ao realizar ao cadastro!
          </Alert>
        </Snackbar>
      </div >
    </>
  );
}