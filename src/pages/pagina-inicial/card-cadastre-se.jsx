import { Button, Card, CardContent, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const opcoesTipoUsuarios = [
    {
        value: 1,
        label: 'Instituição',
    },
    {
        value: 2,
        label: 'Aluno',
    },
    {
        value: 3,
        label: 'Professor',
    },
];

export const CardCadastrese = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState(1);

    const [openSucesso, setOpenSucesso] = useState(false);
    const handleCloseSucesso = (_, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSucesso(false);
    };

    const [openErro, setOpenErro] = useState(false);
    const handleCloseErro = (_, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenErro(false);
    };

    const cadastrar = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/usuarios', {
            nome,
            email,
            senha,
            tipoUsuario
        })
            .then(function (resposta) {
                console.log(resposta);
                setNome('');
                setEmail('');
                setSenha('');
                setTipoUsuario(1);
                setOpenSucesso(true);
                if (tipoUsuario === 1) {
                    axios.post('http://localhost:3000/instituicoes/adicionar', { idUsuario: resposta.data.id })

                } if (tipoUsuario === 2) {
                    axios.post('http://localhost:3000/alunos/adicionar', { idUsuario: resposta.data.id })

                } else {
                    axios.post('http://localhost:3000/professores', { idUsuario: resposta.data.id })

                }
            })
            .catch(function () {
                setOpenErro(true);
            });
    }
    return <Card sx={{ width: 275, padding: '24px' }} >
        <CardContent sx={{ padding: "0" }}>
            <form className='card-cadastrese' onSubmit={cadastrar}  >
                <h2 className='card-cadastro-titulo'>
                    CADASTRE-SE
                </h2>

                <TextField
                    className='card-cadastrese-input'
                    label="Nome"
                    size='small'
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <TextField
                    className='card-cadastrese-input'
                    label="Email"
                    size='small'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    className='card-cadastrese-input'
                    label="Senha"
                    size='small'
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <TextField
                    className='card-cadastrese-input-selector'
                    label="Tipo de usuário"
                    size='small'
                    select
                    required
                    value={tipoUsuario}
                    onChange={(e) => setTipoUsuario(e.target.value)}>
                    {opcoesTipoUsuarios.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <Button variant="contained" className='card-cadastrese-button' type='submit'>CADASTRAR</Button>
            </form>
            <Snackbar open={openSucesso} autoHideDuration={5000} onClose={handleCloseSucesso}>
                <Alert
                    onClose={handleCloseSucesso}
                    severity='success'
                    variant='filled'
                    sx={{ width: '100%' }}
                >
                    Cadastro realizado com sucesso!
                </Alert>
            </Snackbar>

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
        </CardContent>
    </Card>
}