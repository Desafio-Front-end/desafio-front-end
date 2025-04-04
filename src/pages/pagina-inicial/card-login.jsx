import { Button, Card, CardContent, TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import api from '../../Api';
import { useNavigate } from 'react-router';

export const CardLogin = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const [openErro, setOpenErro] = useState(false);
    const handleCloseErro = (_, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenErro(false);
    };

    const login = (e) => {
        e.preventDefault();
        setOpenErro(false);
        api.post('auth/login',
            {
                email,
                senhaInformada: senha
            }
        )
            .then(function (resposta) {
                localStorage.setItem("access_token", resposta.data.access_token);
                api.get("auth/profile").then((resultado) => {
                    console.log(resultado)
                    localStorage.setItem("nome", resultado.data.nome);
                    if (resultado.data.tipoUsuario === 2) {
                        navigate("/home-aluno");
                    } else if (resultado.data.tipoUsuario === 1) {
                        navigate("/home-instituicao");
                    } else {
                        navigate("/home-professor");
                    }

                })


            })
            .catch(function () {
                console.log("Erro ao realizar login");
                setOpenErro(true);
            })
    }

    return <Card sx={{ width: 275, padding: '24px', display: 'flex', alignItems: 'center' }} >
        <CardContent className='card-login'>
            <h2 className='card-cadastro-titulo'>
                LOGIN
            </h2>
            <TextField
                className='card-login-input'
                label="Email"
                size='small'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                className='card-login-input'
                label="Senha"
                size='small'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <Button variant="contained" className='card-login-button' onClick={login}>ENTRAR</Button>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={openErro} autoHideDuration={5000} onClose={handleCloseErro}>
                <Alert
                    onClose={handleCloseErro}
                    severity='error'
                    variant='filled'
                    sx={{ width: '100%' }}
                >
                    E-mail ou Senha incorreto!
                </Alert>
            </Snackbar>
        </CardContent>
    </Card>
}