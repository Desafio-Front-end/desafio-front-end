import './pagina-inicial.css';
import { CardCadastrese } from './card-cadastre-se';
import { CardLogin } from './card-login';


export const PaginaInicial = () => {

    return (
        <>
            <div className='container-cadastrese'>
                <h2 className='titulo-paginainicial'>
                    BEM-VINDO
                </h2>
                {/* CHAMNDO OS COMPONENTES CARD DE CADASTRO E CARD DE LOGIN */}
                <div className='container-card'>
                    <CardCadastrese />
                    <CardLogin />
                </div>
            </div >
        </>
    );
}