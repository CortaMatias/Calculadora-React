import './App.css';
import logoIndependiente from "./imagenes/logo.png"
import Boton from "./componentes/Boton";
import "./style-sheets/Boton.css"
import Pantalla from "./componentes/Pantalla"
import "./style-sheets/Pantalla.css"
import BotonClear from "./componentes/BotonClear";
import "./style-sheets/BotonClear.css"
import {useState} from "react";
import {evaluate} from "mathjs";
function App() {

  const [input, setInput] = useState("");

  const agregarInput = val => {

    setInput(input + val);
  };

  const clearPantalla = () => {
    setInput("");
  }

 const calcularResultado = () => {       
  if(input){
    const regex = /[^0-9][^0-9]+/;
    if (regex.test(input)) {
      alert("La expresión matemática ingresada no es válida");
    } else {
      setInput(evaluate(input.toString()));
    }
  } else {
    alert("Por favor ingrese valores para realizar los cálculos");
  }    
};



  return (
    <div className="App">
      <div className='container-logo'>
        <img className='logo'
          src={logoIndependiente}
          alt="logo"
        />
      </div>
      <div className ="container-calculadora">   
      <Pantalla input={input}/>     
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton></div>
        <div className='fila'>
          <BotonClear manejarClic={clearPantalla}/>
        </div>
      </div>
    </div>
  );
}

export default App;
