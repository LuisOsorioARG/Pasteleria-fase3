import React from 'react'

import './Contador.css'

/* ---------------------------------------------------------------- */
/*    Componente basado en una clase (guarda estado -> statefull)   */
/* ---------------------------------------------------------------- */
class Contador extends React.Component {
    
    constructor(props) {
        super(props)
        console.log(`Id ${props.id} Constructor`)
        console.log(`cantidad ${props.valor} Constructor`)
    }

    state = {
        id: this.props.id,
        contador : Number(this.props.valor),
        precio: Number(this.props.precio),
        total: Number(this.props.precio),
        cantidadVisible : this.props.valor,
        valorBlanco : ""
        
    }

    incrementar() {
        this.setState(prevstate => ({contador : prevstate.contador + 1}), () => {
            console.log(this.state.contador)
        });
        this.setState(prevstate => ({total : prevstate.contador * prevstate.precio}), () => {
            let { id } = this.state;
            let { total } = this.state;
            let datos = this.state;
            this.props.enviarContadorAlPadre({ id, total });
        });
    }

    decrementar() {
        console.log(`Contador ${this.props.id} Decrementar`)
        var contadorX = this.state.contador; 
        console.log(`ContadorX ${contadorX}`);

        
        if (contadorX > 1)
            {
            console.log(`Contador ${this.props.id} Es mayor a Cero`);
            this.setState(prevstate => ({contador : prevstate.contador - 1}), () => {console.log(this.state.contador)})
            this.setState(prevstate => ({total : prevstate.contador * prevstate.precio}), () => 
            { 
                let { id } = this.state;
                let { total } = this.state;
                let datos = this.state;
                this.props.enviarContadorAlPadre({ id, total });
            });
        }
    }

    render() {
        console.log('Contador render')

        let { id, fondo,nombreItem } = this.props
        let { contador } = this.state
        let { precio } = this.state
        let { total } = this.state
        let { cantidadVisible } = this.state

        return (
            <div className="Contador">

                <h3 className="alert alert-success">

                    <div class="row">
                        <div class="co-md-1">{contador}</div> 
                        <div class="col"> 
                            <input type="text" value={nombreItem}></input>                            </div> 
                        <div class="co-md-1"> 
                            <button className="btn btn-success my-1" onClick={() => this.incrementar()}>+</button>
                            <button className="btn btn-success my-1" onClick={() => this.decrementar()}>-</button>
                        </div>
                        <div class="col">{precio}</div>
                        <div class="col">{total}</div>
                        <div class="co-md-1"> 
                            <button className="btn btn-success my-1">x</button>
                        </div>
                    </div>
                </h3>
            </div>
        )
    }
}

export default Contador