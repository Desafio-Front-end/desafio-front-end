import { Button, Card, CardContent, MenuItem, TextField } from '@mui/material';
import './home-instituicao.css';
import ImgDisciplina from './../../assets/img-disciplina.png';
import ImgMatricula from './../../assets/img-matricula.png';
import ImgTurma from './../../assets/img-turma.png';


export const HomeInstituicao = () => {
    return (
        <>
            <div>
                <h2 className='titulo-paginainicial'>
                    BEM-VINDO, nome da Instituição
                </h2>
            </div>

            <div className='espacamento-titulo-cards'></div>

            <div className='container-home-instituicao'>
                <div>
                    <Card className='card-cadastrar-turma' sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }} component={Button}>
                        <img src={ImgTurma} />
                        <CardContent>
                            <h2 className='cadastrar-turma-titulo'>
                                CADASTRAR TURMA
                            </h2>
                        </CardContent>
                    </Card>
                </div>
                <div className='espacamento-cards'>

                </div>
                <div>
                    <Card className='card-cadastrar-disciplina' sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }} component={Button}>
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