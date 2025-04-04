import { Card, CardContent, Button } from '@mui/material';
import './home-professor.css';
import ImgDisciplina from './../../assets/img-disciplina.png';



export const HomeProfessor = () => {
    const professorNome = localStorage.getItem("nome").toUpperCase()
    return (
        <>


            <div className='container-home-professor' >
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