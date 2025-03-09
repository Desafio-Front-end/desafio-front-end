import { Button, Card, CardContent, MenuItem, TextField } from '@mui/material';
import'./pagina-inicial.css';
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
        <div>
            <h2 className='titulo-paginainicial'>
                BEM-VINDO
            </h2>
        </div>
        
        <div className='container-cadastrese'>
            <Card sx={{ maxWidth: 500, padding: '24px' }} >
                <CardContent className='card-cadastrese'>
                    <h2 className='card-cadastro-titulo'>
                        CADASTRE-SE
                    </h2>
                    <TextField
                        className='card-cadastrese-input'
                        label="Nome"
                    />
                    <TextField
                        className='card-cadastrese-input'
                        label="Email"
                    />
                    <TextField
                        className='card-cadastrese-input'
                        label="Senha"
                    />
                    <TextField
                        className='card-cadastrese-input-selector'
                        label="Tipo de usuário"
                        select
                        defaultValue="1"
                        helperText="Selecione o tipo de usuário">
                        {opcoesTipoUsuarios.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Button variant="contained" className='card-cadastrese-button'>CADASTRAR</Button>
                </CardContent>
            </Card>
            <div className='espacamento-cards'>

            </div>
            <Card sx={{ maxWidth: 500, padding: '24px' }} >
                <CardContent className='card-login'>
                    <h2 className='card-cadastro-titulo'>
                        LOGIN
                    </h2>
                <TextField
                        className='card-login-input'
                        label="Email"
                />
                <TextField
                        className='card-login-input'
                        label="Senha"
                />
                    <Button variant="contained" className='card-login-button'>ENTRAR</Button>

                </CardContent>
            </Card>
        </div > 
        
        </>
    );
}