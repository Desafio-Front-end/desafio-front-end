import { Button, Card, CardContent } from '@mui/material';
import './home-aluno.css';
import ImgDisciplina from './../../assets/img-disciplina.png';
import ImgMatricula from './../../assets/img-matricula.png';


export const HomeAluno = () => {
    const alunoNome = localStorage.getItem("nome").toUpperCase()
    return (
        <>
            <div className='container-home-aluno'>
                <h2 className='titulo-home'>
                    BEM-VINDO, {alunoNome}!
                </h2>
                <div className='cards-content'>
                    <Card className='card-fazer-matricula' sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }} component={Button} onClick={() => window.location.href = '/matricula'}>
                        <CardContent>
                            <img src={ImgMatricula} />
                            <h2 className='cadastrar-turma-titulo'>
                                FAZER MATRÍCULA
                            </h2>
                        </CardContent>
                    </Card>


                    <Card className='card-cadastrar-disciplinas' sx={{ maxWidth: 175, maxHeight: 300, padding: '10px' }}
                        component={Button}
                        onClick={() => window.location.href = '/disciplinas'}>
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