import './Cabecalho.css';
import Botao from '../Botao'; 

const Cabecalho = () => {
    return (
        <header className='cabecalho'>
            <div>
            <img src='/imagens/estudoflix.png' alt='Logo Estudo Flix' />
            </div>
            <div>
                <Botao>HOME</Botao>
                <Botao>NOVO VIDEO</Botao>
            </div>
        </header>
    )
}

export default Cabecalho;