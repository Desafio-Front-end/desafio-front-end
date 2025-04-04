import { Button, Card, CardContent, MenuItem, TextField, IconButton } from '@mui/material';
import './home-instituicao.css';
import ImgDisciplina from './../../assets/img-disciplina.png';
import ImgTurma from './../../assets/img-turma.png';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router';

export const HomeInstituicao = () => {
    const instituicaoNome = localStorage.getItem("nome").toUpperCase()
    const navigate = useNavigate();
    return (
        <>
            <div>
                <IconButton className='button-logout' color='primary' size='large' onClick={() => { localStorage.clear(); navigate("/") }}>
                    <LogoutOutlinedIcon fontSize='inherit' />
                </IconButton>
            </div>



            <div className='container-home-instituicao'>

                <h2 className='titulo-home'>
                    BEM-VINDO, {instituicaoNome}
                </h2>

                <div className='cards-content'>

                    <Card className='card-cadastrar-turma' sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }}
                        component={Button}
                        onClick={() => window.location.href = '/turmas-cadastradas'}>
                        <img src={ImgTurma} />
                        <CardContent>
                            <h2 className='cadastrar-turma-titulo'>
                                CADASTRAR TURMA
                            </h2>
                        </CardContent>
                    </Card>

                    <Card className='card-cadastrar-disciplina' sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }}
                        component={Button}
                        onClick={() => window.location.href = '/disciplinas-cadastradas'}>
                        <img src={ImgDisciplina} />
                        <CardContent>
                            <h2 className='cadastrar-disciplina-titulo'>
                                CADASTRAR DISCIPLINA
                            </h2>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </>)
}