import { TableContainer, TablePagination, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Paper } from '@mui/material';
import './disciplinas-vinculadas.css';
import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, useEffect } from 'react';
import api from '../../Api';


const diasSemana = {
    2: "Segunda-feira",
    3: "Terça-feira",
    4: "Quarta-feira",
    5: "Quinta-feira",
    6: "Sexta-feira",
    7: "Sábado"
}

const turno = {
    1: "Manhã",
    2: "Tarde",
    3: "Noite"
}

export const DisciplinasVinculadas = () => {
    const navigate = useNavigate();

    const [turmas, setTurmas] = useState([]);
    const [disciplinas, setDisciplinas] = useState([]);
    
    const professorNome = localStorage.getItem("nome")

    useEffect(() => {
        api.get('turmas/listarTurmasProfessor')
            .then((resposta) => {
                setTurmas(resposta.data);
            })
            .catch((erro) => console.error("Erro ao buscar turmas:", erro))
    }, []);

    useEffect(() => {
        api.get('disciplinas')
            .then((resposta) => {
                setDisciplinas(resposta.data);
            })
            .catch((erro) => console.error("Erro ao buscar disciplinas:", erro))
    }, []);

    const getDisciplinaNome = (idDisciplina) => {
        const disciplina = disciplinas.find((disc) => disc.id === idDisciplina);
        return disciplina ? disciplina.nome : "Sem disciplina";
    };

    //LOGÍCA DE PAGINAÇÃO
    const porPagina = 4;
    const [pagina, setPagina] = useState(0);
    const linhasPaginadas = turmas.slice(pagina * porPagina, (pagina + 1) * porPagina);

    return (
        <>
            <div className='container-disciplinas-vinculadas'>
                <IconButton className='button-voltar' color='primary' size='large' onClick={() => navigate("/home-professor")}>
                    <ArrowBackIcon fontSize='inherit' />
                </IconButton>
                <div className='titulo-disciplinas-vinculadas'>
                    <h2>DISCIPLINAS VINCULADAS</h2>
                </div>

            {turmas.length === 0 ? (
                    <p>Nenhuma disciplina vinculada.</p>
                ) : (
                    <>
                    <TableContainer component={Paper} sx={{ marginTop: '16px' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">TURMA</TableCell>
                                    <TableCell align="center">DISCIPLINA</TableCell>
                                    <TableCell align="center">PROFESSOR</TableCell>
                                    <TableCell align="center">ANO/SEMESTRE</TableCell>
                                    <TableCell align="center">DIA</TableCell>
                                    <TableCell align="center">TURNO</TableCell>
                                    <TableCell align="center">STATUS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {linhasPaginadas.map((row) => (
                                    <TableRow 
                                        key={row.id} 
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align='center'>{row.id}</TableCell>
                                        <TableCell align="center">{getDisciplinaNome(row.idDisciplina)  }</TableCell>
                                        <TableCell align="center">{professorNome}</TableCell>
                                        <TableCell align="center">{row.anoSemestre ?? "Não informado."}</TableCell>
                                        <TableCell align="center">{diasSemana[row.horarioTurno[0]]}</TableCell>
                                        <TableCell align="center">{turno[row.horarioTurno[1]]}</TableCell>
                                        <TableCell align="center">?</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        count={turmas.length}
                        page={pagina}
                        rowsPerPageOptions={[porPagina]}
                        rowsPerPage={porPagina}
                        onPageChange={(_, page) => setPagina(page)} />
                   </>
                )}
            </div>
        </>
    );
};