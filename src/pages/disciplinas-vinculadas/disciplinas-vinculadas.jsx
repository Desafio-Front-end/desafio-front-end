import { Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import './disciplinas-vinculadas.css';

export const DisciplinasVinculadas = () => {
    const disciplinasVinculadas = Array(7).fill({});

    return (
        <div className='container-disciplinas-vinculadas'>
            <div className='titulo-disciplinas-vinculadas'>
                <h1>DISCIPLINAS VINCULADAS</h1>
            </div>

            <Card sx={{ maxWidth: 1000, padding: '5px' }} >
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
                                    <TableCell align="center">Status</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {disciplinasVinculadas.map((_, index) => (
                                    <TableRow key={index}>
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