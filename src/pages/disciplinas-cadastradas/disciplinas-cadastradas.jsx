import { Delete, Edit } from '@mui/icons-material';
import { Button, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import './disciplinas-cadastradas.css';
import api from '../../Api';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';

export const DisciplinasCadastradas = () => {
    const navigate = useNavigate();
    const [disciplinasCadastradas, setDisciplinasCadastradas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);    
    //const disciplinas = Array(3).fill({}); 

    const carregarDisciplinas = () => {
        //e.preventDefault();        
        setIsLoading(true);

        api.get('disciplinas/instituicao')
            .then(response => {
                console.log("Dados recebidos:", response.data);
                setDisciplinasCadastradas(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Erro ao carregar as disciplinas cadastradas: ", error);
                setIsLoading(false);
            });        
    };
    
    useEffect(() => {
        carregarDisciplinas();
    }, []);

    const irParaCadastroDisciplina = () => {
        navigate('/cadastro-disciplina');
    };

    const editarDisciplina = (id) => {
        navigate(`/editar-disciplina/${id}`);
    };

    const deletarDisciplina = (id) => {
        api.delete(`disciplinas/${id}`)
            .then(() => {
                carregarDisciplinas(); 
            })
            .catch(error => {
                console.error("Erro ao deletar disciplina:", error);
            });        
    };
    
    return(                     
        <div className='container-disciplinas-cadastradas'>          

            <IconButton className='button-voltar' color='primary' size='large' onClick={() => navigate("/home-instituicao")}>
                <HomeIcon fontSize='inherit' />
            </IconButton>           

                <div className='titulo-disciplinas-cadastradas'>
                    <h1>DISCIPLINAS CADASTRADAS</h1>
                    <Button variant="contained" className='button-cadastro' onClick={irParaCadastroDisciplina}>CADASTRAR</Button>                    
                </div>

                <Card sx={{maxWidth: 1000, padding: '5px' }} >
                    <CardContent>
                        <TableContainer>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell width="40%">Disciplina</TableCell>
                                        <TableCell width="40%">Pré-requisito</TableCell>  
                                        <TableCell width="20%"></TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {isLoading ? (
                                        <TableRow>
                                            <TableCell colSpan={3} align="center"> Carregando...</TableCell>
                                        </TableRow>
                                    ) : disciplinasCadastradas.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={3} align="center"> Não há disciplinas cadastradas</TableCell>
                                        </TableRow>
                                    ) : (
                                        disciplinasCadastradas.map ((disciplina) => (
                                        <TableRow key={disciplina.id}>
                                            <TableCell width="40%">{disciplina.nome}</TableCell>
                                            <TableCell width="40%">{disciplina.preRequisito ?
                                                disciplinasCadastradas.find(d => d.id === disciplina.preRequisito)?.nome || "Pré-requisito não encontrado" : "Nenhum"}
                                            </TableCell>
                                            <TableCell width="20%">
                                                <IconButton className='icon-button' color='primary' onClick={() => editarDisciplina(disciplina.id)}>
                                                    <Edit />
                                                </IconButton>
                                                <IconButton className='icon-button' color="primary" onClick={() => deletarDisciplina(disciplina.id)}>
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                                </TableBody>
                            </Table>
                        </TableContainer>           
                    </CardContent>
                </Card>
    </div>
  );
};
