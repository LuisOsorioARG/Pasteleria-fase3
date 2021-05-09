import React from 'react'

import './Contador.css'

/* ---------------------------------------------------------------- */
/*    Componente basado en una clase (guarda estado -> statefull)   */
/* ---------------------------------------------------------------- */
class Contador extends React.Component {
    
    constructor(props) {
        super(props)
        console.log(`Contador ${props.id} Constructor`)
    }

    state = {
        contador : Number(this.props.valor),
        contador2 : Number(this.props.valor)
    }

    incrementar(numero) {
        let { id } = this.props

        if(numero === 1) {
            this.setState(prevstate => ({contador : prevstate.contador + 1}), () => {
                let { contador, contador2 } = this.state
                this.props.enviarContadorAlPadre({
                    contador,
                    contador2,
                    id
                })
            })
        }
        else if(numero === 2) {
            this.setState(prevstate => ({contador2 : prevstate.contador2 + 1}), () => {
                let { contador, contador2 } = this.state

                console.log('---------------------------')
                console.log(`Contador2 incrementar(${id}): ${contador2} >`)
                this.props.enviarContadorAlPadre({
                    contador,
                    contador2,
                    id
                })
            })
        }

    }

    render() {
        let { id, fondo } = this.props
        let { contador, contador2 } = this.state

        return (
            <div className="Contador">
                <div className="jumbotron" style={{backgroundColor: fondo}}>
                    <h3>Contador {id}</h3>
                    <hr/>

                    {/* -------------------------- */}
                    {/*          Contador 1        */}
                    {/* -------------------------- */}
                    <h4 className="alert alert-info w-50"> Valor: {contador}</h4>
                    <button className="btn btn-success mb-3" onClick={() => this.incrementar(1)}>Incrementar</button>

                    {/* -------------------------- */}
                    {/*          Contador 2        */}
                    {/* -------------------------- */}
                    <h4 className="alert alert-info w-50"> Valor: {contador2}</h4>
                    <button className="btn btn-success" onClick={() => this.incrementar(2)}>Incrementar 2</button>

                </div>
            </div>
        )
    }
}

export default Contador