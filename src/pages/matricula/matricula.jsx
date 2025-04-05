import { useState, useEffect } from 'react';
import api from '../../Api';
import { useNavigate } from 'react-router';
import './matricula.css';
import {
    Button, Checkbox, Table, TableBody, TableCell, TableContainer,
    TableHead, TablePagination, TableRow, Paper, IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// OBJETOS PARA MAPEAR O DIA/TURNO
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


export const Matricula = () => {

    //USE STATES DO COMPONENTE
    const [turmas, setTurmas] = useState([]);
    const [matriculasAluno, setMatriculasAluno] = useState([])
    //HOOK PARA PEGAR A FUNÇÃO DE NAVEGAÇÃO DE PÁGINA
    const navigate = useNavigate();

    //USE EFFECTS CRIADO PARA TRAZER A LISTA DE TURMAS 
    // QUANDO A PÁGINA FOR CARREGADA INICIALMENTE
    useEffect(() => {
        api.get('turmas/listar').then(function (resposta) {
            setTurmas(resposta.data);
        })
    }, []);

    //USE EFFECTS CRIADO PARA TRAZER A LISTA DE MATRICULAS DO ALUNO
    // QUANDO A PÁGINA FOR CARREGADA INICIALMENTE
    useEffect(() => {
        api.get('matriculas/listarMatriculasAluno').then(function (resposta) {
            setMatriculasAluno(resposta.data);
        })
    }, []);

    //USE EFFECTS CRIADO PARA FILTRAR APENAS AS TURMAS QUE O ALUNO TEM MÁTRICULA
    useEffect(() => {
        setTurmas((oldTurmas) => {
            const turmasMatriculadas = matriculasAluno.map(matricula => matricula.idTurma)
            const turmasFiltradas = oldTurmas.filter((turma) => {
                return !turmasMatriculadas.includes(turma.id);
            })
            return turmasFiltradas;
        });
    }, [matriculasAluno]);


    //FUNÇÃO MATRICULAR
    const matricular = () => {

        const matriculas = linhasSelecionadas.map((idTurma) =>
            api.post('matriculas/cadastro', {
                idTurma: idTurma,
                status: "em andamento"
            })
        )
        Promise.all(matriculas).then(function () {
            navigate('/disciplinas')
        })


    }

    //LOGÍCA DE PAGINAÇÃO
    const porPagina = 4;
    const [pagina, setPagina] = useState(0);
    const linhasPaginadas = turmas.slice(pagina * porPagina, (pagina + 1) * porPagina);

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
        if (event.target.checked) {
            setLinhasSelecionadas(turmas.map(linha => linha.id))
        } else {
            setLinhasSelecionadas([]);
        }
    }
    return (
        <>
            {/*ESTRUTURA DO BOTÃO VOLTAR <-- VOLTA PARA A TELA HOME ALUNO  */}
            <div className='container-matricula'>
                <IconButton className='button-voltar' color='primary' size='large' onClick={() => navigate("/home-aluno")}>
                    <ArrowBackIcon fontSize='inherit' />
                </IconButton>
                {turmas.length === 0 ?
                    <>
                        {/*ESTRUTURA DO CONTEÚDO DA TELA QUANDO NÃO HÁ MATRÍCULA */}
                        <div className='content-matricula-finalizada'>
                            <h2 className='tittle-matricula'>Sem matrícula disponível</h2>
                            <div className='matricula-finalizada-p'>
                                <p>É um prazer ter você como estudante!
                                    Informamos que não há necessidade de renovar sua matrícula.</p>
                                <p>Estamos à disposição para ajudar você com qualquer dúvida.</p>
                                <p>Bons estudos!</p>
                            </div>
                        </div>
                        <div className='img-tudo-certo'>

                        </div>
                    </> :
                    <>
                        {/*ESTRUTURA DA TABELA DE MATRICULA E DO BOTÃO MATRICULAR*/}
                        <div className='tittle-button-matricula'>
                            <h2 className='tittle-matricula'>MATRÍCULA</h2>
                            <Button variant="contained" className='button-matricular' disabled={linhasSelecionadas.length === 0}
                                onClick={matricular}>MATRICULAR</Button>
                        </div>
                        <TableContainer component={Paper} sx={{ marginTop: '16px' }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>TURMA</TableCell>
                                        <TableCell align="center">DISCIPLINA</TableCell>
                                        <TableCell align="center">PROFESSOR</TableCell>
                                        <TableCell align="center">N° VAGAS</TableCell>
                                        <TableCell align="center">ANO/SEMESTRE</TableCell>
                                        <TableCell align="center">DIA</TableCell>
                                        <TableCell align="center">TURNO</TableCell>
                                        <TableCell align="center"><Checkbox onChange={toggleAllLinhas} /></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {linhasPaginadas.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align='center'>{row.id}</TableCell>
                                            <TableCell align="center">{row.disciplina.nome}</TableCell>
                                            <TableCell align="center">{row.professor.usuario.nome}</TableCell>
                                            <TableCell align="center">{row.numVagas}</TableCell>
                                            <TableCell align="center">{row.anoSemestre}</TableCell>
                                            <TableCell align="center">{diasSemana[row.horarioTurno[0]]}</TableCell>
                                            <TableCell align="center">{turno[row.horarioTurno[1]]}</TableCell>
                                            <TableCell align="center"><Checkbox checked={linhasSelecionadas.includes(row.id)}
                                                onChange={(event) => toggleLinha(event, row.id)} /></TableCell>
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
                }

            </div>
        </>
    );
}