import { Button, Card, CardContent, MenuItem, TextField } from '@mui/material';
import './cadastro-disciplina.css';

const opcoesPreRequisito = [
    {
        value: '1',
        label: 'Programação Back-end',
    },
    {
        value: '2',
        label: 'Testes de Software',
    },
    {
        value: '3',
        label: 'Redes de Computadores',
    },
    {
        value: '4',
        label: 'Desenvolvimento Web',
    },
];

export const CadastroDisciplina = () => {
    return (
        <div className='container-cadastro'>

            <Card sx={{ maxWidth: 500, padding: '24px' }} >
                <CardContent className='card-cadastro'>
                    <h2 className='card-cadastro-titulo'>
                        CADASTRAR DISCIPLINA
                    </h2>
                    <TextField
                        className='card-cadastro-input'
                        label="Nome"
                    />
                    <TextField
                        className='card-cadastro-input-selector'
                        label="Pré-requisito"
                        select
                        defaultValue="1"
                        helperText="Selecione o pré-requisito">
                        {opcoesPreRequisito.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Button variant="contained" className='card-cadastro-button'>CADASTRAR</Button>
                </CardContent>
            </Card>
        </div >
    );
}