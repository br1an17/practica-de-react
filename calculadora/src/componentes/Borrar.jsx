import React from "react";
import "../hojas-de-estilo/Borrar.css" 



const Borrar = (props) =>(
    <div className= "Borrar" onClick={(props.manejarBorrar)}>
        {props.children}
    </div>
);
export default Borrar