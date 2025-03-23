import { Card, CardContent, Button } from '@mui/material';
import './home-professor.css';
import ImgDisciplina from './../../assets/img-disciplina.png';



export const HomeProfessor = () => {
    return (
        <>
            <div>
                <h2 className='titulo-paginainicial'>
                    BEM-VINDO, nome do professor
                </h2>
            </div>

            <div className='espacamento-titulo-cards'></div>


            <div className='container-home-professor'>
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