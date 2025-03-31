//importacao dos componentes e dependencias
import { Button, Card, CardContent, MenuItem, TextField, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import './editar-turma.css';
import api from '../../Api';
import { useNavigate } from 'react-router';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'react-router';
import { useMask } from '@react-input/mask';

//definicao de dias da semana
const opcoesDiaDaSemana = [
  { value: '2', label: 'Segunda-feira' },
  { value: '3', label: 'Terça-feira' },
  { value: '4', label: 'Quarta-feira' },
  { value: '5', label: 'Quinta-feira' },
  { value: '6', label: 'Sexta-feira' },
  { value: '7', label: 'Sábado' },
];

//definicao de turnos
const opcoesTurno = [
  { value: '1', label: 'Manhã' },
  { value: '2', label: 'Tarde' },
  { value: '3', label: 'Noite' },
];

//useState armazenar os valores dos campos dos formularios
export const EditarTurma = () => {
  const params = useParams();
  const [professores, setProfessores] = useState([]);
  const [professorSelecionado, setProfessorSelecionado] = useState(null);
  const [disciplinas, setDisciplinas] = useState([]);
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState(null);
  const [numVagas, setNumVagas] = useState(0);
  const [anoSemestre, setAnoSemestre] = useState("");
  const [diaSelecionado, setDiaSelecionado] = useState("2");
  const [turnoSelecionado, setTurnoSelecionado] = useState("1");
  const navigate = useNavigate();
  const inputRef = useMask({
    mask: '____/_',
    replacement: { '_': /\d/ },
  });

  const [openErro, setOpenErro] = useState(false); //openErro controla se a mensagem sera exibida ou nao
  const handleCloseErro = (_, reason) => {  //handleCloseErro fecha a mensagem de erro se clica fora
    if (reason === 'clickaway') {
      return;
    }
    setOpenErro(false);
  };

  //funcao para edicao da turma - chamada quando o formulario é enviado
  const editarTurma = (e) => {
    e.preventDefault();
    api.patch(`turmas/` + params.id, { //chama pelo patch pro servidor atualizar com o id passado no params.id
      idProfessor: professorSelecionado,
      idDisciplina: disciplinaSelecionada,
      numVagas: parseInt(numVagas),
      anoSemestre,
      horarioTurno: diaSelecionado + turnoSelecionado
    })
      .then(function () {
        navigate('/turmas-cadastradas'); //usuario é direcionado para a tela de turmas cadastradas
      })
      .catch(function () { //se der errado é exibido a mensagem problema
        setOpenErro(true);
      });
  };

  //carrega a lista de disciplinas e armazena na variavel disciplinas
  useEffect(() => {
    api.get('disciplinas').then(function (resposta) {
      setDisciplinas(resposta.data);
    });
  }, []);

  //carrega a lista de professores e armazena na variavel professores
  useEffect(() => {
    api.get('professores').then(function (resposta) {
      setProfessores(resposta.data);
    });
  }, []);

  //busca os dados da turma que está sendo editada
  useEffect(() => {
    api.get(`turmas/` + params.id).then(function (resposta) { //busca a turma pelo params.id e os dados retornados são usados no campo dos formularios com os valores atualizados 
      setProfessorSelecionado(resposta.data.idProfessor);
      setDisciplinaSelecionada(resposta.data.idDisciplina);
      setNumVagas(resposta.data.numVagas);
      setAnoSemestre(resposta.data.anoSemestre);
      setDiaSelecionado(resposta.data.horarioTurno.charAt(0));
      setTurnoSelecionado(resposta.data.horarioTurno.charAt(1));
    });
  }, [params.id]);

  return (
    <div className='container-editar-turma'>
      <IconButton className='button-voltar' color='primary' size='large' onClick={() => navigate("/turmas-cadastradas")}>
        <ArrowBackIcon fontSize='inherit' />
      </IconButton>
      <form onSubmit={editarTurma}>
        <Card sx={{ width: 600, padding: '24px' }}>
          <CardContent className='card-editar-turma'>
            <h2 className='card-editar-titulo-turma'>EDITAR TURMA</h2>
            <div className='card-editar-turma-colunas'>
              <div className='colunas-coluna'>
                <TextField
                  className='card-editar-turma-input-selector'
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
                  className='card-editar-turma-input'
                  label="N° de vagas"
                  required
                  value={numVagas}
                  type='number'
                  onChange={(e) => setNumVagas(e.target.value)}
                />
                <TextField
                  className='card-editar-turma-input-selector'
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
                  className='card-editar-turma-input-selector'
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
                  className='card-editar-turma-input'
                  label="Ano/Semestre"
                  placeholder="0000/0"
                  required
                  inputRef={inputRef}
                  value={anoSemestre}
                  onChange={(e) => setAnoSemestre(e.target.value)}
                />
                <TextField
                  className='card-editar-turma-input-selector'
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
            <Button variant="contained" className='card-editar-turma-button' type='submit'>SALVAR</Button>
          </CardContent>
        </Card>
      </form>
      <Snackbar open={openErro} autoHideDuration={5000} onClose={handleCloseErro}>
        <Alert onClose={handleCloseErro} severity='error' variant='filled' sx={{ width: '100%' }}> 
          Problema ao editar a turma!
        </Alert>
      </Snackbar>
    </div>
  );
};
