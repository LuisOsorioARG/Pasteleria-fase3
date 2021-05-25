import './Precios.css'

function Precios(props) {
    //let msj = 'Precio Nro 1'
    /* let msj = props.msj
    let fondo = props.fondo */
    
    let { msj, fondo } = props.match.params //destructuring object (parámetros ruteado por ruta)

    return (
        <div className="Precios">
            <div className="jumbotron" style={{backgroundColor: fondo}}>
                <h3>{msj}</h3>
                {/* {4+3} */}
                {/* {new Date().toLocaleString()} */}
                {/* {Date.now()} */}
                <hr/>
                <p>
                    Aqui va el precio del Chocolate, por ejemplo ALPINO X CINCO KILOS=$600
                </p>
            </div>
        </div>
    )
}

export default Precios; 
