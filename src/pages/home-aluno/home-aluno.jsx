import { Button, Card, CardContent, MenuItem, TextField } from '@mui/material';
import './home-aluno.css';
import ImgDisciplina from './../../assets/img-disciplina.png';
import ImgMatricula from './../../assets/img-matricula.png';
import ImgTurma from './../../assets/img-turma.png';


export const HomeAluno = () => {
    return (
        <>
            <div>
                <h2 className='titulo-paginainicial'>
                    BEM-VINDO, nome do aluno
                </h2>
            </div>

            <div className='espacamento-titulo-cards'></div>

            <div className='container-home-instituicao'>
                <div>
                    <Card sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }}>
                        <CardContent className='card-cadastrarturma'>
                            <img src={ImgMatricula} />
                            <h2 className='cadastrar-turma-titulo'>
                                FAZER MATRÍCULA
                            </h2>
                        </CardContent>
                    </Card>
                </div>
                <div className='espacamento-cards'>

                </div>
                <div>
                    <Card sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }}>
                        <CardContent className='card-cadastrardisciplina'>
                            <img src={ImgDisciplina} />
                            <h2 className='cadastrar-disciplina-titulo'>
                                DISCIPLINAS
                            </h2>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </>)
}