import './Mensaje.css'

/* ---------------------------------------------------------------- */
/* Componente basado en una función (no guarda estado -> stateless) */
/* ---------------------------------------------------------------- */
//export function Mensaje() {
function Mensaje(props) {
    //let msj = 'Mensaje Nro 1'
    /* let msj = props.msj
    let fondo = props.fondo */
    
    //let { msj, fondo } = props //destructuring object (parámetros ruteado por props)
    let { msj, fondo } = props.match.params //destructuring object (parámetros ruteado por ruta)

    return (
        <div className="Mensaje">
            <div className="jumbotron" style={{backgroundColor: fondo}}>
                <h3>{msj}</h3>
                {/* {4+3} */}
                {/* {new Date().toLocaleString()} */}
                {/* {Date.now()} */}
                <hr/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sunt ad officiis non distinctio, minima esse nesciunt nulla dolore laudantium quas, magnam alias veritatis dolorem impedit atque nemo ex omnis?
                </p>
            </div>
        </div>
    )
}

export default Mensaje
/* export {
    Mensaje
} */