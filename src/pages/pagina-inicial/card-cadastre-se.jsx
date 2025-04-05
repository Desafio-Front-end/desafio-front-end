import { Button, Card, CardContent, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import api from '../../Api';

//ARRAY TIPO USUÁRIO
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

    //USE STATES DO COMPONENTE
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState(1);

    //USE STATES E FUNÇÕES DAS MENSAGENS DE SUCESSO OU ERRO AO CADASTRAR
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

    //FUNÇÃO CADASTRAR
    const cadastrar = (e) => {
        e.preventDefault();
        api.post('usuarios', {
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
                    api.post('instituicoes/adicionar', { idUsuario: resposta.data.id })

                } else if (tipoUsuario === 2) {
                    api.post('alunos/adicionar', { idUsuario: resposta.data.id })

                } else {
                    api.post('professores', { idUsuario: resposta.data.id })

                }
            })
            .catch(function () {
                setOpenErro(true);
            });
    }

    //ESTRUTURA DO CARD CADASTRE-SE
    return <Card sx={{ width: 275, padding: '24px' }} >
        <CardContent sx={{ padding: "0" }}>
            {/* AQUI EU CHAMO A FUNÇÃO  LOGIN CRIADO LÁ EM CIMA*/}
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
            {/* ESTRUTURA DA MENSAGEM DE ERRO OU  SUCESSO AO CADASTRAR */}
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