import { Delete, Edit, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Button, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../Api';
import './turmas-cadastradas.css';

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

export const TurmasCadastradas = () => {
    const [turmas, setTurmas] = useState([]);

    const navigate = useNavigate(); // Hook para navegação

    const carregarTurmas = () => {
        api.get('turmas/listar')
            .then(response => {
                setTurmas(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar as turmas cadastradas: ", error);
            });
    };

    useEffect(() => {
        carregarTurmas();
    }, [])
    //funcao para exluir turma
    const excluirTurma = (id) => {
        api.delete(`turmas/${id}`)
            .then(() => {
                carregarTurmas();
            })
            .catch(error => {
                console.error("Erro ao deletar turma:", error);
            });
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
            <div>

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

                <Card  >
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
                                            <TableCell>Turma {turma.id}</TableCell>
                                            <TableCell>{turma.disciplina.nome}</TableCell>
                                            <TableCell>{turma.professor.usuario.nome}</TableCell>
                                            <TableCell>{turma.numVagas}</TableCell>
                                            <TableCell>{turma.anoSemestre}</TableCell>
                                            <TableCell>{diasSemana[turma.horarioTurno[0]]}/{turno[turma.horarioTurno[1]]}</TableCell>
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
        </div >
    );
};
