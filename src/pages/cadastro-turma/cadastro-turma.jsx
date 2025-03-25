import './cadastro-turma.css';
import { Button, Card, CardContent, TextField, MenuItem, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../Api';
import { useMask } from '@react-input/mask';

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
  const [professores, setProfessores] = useState([]);
  const [professorSelecionado, setProfessorSelecionado] = useState(null);
  const [disciplinas, setDisciplinas] = useState([])
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState(null)
  const [numVagas, setNumVagas] = useState(0);
  const [anoSemestre, setAnoSemestre] = useState("");
  const [diaSelecionado, setDiaSelecionado] = useState("2");
  const [turnoSelecionado, setTurnoSelecionado] = useState("1");
  const navigate = useNavigate();
  const inputRef = useMask({
    mask: '0000/0',
    replacement: { '0': /\d/ },
  });

  const [openErro, setOpenErro] = useState(false);
  const handleCloseErro = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenErro(false);
  };

  const cadastrarTurma = (e) => {
    e.preventDefault();
    api.post('turmas', {
      idProfessor: professorSelecionado,
      idDisciplina: disciplinaSelecionada,
      numVagas,
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

  useEffect(() => {
    api.get('disciplinas').then(function (resposta) {
      setDisciplinas(resposta.data);
    })
  }, [])

  useEffect(() => {
    api.get('professores').then(function (resposta) {
      setProfessores(resposta.data);
    })
  }, [])

  return (
    <>
      <div className='container-cadastro-turma'>

        <IconButton className='button-voltar' color='primary' size='large' onClick={() => navigate("/turmas-cadastradas")}>
          <ArrowBackIcon fontSize='inherit' />
        </IconButton>


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