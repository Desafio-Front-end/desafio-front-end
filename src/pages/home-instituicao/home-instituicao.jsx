import { Button, Card, CardContent, MenuItem, TextField } from '@mui/material';
import './home-instituicao.css';
import ImgDisciplina from './../../assets/img-disciplina.png';
import ImgMatricula from './../../assets/img-matricula.png';
import ImgTurma from './../../assets/img-turma.png';


export const HomeInstituicao = () => {
    const instituicaoNome = localStorage.getItem("nome").toUpperCase()
    return (
        <>
            <div>
                <h2 className='titulo-paginainicial'>
                    BEM-VINDO, {instituicaoNome}
                </h2>
            </div>

            <div className='espacamento-titulo-cards'></div>

            <div className='container-home-instituicao'>
                <div onClick={() => window.location.href = '/cadastro-turma'}>
                    <Card className='card-cadastrar-turma' sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }} component={Button}>
                        <img src={ImgTurma} />
                        <CardContent>
                            <h2 className='cadastrar-turma-titulo'>
                                CADASTRAR TURMA
                            </h2>
                        </CardContent>
                    </Card>
                </div>

                <div className='espacamento-cards'></div>

                <div onClick={() => window.location.href = '/cadastro-disciplina'}>
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