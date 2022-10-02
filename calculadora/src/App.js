
import './App.css';
import imagen from "./imagenes/descarga.png";
import Boton from "./componentes/Boton.jsx";
import Pantalla from './componentes/Pantalla';
import Borrar from './componentes/Borrar';
import{useState} from "react";
import {evaluate} from "mathjs"



function App() {

const [imput, setImput]= useState("");

const agregarImput = valor => {
   setImput(imput + valor);
};
const resultado = () => {
  setImput(evaluate(imput));
}


  return (
    <div className="App">
     <div className='contenedor'>
      <img
      src={imagen}
      className="logo"
      alt='logo de freeCodeCamp' />
     </div>
     <div className="calculadora">
      <Pantalla imput={imput}/>
      <div className="fila">
        <Boton manejarClic={agregarImput}>1</Boton>
        <Boton manejarClic={agregarImput}>2</Boton>
        <Boton manejarClic={agregarImput}>3</Boton>
        <Boton manejarClic={agregarImput}>+</Boton>
      </div>
      <div className="fila">
         <Boton manejarClic={agregarImput}>4</Boton>
         <Boton manejarClic={agregarImput}>5</Boton>
         <Boton manejarClic={agregarImput}>6</Boton>
         <Boton manejarClic={agregarImput}>-</Boton>
        </div>
      <div className="fila">
      <Boton manejarClic={agregarImput}>7</Boton>
      <Boton manejarClic={agregarImput}>8</Boton>
      <Boton manejarClic={agregarImput}>9</Boton>
      <Boton manejarClic={agregarImput}>*</Boton>
      </div>
      <div className="fila">
      <Boton manejarClic={resultado}>=</Boton>
      <Boton manejarClic={agregarImput}>0</Boton>
      <Boton manejarClic={agregarImput}>.</Boton>
      <Boton manejarClic={agregarImput}>/</Boton>
      </div>
      <div className="fila">
      <Borrar manejarBorrar= {()=>setImput("")}>
        Borrar</Borrar>
      </div>
     </div>
  
    </div>
  );
}

export default App;
