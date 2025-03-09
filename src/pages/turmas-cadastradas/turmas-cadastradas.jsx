import { Delete, Edit } from '@mui/icons-material';
import { Button, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import './turmas-cadastradas.css';

export const TurmasCadastradas = () => {
    const turmas = Array(8).fill({}); 

  return(
    <div className='container-turmas-cadastradas'>
        <div className='titulo'>
            <h1>TURMAS CADASTRADAS</h1>
            <Button variant="contained" className='button-cadastro'>CADASTRAR</Button>
        </div>

        <Card sx={{maxWidth: 1000, padding: '35px' }} >
            <CardContent className='card-cadastro'>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Turma</TableCell>
                                <TableCell>Disciplina</TableCell>
                                <TableCell>Professor</TableCell>
                                <TableCell>N° de vagas</TableCell>
                                <TableCell>Ano/Semestre</TableCell>
                                <TableCell>Dia/Turno</TableCell>
                                <TableCell>Horário</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {turmas.map ((_,index) => (
                                <TableRow key={index}>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>
                                        <IconButton className='icon-button' color='primary'>
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="primary">
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))};
                        </TableBody>
                    </Table>
                </TableContainer>           
            </CardContent>
        </Card>
    </div>
  );
};