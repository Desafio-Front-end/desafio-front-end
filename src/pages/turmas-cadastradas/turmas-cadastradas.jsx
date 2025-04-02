import { Delete, Edit, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Button, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import './turmas-cadastradas.css';

export const TurmasCadastradas = () => {
    const [turmas, setTurmas] = useState([
        { id: 1, turma: 'Turma A', disciplina: 'Matemática', professor: 'Prof. João', vagas: 30, anoSemestre: '2025/1', diaTurno: 'Segunda/Manhã' },
        { id: 2, turma: 'Turma B', disciplina: 'Física', professor: 'Prof. Maria', vagas: 25, anoSemestre: '2025/1', diaTurno: 'Terça/Tarde' },
    ]);

    const navigate = useNavigate(); // Hook para navegação

    //funcao para exluir turma
    const excluirTurma = (id) => {
        setTurmas(turmas.filter(turma => turma.id !== id));
    };

    //funcao para ir para para a tela de cadastro de turma
    const irParaCadastro = () => {
        navigate('/cadastro-turma');
    };

    //funcao para ir para a tela de editar turma
    const irParaEdicao = (id) => {
        navigate(`/editar-turma/${id}`);
    };

    //funcao para voltar para a pagina anterior
    const voltar = () => {
        navigate(`/home-instituicao`); 
    };

    return (
        <div className='container-turmas-cadastradas'>
            <div className='titulo'>
                <h1>TURMAS CADASTRADAS</h1>
                <IconButton 
                    className='button-voltar' 
                    color='primary' 
                    size='large' 
                    onClick={voltar}>
                    <ArrowBackIcon fontSize='inherit' />
                </IconButton>
                <Button variant="contained" className='button-cadastro' onClick={irParaCadastro}>CADASTRAR</Button>
            </div>

            <Card sx={{ maxWidth: 1000, padding: '35px' }} >
                <CardContent className='card-cadastro'>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Turma</TableCell>
                                    <TableCell>Disciplina</TableCell>
                                    <TableCell>Professor</TableCell>
                                    <TableCell>N° de vagas</TableCell>
                                    <TableCell>Ano/Semestre</TableCell>
                                    <TableCell>Dia/Turno</TableCell>
                                    <TableCell>Ações</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {turmas.map((turma) => (
                                    <TableRow key={turma.id}>
                                        <TableCell>{turma.turma}</TableCell>
                                        <TableCell>{turma.disciplina}</TableCell>
                                        <TableCell>{turma.professor}</TableCell>
                                        <TableCell>{turma.vagas}</TableCell>
                                        <TableCell>{turma.anoSemestre}</TableCell>
                                        <TableCell>{turma.diaTurno}</TableCell>
                                        <TableCell>
                                            <IconButton 
                                                className='icon-button' 
                                                color='primary' 
                                                onClick={() => irParaEdicao(turma.id)}>
                                                <Edit />
                                            </IconButton>
                                            <IconButton color="primary" onClick={() => excluirTurma(turma.id)}>
                                                <Delete />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </div>
    );
};
