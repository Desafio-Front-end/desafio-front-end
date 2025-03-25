import { Button, Card, CardContent, MenuItem, TextField, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import './cadastro-disciplina.css';
import api from '../../Api';
import { useNavigate } from 'react-router';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const CadastroDisciplina = () => {
    const [nome, setNome] = useState("");
    const [preRequisitos, setPreRequisitos] = useState([]);
    const [preRequisitoSelecionado, setPreRequisitoSelecionado] = useState(0);
    const navigate = useNavigate();

    const [openErro, setOpenErro] = useState(false);
    const handleCloseErro = (_, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenErro(false);
    };


    const cadastrarDisciplina = (e) => {
        e.preventDefault();
        api.post('disciplinas', {
            nome,
            preRequisito: preRequisitoSelecionado
        })
            .then(function () {
                navigate("/disciplinas-cadastradas")
            })
            .catch(function () {
                setOpenErro(true);
            })
    }

    useEffect(() => {
        api.get('disciplinas').then(function (resposta) {
            setPreRequisitos(resposta.data);
        })
    }, [])

    return (
        <div className='container-cadastro'>

            <IconButton className='button-voltar' color='primary' size='large' onClick={() => navigate("/disciplinas-cadastradas")}>
                <ArrowBackIcon fontSize='inherit' />
            </IconButton>

            <form onSubmit={cadastrarDisciplina}>
                <Card sx={{ maxWidth: 500, padding: '24px' }} >
                    <CardContent className='card-cadastro'>
                        <h2 className='card-cadastro-titulo'>
                            CADASTRAR DISCIPLINA
                        </h2>
                        <TextField
                            className='card-cadastro-input'
                            label="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <TextField
                            className='card-cadastro-input-selector'
                            label="Pré-requisito"
                            select
                            value={preRequisitoSelecionado}
                            helperText="Selecione o pré-requisito"
                            onChange={(e) => setPreRequisitoSelecionado(e.target.value)}>
                            <MenuItem value={0}>
                                Nenhum
                            </MenuItem>
                            {preRequisitos.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.nome}
                                </MenuItem>
                            ))}
                        </TextField>

                        <Button variant="contained" className='card-cadastro-button' type='submit'>CADASTRAR</Button>
                    </CardContent>
                </Card>
            </form>
            <Snackbar open={openErro} autoHideDuration={5000} onClose={handleCloseErro}>
                <Alert
                    onClose={handleCloseErro}
                    severity='error'
                    variant='filled'
                    sx={{ width: '100%' }}
                >
                    Problema ao realizar ao cadastro!
                </Alert>
            </Snackbar>
        </div >
    );
}