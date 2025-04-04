import { Button, Card, CardContent, TextField, IconButton } from '@mui/material';
import './home-aluno.css';
import ImgDisciplina from './../../assets/img-disciplina.png';
import ImgMatricula from './../../assets/img-matricula.png';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router';

export const HomeAluno = () => {
    const alunoNome = localStorage.getItem("nome").toUpperCase()
    const navigate = useNavigate();
    return (
        <>

            <div>
                <IconButton className='button-logout' color='primary' size='large' onClick={() => {localStorage.clear(); navigate("/")}}>
                    <LogoutOutlinedIcon fontSize='inherit' />
                </IconButton>
            </div>
            
            <div>
                <h2 className='titulo-home'>
                    BEM-VINDO, {alunoNome}!
                </h2>
                <div className='cards-content'>
                    <Card className='card-fazer-matricula' sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }} component={Button} onClick={() => window.location.href = '/matricula'}>
                        <CardContent>
                            <img src={ImgMatricula} />
                            <h2 className='cadastrar-turma-titulo'>
                                FAZER MATRÍCULA
                            </h2>
                        </CardContent>
                    </Card>


                    <Card className='card-cadastrar-disciplinas' sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }}
                        component={Button}
                        onClick={() => window.location.href = '/disciplinas'}>
                        <img src={ImgDisciplina} />
                        <CardContent>
                            <h2 className='cadastrar-disciplina-titulo'>
                                DISCIPLINAS
                            </h2>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </>)
}