import { Button, Card, CardContent, MenuItem, TextField } from '@mui/material';
import './pagina-inicial.css';
const opcoesTipoUsuarios = [
    {
        value: '1',
        label: 'Instituição',
    },
    {
        value: '2',
        label: 'Aluno',
    },
    {
        value: '3',
        label: 'Professor',
    },
];

export const PaginaInicial = () => {
    return (
        <>
            

            <div className='container-cadastrese'>
                <h2 className='titulo-paginainicial'>
                    BEM-VINDO
                </h2>
                <div className='container-card'>
                <Card sx={{ width: 275, padding: '24px' }} >
                    <CardContent className='card-cadastrese'>
                        <h2 className='card-cadastro-titulo'>
                            CADASTRE-SE
                        </h2>
                        <TextField
                            className='card-cadastrese-input'
                            label="Nome"
                            size='small'
                        />
                        <TextField
                            className='card-cadastrese-input'
                            label="Email"
                            size='small'
                        />
                        <TextField
                            className='card-cadastrese-input'
                            label="Senha"
                            size='small'
                        />
                        <TextField
                            className='card-cadastrese-input-selector'
                            label="Tipo de usuário"
                            size='small'
                            select
                            defaultValue="1">
                            {opcoesTipoUsuarios.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <Button variant="contained" className='card-cadastrese-button'>CADASTRAR</Button>
                    </CardContent>
                </Card>

                <Card sx={{ width: 275, padding: '24px', display: 'flex', alignItems: 'center' }} >
                    <CardContent className='card-login'>
                        <h2 className='card-cadastro-titulo'>
                            LOGIN
                        </h2>
                        <TextField
                            className='card-login-input'
                            label="Email"
                            size='small'
                        />
                        <TextField
                            className='card-login-input'
                            label="Senha"
                            size='small'
                        />
                        <Button variant="contained" className='card-login-button'>ENTRAR</Button>

                    </CardContent>
                </Card>
                </div>
                
            </div >

        </>
    );
}