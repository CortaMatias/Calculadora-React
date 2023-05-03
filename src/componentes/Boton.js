import React from "react";


function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== ".") && (valor !== "=");
  };


  return (
    <div className={`container-boton ${esOperador(props.children) ? "operador" : null}`.trimEnd()}
      onClick = {() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;