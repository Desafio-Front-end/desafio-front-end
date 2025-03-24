import './cadastro-turma.css';
import { Button, Card, CardContent, TextField, MenuItem } from "@mui/material";
import { TimeField } from '@mui/x-date-pickers/TimeField';
const opcoesProfessor = [
  {
    value: '1',
    label: 'Maria Alves',
  },
  {
    value: '2',
    label: 'Lúcio Martins',
  },
  {
    value: '3',
    label: 'Carlos Silva',
  },
  {
    value: '4',
    label: 'Ana Veiga',
  },
];
const opcoesPreRequisito = [
  {
    value: '1',
    label: 'Programação Back-end',
  },
  {
    value: '2',
    label: 'Testes de Software',
  },
  {
    value: '3',
    label: 'Redes de Computadores',
  },
  {
    value: '4',
    label: 'Desenvolvimento Web',
  },
];
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
  return (
    <>
      <div className='container-cadastro-turma'>

        <Card sx={{ width: 600, padding: '24px' }} >
          <CardContent className='card-cadastro-turma'>
            <h2 className='card-cadastro-titulo-turma'>
              CADASTRAR TURMA
            </h2>
            <div className='card-cadastro-turma-colunas'>
              <div className='colunas-coluna'>

                <TextField
                  className='card-cadastro-turma-input'
                  label="Turma"
                />

                <TextField
                  className='card-cadastro-turma-input-selector'
                  label="Professor(a)"
                  select>
                  {opcoesProfessor.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  className='card-cadastro-turma-input-selector'
                  label="Dia"
                  select>
                  {opcoesDiaDaSemana.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  className='card-cadastro-turma-input'
                  label="Ano/Semestre"
                  placeholder="0000/0"
                />

              </div>
              <div className='colunas-coluna'>
                <TextField
                  className='card-cadastro-turma-input-selector'
                  label="Disciplina"
                  select>
                  {opcoesPreRequisito.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  className='card-cadastro-turma-input'
                  label="N° de vagas"
                />

                <TextField
                  className='card-cadastro-turma-input-selector'
                  label="Turno"
                  select>
                  {opcoesTurno.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

              </div>
            </div>

            <Button variant="contained" className='card-cadastro-turma-button'>CADASTRAR</Button>
          </CardContent>
        </Card>
      </div >
    </>
  );
}