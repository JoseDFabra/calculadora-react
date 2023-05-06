import React from "react";
import '../css/botones.css'

function Boton(props){
  const esOperador = valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };
  return(
    <button className={`boton-contenedor ${esOperador(props.children) ? 'operador': ''}`.trim()} onClick={() => props.manejarCLic(props.children)}>
      {props.children}
    </button>
  );
}

export default Boton