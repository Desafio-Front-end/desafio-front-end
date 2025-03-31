//importacao dos componentes e dependencias
import { Button, Card, CardContent, MenuItem, TextField, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import './editar-disciplina.css';
import api from '../../Api';
import { useNavigate } from 'react-router';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'react-router';

//useState armazenar os valores dos campos dos formularios
export const EditarDisciplina = () => {
    const params = useParams();
    const [nome, setNome] = useState("");
    const [preRequisitos, setPreRequisitos] = useState([]);
    const [preRequisitoSelecionado, setPreRequisitoSelecionado] = useState(0);
    const navigate = useNavigate();

    const [openErro, setOpenErro] = useState(false); //openErro controla se a mensagem sera exibida ou nao
    const handleCloseErro = (_, reason) => { //handleCloseErro fecha a mensagem de erro se clica fora
        if (reason === 'clickaway') {
            return;
        }
        setOpenErro(false);
    };

    //funcao para editar a disciplina
    const editarDisciplina = (e) => {
        e.preventDefault();
        api.patch(`disciplinas/`+params.id, { //patch atualiza a disciplina pelo params.id
            nome,
            preRequisito: preRequisitoSelecionado || null
        })
        .then(function() {
            navigate("/disciplinas-cadastradas"); //usuario é direcionado para a tela de turmas cadastradas
        })
        .catch(function() {
            setOpenErro(true); //se der errado é exibido a mensagem problema
        });
    };

    //carrega a lista de pré-requisitos
    useEffect(() => {
        api.get('disciplinas').then(function(resposta) {
            setPreRequisitos(resposta.data);
        })
    }, []);

    //busca os dados da disciplina pra preencher o formulário
    useEffect(() => {
        api.get(`disciplinas/`+params.id).then(function(resposta){ 
            setNome(resposta.data.nome);
            setPreRequisitoSelecionado(resposta.data.preRequisito);
        })
    }, [params.id]);

    return (
        <div className='container-editar'>
            <IconButton className='button-voltar' color='primary' size='large' onClick={() => navigate("/disciplinas-cadastradas")}>
                <ArrowBackIcon fontSize='inherit' />
            </IconButton>

            <form onSubmit={editarDisciplina}>
                <Card sx={{ maxWidth: 500, padding: '24px' }}>
                    <CardContent className='card-editar'>
                        <h2 className='card-editar-titulo'>EDITAR DISCIPLINA</h2>
                        <TextField
                            className='card-editar-input'
                            label="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <TextField
                            className='card-editar-input-selector'
                            label="Pré-requisito"
                            select
                            value={preRequisitoSelecionado}
                            helperText="Selecione o pré-requisito"
                            onChange={(e) => setPreRequisitoSelecionado(e.target.value)}
                        >
                            <MenuItem value={0}>Nenhum</MenuItem>
                            {preRequisitos.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.nome}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button variant="contained" className='card-editar-button' type='submit'>SALVAR</Button>
                    </CardContent>
                </Card>
            </form>
            <Snackbar open={openErro} autoHideDuration={5000} onClose={handleCloseErro}>
                <Alert onClose={handleCloseErro} severity='error' variant='filled' sx={{ width: '100%' }}>
                    Problema ao editar a disciplina!
                </Alert>
            </Snackbar>
        </div>
    );
};