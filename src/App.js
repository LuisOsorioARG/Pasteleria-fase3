import React from 'react'
import './App.css';
import Contador from './componentes/Contador';
import Mensaje from './componentes/Mensaje';
import Item from './componentes/Item';

/* imports de router */
/* imports de router */
/* imports de router */
/* imports de router */
/* imports de router */
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from './componentes/Navbar';
import { Rutanovalida } from './componentes/Rutanovalida';




function MostrarDatosHijo(props) {
  let { id, contador, contador2, total } = props.datos

  if(id) {
    return <h3 className="alert alert-success">Contador del Hijo({id}):  (total){total} (C1){contador} (C2){contador2}</h3>
  }
  else {
    return <h3 className="alert alert-success">sin datos</h3>
  }
}

//esto lo saque desde el sitio oficial de raec
const numbers = [1, 2, 3, 4, 5];

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function NumberList2(props) {
  const numbers = props.numbers;
  const data2 = { id:'33434', valor:505};
  const listItems = numbers.map((number) =>
    <Item id={number}
    nombreItem="Galletitas" 
    valor={number}
    precio="100" 
    fondo="orange"
    //enviarContadorAlPadre={datos => this.recibirDatosItem(datos)}/>
    enviarContadorAlPadre={data2}/>
  );
  return (
    <div>{listItems}</div>
  );
}



/* function App() { */
class App extends React.Component {

 

  constructor() {
    super()
    console.log(`App Constructor`)
    let users = ['lucho','luis'];

    //this.recibirDatosHijo = this.recibirDatosHijo.bind(this)
  }

  state = {
    datos: {contador : null, contador2 : null, id: null, total : null}
  }

  recibirDatosHijo(datos) {
  //recibirDatosHijo({ contador, id }) {
    let { contador, contador2, id, total } = datos
    console.log(`> App recibirDatosHijo(${id}): Total=(${total}): (C1)${contador} (C2)${contador2}`)
    //this.setState({ datos : datos})
    this.setState({ datos })
  }

  recibirDatosItem(datos) {
    //recibirDatosHijo({ contador, id }) {
      console.log(`> App recibirDatosItem - datos (${datos}) `)

    let { id, total } = datos
      console.log(`> App recibirDatosItem - ID (${id}) TOTAL (${total})`)
      //this.setState({ datos : datos})
      this.setState({ datos })
    }

  render() {

    //let { contador,contador2,id } = this.state.datos

    return (
      <div className="App">
        <div className="container mt-3">
          <div className="jumbotron">
            <h1>Mi Proyecto React</h1>
            <hr/>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio numquam, eaque error aliquam unde praesentium at dignissimos neque saepe eos molestias perspiciatis earum dolorem consectetur vero modi, voluptas possimus repellat.
            </p>


          <button> Agregar Item</button>

            <hr/>
            <hr/>

            <h2>Router</h2>
            <br/>

            <BrowserRouter>
              <Navbar />
              <Switch>

                {/* Componente ruteado para ruta raíz*/}
                {/* <Route exact path="/" component={
                  () => <Mensaje msj="Mensaje Nro 1" fondo="green" />
                } /> */}

                {/* -------------------- */}
                {/*      Redirección     */}
                {/* -------------------- */}
                <Route exact path="/">
                  {/* <Redirect to="/mensaje1" /> */}
                  <Redirect to="/mensaje1/Mensaje Nro 1/green" />
                </Route>

                {/* ----------------------------- */}
                {/*    Ruteado sin parámetros     */}
                {/* ----------------------------- */}
                <Route path="/mensaje" component={Mensaje}></Route>

                {/* --------------------------------------- */}
                {/*    Ruteado con parámetros por props     */}
                {/* --------------------------------------- */}
                {/* Componentes ruteados */}
                {/* <Route path="/mensaje1" component={
                  () => <Mensaje msj="Mensaje Nro 1" fondo="green" />
                } />
                <Route path="/mensaje2" component={
                  () => <Mensaje msj="Mensaje Nro 2" fondo="orangered" />
                } />
                <Route path="/mensaje3" component={
                  () => <Mensaje msj="Mensaje Nro 3" fondo="blue" />
                } /> */}

                {/* --------------------------------------- */}
                {/*    Ruteado con parámetros por ruta      */}
                {/* --------------------------------------- */}
                {/* Componentes ruteados */}
                <Route path="/mensaje1/:msj/:fondo" component={Mensaje} />
                <Route path="/mensaje2/:msj/:fondo" component={Mensaje} />
                <Route path="/mensaje3/:msj/:fondo" component={Mensaje} />

                {/* Componente para ruta no definida */}
                <Route component={Rutanovalida} />

              </Switch>

            </BrowserRouter>

            <hr/>
            <hr/>

            <h2>Up Lifting</h2>
            <br/>

            {/* <h3 className="alert alert-success">Contador del Hijo({id}): (C1){contador} (C2){contador2}</h3> */}

            {/* ---------------------------- */}
            {/*   Render condicional: &&     */}
            {/* ---------------------------- */}
            {/* { id &&
            <h3 className="alert alert-success">Contador del Hijo({id}): (C1){contador} (C2){contador2}</h3>
            }
            { !id &&
            <h3 className="alert alert-danger">Contador del Hijo: No hay Datos</h3>
            } */}

            {/* -------------------------------------------- */}
            {/*   Render condicional: Operador Ternario ?:   */}
            {/* -------------------------------------------- */}
            {/* { id?
              <h3 className="alert alert-success">Contador del Hijo({id}): (C1){contador} (C2){contador2}</h3>
              :
              <h3 className="alert alert-danger">Contador del Hijo: No hay Datos</h3>
            } */}

            {/* ---------------------------------------------- */}
            {/*   Render condicional: Dentro de un componente  */}
            {/* ---------------------------------------------- */}




            <MostrarDatosHijo datos={this.state.datos} />

            <Item id="4" 
              nombreItem="Cheesecake" 
              valor="1" 
              precio="1500" 
              fondo="orange"
              enviarContadorAlPadre={datos => this.recibirDatosItem(datos)}
              />

            <Item id="1" 
              nombreItem="Galletitas" 
              valor="1" 
              precio="100" 
              fondo="orange"
              enviarContadorAlPadre={datos => this.recibirDatosItem(datos)}
              />


<NumberList numbers={numbers}/>

<NumberList2 numbers={numbers}/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
