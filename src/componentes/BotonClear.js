import React from "react";


const BotonClear = (props) =>(
  <div className="boton-clear"
  onClick={() => props.manejarClic()}>
    Clear
  </div>
);

export default BotonClear;