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


            <div className='container-home-professor'>
                <Card sx={{ width: 300, height: 300, padding: '10px' }} className='container-disciplinas-vinculadas'>
                    <CardContent className='card-disciplinas-vinculadas'>
                        <img src={ImgDisciplina} className='disciplina-imagem'/>
                        <h2 className='cadastrar-disciplina-titulo'>
                            DISCIPLINAS VINCULADAS
                        </h2>
                    </CardContent>
                </Card>
            </div>


        </>)
}