import { Button, Card, CardContent, MenuItem, TextField } from '@mui/material';
import './editar-disciplina.css';

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

export const EditarDisciplina = () => {
    return (
        <div className='container-editar'>

            <Card sx={{ maxWidth: 500, padding: '24px' }} >
                <CardContent className='card-editar'>
                    <h2 className='card-editar-titulo'>
                        EDITAR DISCIPLINA
                    </h2>
                    <TextField
                        className='card-editar-input'
                        label="Nome"
                    />
                    <TextField
                        className='card-editar-input-selector'
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

                    <Button variant="contained" className='card-editar-button'>SALVAR</Button>
                </CardContent>
            </Card>
        </div >
    );
}