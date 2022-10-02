
import './App.css';
import Boton from './componentes/Boton';
import imagen from "./imagenes/descarga.png";
import Contador from './componentes/Contador';
import { useState} from "react";

function App() {

  const [numClicks,setNumClics] = useState(0)

  const manejarClick = () => {
   setNumClics (numClicks + 1);
  }
  const reiniciarContador = () => {
 setNumClics (0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
        className="logo"
        src={imagen}
        alt="Logo deFreeCodeCamp" />
      </div>
<div className='contenedor'>
<Contador numClic={numClicks}/>

    <Boton
    texto="Clic"
    esBotonDeClick={true}
    manejarClick={manejarClick} />
    <Boton
    texto="Reiniciar"
    esBotonDeClick={false}
    manejarClick={reiniciarContador} />
</div>

    </div>
  );
}

export default App;
