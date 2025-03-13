import { Delete, Edit } from '@mui/icons-material';
import { Button, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import './disciplinas.css';

export const Disciplinas = () => {
    const disciplinas = Array(7).fill({}); 

  return(
    <div className='container-disciplinas'>
        <div className='titulo-disciplinas'>
            <h1>DISCIPLINAS</h1>
        </div>

        <Card sx={{maxWidth: 1000, padding: '5px' }} >
            <CardContent>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Turma</TableCell>
                                <TableCell align="center">Disciplina</TableCell>  
                                <TableCell align="center">Professor</TableCell>
                                <TableCell align="center">Ano/Semestre</TableCell> 
                                <TableCell align="center">Dia/Turno</TableCell>
                                <TableCell align="center">Horário</TableCell> 
                                <TableCell align="center">Status</TableCell>                           
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {disciplinas.map ((_,index) => (
                                <TableRow key={index}>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
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