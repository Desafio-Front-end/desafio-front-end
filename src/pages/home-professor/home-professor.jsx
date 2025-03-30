import { Card, CardContent, Button } from '@mui/material';
import './home-professor.css';
import ImgDisciplina from './../../assets/img-disciplina.png';



export const HomeProfessor = () => {
    const professorNome = localStorage.getItem("nome").toUpperCase()
    return (
        <>
            <div>
                <h2 className='titulo-paginainicial'>
                    BEM-VINDO, {professorNome}!
                </h2>
            </div>

            <div className='espacamento-titulo-cards'></div>


            <div className='container-home-professor' onClick={() => window.location.href = 'home-professor/disciplinas-vinculadas'}>
                <Card className='card-disciplinas-vinculadas' sx={{ width: 250, height: 250, padding: '10px' }} component={Button}>
                    <img src={ImgDisciplina}/>
                    <CardContent>
                        <h2 className='cadastrar-disciplina-titulo'>
                            DISCIPLINAS VINCULADAS
                        </h2>
                    </CardContent>
                </Card>
            </div>  


        </>)
}