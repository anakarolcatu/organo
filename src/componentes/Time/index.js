import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    return (
        //para fazer renderização condicional no react, precisamos fazer assim: se a primeira condição for true, ele exibe o que está a direita
            (props.colaboradores.length > 0) ? <section className='time' style={css}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
                </div>
            </section> 
            : ''
        )
    }
    
    export default Time;