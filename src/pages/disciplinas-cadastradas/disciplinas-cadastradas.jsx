import { Delete, Edit } from '@mui/icons-material';
import { Button, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import './disciplinas-cadastradas.css';

export const DisciplinasCadastradas = () => {
    const disciplinas = Array(3).fill({}); 

  return(
    <div className='container-disciplinas-cadastradas'>
        <div className='titulo-disciplinas-cadastradas'>
            <h1>DISCIPLINAS CADASTRADAS</h1>
            <Button variant="contained" className='button-cadastro'>CADASTRAR</Button>
        </div>

        <Card sx={{maxWidth: 1000, padding: '5px' }} >
            <CardContent>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" width="40%">Disciplina</TableCell>
                                <TableCell align="center" width="40%">Pré-requisito</TableCell>  
                                <TableCell width="20%"></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {disciplinas.map ((_,index) => (
                                <TableRow key={index}>
                                    <TableCell width="40%"></TableCell>
                                    <TableCell width="40%"></TableCell>
                                    <TableCell width="20%">
                                        <IconButton className='icon-button' color='primary'>
                                            <Edit />
                                        </IconButton>
                                        <IconButton className='icon-button' color="primary">
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>           
            </CardContent>
        </Card>
    </div>
  );
};