import { Card, CardContent } from '@mui/material';
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


            <div className='container-home-instituicao'>
                <Card sx={{ width: 300, height: 300, padding: '10px' }}>
                    <CardContent className='card-cadastrardisciplina'>
                        <img src={ImgDisciplina} />
                        <h2 className='cadastrar-disciplina-titulo'>
                            DISCIPLINAS VINCULADAS
                        </h2>
                    </CardContent>
                </Card>
            </div>


        </>)
}