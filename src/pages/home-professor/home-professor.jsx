import { Card, CardContent, Button, IconButton } from '@mui/material';
import './home-professor.css';
import ImgDisciplina from './../../assets/img-disciplina.png';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router';


export const HomeProfessor = () => {
    const professorNome = localStorage.getItem("nome").toUpperCase()
    const navigate = useNavigate();
    return (
        <>

            <div>
                <IconButton className='button-logout' color='primary' size='large' onClick={() => {localStorage.clear(); navigate("/")}}>
                    <LogoutOutlinedIcon fontSize='inherit' />
                </IconButton>
            </div>

            <div>
                <h2 className='titulo-professor'>
                    BEM-VINDO, {professorNome}!
                </h2>
                <div className='cards-content-professor'>
                    <Card className='card-disciplinas-vinculadas' sx={{ width: 250, height: 250, padding: '10px' }}
                        component={Button}
                        onClick={() => window.location.href = 'home-professor/disciplinas-vinculadas'}>
                        <img src={ImgDisciplina} />
                        <CardContent>
                            <h2 className='cadastrar-disciplina-titulo'>
                                DISCIPLINAS VINCULADAS
                            </h2>
                        </CardContent>
                    </Card>
                </div>
            </div>


        </>)
}