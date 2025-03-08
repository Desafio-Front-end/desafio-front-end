import { useState } from 'react';
import './matricula.css';
import {
    Button, Checkbox, Table, TableBody, TableCell, TableContainer,
    TableHead, TablePagination, TableRow, Paper
} from '@mui/material';


const linhas = [
    { id: 1, turma: 'A1', disciplina: 'Matemática', professor: 'Carlos Silva', n_vagas: 30, ano: 2024, semestre: 1, dia: 'Segunda-feira', turno: 'Manhã', horario: '08:00 - 10:00' },
    { id: 2, turma: 'B1', disciplina: 'História', professor: 'Ana Souza', n_vagas: 25, ano: 2024, semestre: 1, dia: 'Terça-feira', turno: 'Tarde', horario: '14:00 - 16:00' },
    { id: 3, turma: 'C1', disciplina: 'Física', professor: 'Marcos Oliveira', n_vagas: 20, ano: 2024, semestre: 1, dia: 'Quarta-feira', turno: 'Noite', horario: '19:00 - 21:00' },
    { id: 4, turma: 'A2', disciplina: 'Química', professor: 'Fernanda Lima', n_vagas: 28, ano: 2024, semestre: 1, dia: 'Quinta-feira', turno: 'Manhã', horario: '10:00 - 12:00' },
    { id: 5, turma: 'B2', disciplina: 'Inglês', professor: 'Roberto Mendes', n_vagas: 22, ano: 2024, semestre: 1, dia: 'Sexta-feira', turno: 'Tarde', horario: '16:00 - 18:00' },
    { id: 6, turma: 'C2', disciplina: 'Biologia', professor: 'Juliana Costa', n_vagas: 18, ano: 2024, semestre: 1, dia: 'Segunda-feira', turno: 'Noite', horario: '18:30 - 20:30' },
    { id: 7, turma: 'A3', disciplina: 'Geografia', professor: 'Lucas Pereira', n_vagas: 26, ano: 2024, semestre: 1, dia: 'Terça-feira', turno: 'Manhã', horario: '08:00 - 10:00' },
    { id: 8, turma: 'B3', disciplina: 'Educação Física', professor: 'Vanessa Santos', n_vagas: 32, ano: 2024, semestre: 1, dia: 'Quarta-feira', turno: 'Tarde', horario: '14:00 - 16:00' },
    { id: 9, turma: 'C3', disciplina: 'Artes', professor: 'Felipe Nogueira', n_vagas: 24, ano: 2024, semestre: 1, dia: 'Quinta-feira', turno: 'Noite', horario: '19:00 - 21:00' },
];

export const Matricula = () => {
    //LOGÍCA DE PAGINAÇÃO
    const porPagina = 4;
    const [pagina, setPagina] = useState(0);
    const linhasPaginadas = linhas.slice(pagina * porPagina, (pagina + 1) * porPagina);

    //LÓGICA DE SELEÇÃO DE LINHAS
    const [linhasSelecionadas, setLinhasSelecionadas] = useState([]);
    const toggleLinha = (event, id) => {
        //NO IF EU VERIFICO SE O CHECKBOX ESTÁ SENDO MARCADO 
        // E NO ELSE VERIFICA SE VAI SER DESMARCADO
        if (event.target.checked) {
            setLinhasSelecionadas([...linhasSelecionadas, id])
        } else {
            setLinhasSelecionadas(linhasSelecionadas.filter((linha) => linha != id));
        }
    }
    //LÓGICA PARA SELECIONAR TODAS AS LINHAS
    const toggleAllLinhas = (event) => {
        // NO IF 
        if (event.target.checked) {
            setLinhasSelecionadas(linhas.map(linha => linha.id))
        } else {
            setLinhasSelecionadas([]);
        }
    }
    return (
        <>
            <div className='container-matricula'>
                <div className='tittle-button-matricula'>
                    <h2 className='tittle-matricula'>MATRÍCULA</h2>
                    <Button variant="contained" className='button-matricular'>MATRICULAR</Button>
                </div>
                <TableContainer component={Paper} sx={{ marginTop: '16px' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>TURMA</TableCell>
                                <TableCell align="center">DISCIPLINA</TableCell>
                                <TableCell align="center">PROFESSOR</TableCell>
                                <TableCell align="center">N° VAGAS</TableCell>
                                <TableCell align="center">ANO</TableCell>
                                <TableCell align="center">SEMESTRE</TableCell>
                                <TableCell align="center">DIA</TableCell>
                                <TableCell align="center">TURNO</TableCell>
                                <TableCell align="center">HORÁRIO</TableCell>
                                <TableCell align="center"><Checkbox onChange={toggleAllLinhas} /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {linhasPaginadas.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.turma}
                                    </TableCell>
                                    <TableCell align="center">{row.disciplina}</TableCell>
                                    <TableCell align="center">{row.professor}</TableCell>
                                    <TableCell align="center">{row.n_vagas}</TableCell>
                                    <TableCell align="center">{row.ano}</TableCell>
                                    <TableCell align="center">{row.semestre}</TableCell>
                                    <TableCell align="center">{row.dia}</TableCell>
                                    <TableCell align="center">{row.turno}</TableCell>
                                    <TableCell align="center">{row.horario}</TableCell>
                                    <TableCell align="center"><Checkbox checked={linhasSelecionadas.includes(row.id)}
                                        onChange={(event) => toggleLinha(event, row.id)} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    count={linhas.length}
                    page={pagina}
                    rowsPerPageOptions={[porPagina]}
                    rowsPerPage={porPagina}
                    onPageChange={(_, page) => setPagina(page)} />

            </div>
        </>
    );
}