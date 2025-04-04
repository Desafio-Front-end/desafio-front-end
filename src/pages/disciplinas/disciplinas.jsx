import { Button, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import './disciplinas.css';
import api from '../../Api';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete'; 

const diasSemana = {
    2: "Segunda-feira",
    3: "Terça-feira",
    4: "Quarta-feira",
    5: "Quinta-feira",
    6: "Sexta-feira",
    7: "Sábado"
};

const turno = {
    1: "Manhã",
    2: "Tarde",
    3: "Noite"
};

export const Disciplinas = () => {
    const navigate = useNavigate();
    const [matriculas, setMatriculas] = useState([]);
    const [turmas, setTurmas] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const carregarDados = async () => {
        try {
            setCarregando(true);
            const respostaMatriculas = await api.get('matriculas/listarMatriculasAluno');
            setMatriculas(respostaMatriculas.data);
            
            const respostaTurmas = await api.get('turmas/listar');
            setTurmas(respostaTurmas.data);
        } catch (erro) {
            console.error("Erro ao carregar dados:", erro);
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        carregarDados();
    }, []);

    const deletarMatricula = async (idMatricula) => {
        try {
            await api.delete(`matriculas/${idMatricula}`);
            await carregarDados();
        } catch (error) {
            console.error("Erro ao deletar matrícula:", error);
        }
    };

    const turmasMatriculadas = turmas.filter(turma => 
        matriculas.some(matricula => matricula.idTurma === turma.id)
    );

    return (
        <div className='container-disciplinas'>      
            <IconButton className='button-voltar' color='primary' size='large' onClick={() => navigate("/home-aluno")}>
                <ArrowBackIcon fontSize='inherit' />
            </IconButton>      
            <div className='titulo-disciplinas'>
                <h1>DISCIPLINAS</h1>
            </div>

            <Card sx={{ maxWidth: 1000, padding: '5px' }} >
                <CardContent>
                    {carregando ? (
                        <div>Carregando disciplinas...</div>
                    ) : turmasMatriculadas.length === 0 ? (
                        <div>Nenhuma disciplina matriculada</div>
                    ) : (
                        <TableContainer>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Turma</TableCell>
                                        <TableCell align="center">Disciplina</TableCell>
                                        <TableCell align="center">Professor</TableCell>
                                        <TableCell align="center">Ano/Semestre</TableCell>
                                        <TableCell align="center">Dia/Turno</TableCell>
                                        <TableCell align="center">Status</TableCell>
                                        <TableCell align="center">Ações</TableCell> 
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {turmasMatriculadas.map((turma) => {
                                        const matricula = matriculas.find(m => m.idTurma === turma.id);
                                        
                                        return (
                                            <TableRow key={turma.id}>
                                                <TableCell align="center">{turma.id}</TableCell>
                                                <TableCell align="center">{turma.disciplina?.nome || '-'}</TableCell>
                                                <TableCell align="center">{turma.professor?.usuario?.nome || '-'}</TableCell>
                                                <TableCell align="center">{turma.anoSemestre || '-'}</TableCell>
                                                <TableCell align="center">
                                                    {turma.horarioTurno?.[0] ? diasSemana[turma.horarioTurno[0]] : '-'} / {' '}
                                                    {turma.horarioTurno?.[1] ? turno[turma.horarioTurno[1]] : '-'}
                                                </TableCell>
                                                <TableCell align="center">{matricula?.status || 'Em andamento'}</TableCell>
                                                <TableCell align="center">
                                                    <IconButton 
                                                        color="error" 
                                                        onClick={() => matricula && deletarMatricula(matricula.id)}
                                                        disabled={!matricula}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};