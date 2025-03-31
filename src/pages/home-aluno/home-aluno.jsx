import { Button, Card, CardContent, MenuItem, TextField } from '@mui/material';
import './home-aluno.css';
import ImgDisciplina from './../../assets/img-disciplina.png';
import ImgMatricula from './../../assets/img-matricula.png';
import ImgTurma from './../../assets/img-turma.png';


export const HomeAluno = () => {
    const alunoNome = localStorage.getItem("nome").toUpperCase()
    return (
        <>
            <div>
                <h2 className='titulo-paginainicial'>
                    BEM-VINDO, {alunoNome}!
                </h2>
            </div>

            <div className='espacamento-titulo-cards'></div>

            <div className='container-home-aluno'>
                <div onClick={() => window.location.href = '/matricula'}>
                    <Card className='card-fazer-matricula' sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }} component={Button}>
                        <CardContent>
                            <img src={ImgMatricula} />
                            <h2 className='cadastrar-turma-titulo'>
                                FAZER MATRÍCULA
                            </h2>
                        </CardContent>
                    </Card>
                </div>

                <div className='espacamento-cards'></div>

                <div onClick={() => window.location.href = '/disciplinas'}>
                    <Card className='card-cadastrar-disciplinas' sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }} component={Button}>
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