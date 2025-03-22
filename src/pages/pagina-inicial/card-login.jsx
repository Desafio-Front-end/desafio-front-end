import { Button, Card, CardContent, TextField } from '@mui/material';
import { useState } from 'react';
import api from '../../Api';
import { useNavigate } from 'react-router';

export const CardLogin = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
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
                    }

                })


            })
            .catch(function () {
                console.log("Erro ao realizar login");
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

        </CardContent>
    </Card>
}