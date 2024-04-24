import './App.css';
import Boton from './components/botones';
import Pantalla from './components/pantalla';
import BotonClear from './components/boton-clear';
import { useState } from 'react';
import { evaluate, log } from 'mathjs';
import { wait } from '@testing-library/user-event/dist/utils';

function App() {
  const [input, setInput] = useState('');
  
  const agregarInput = (val) => {
    console.log("type of value: " + typeof val);
    setInput(input + val);
};
  
  const calcularResultado = ()=>{
    if(input){
      try {
        setInput(evaluate(input));
      } catch (error) {
        //alert('SYNTAX ERROR: ' + error.message);
        setInput("Error");
        setTimeout(function() {
          setInput("");
        }, 1500);
      }
    }else{
      alert('porfavor ingrese valores para realizar algun calculo');
    }
  }

  return (
    <div className="App">
      
      <div className='contenedor-calculadora' >
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarCLic={agregarInput}>1</Boton>
          <Boton manejarCLic={agregarInput}>2</Boton>
          <Boton manejarCLic={agregarInput}>3</Boton>
          <Boton manejarCLic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarCLic={agregarInput}>4</Boton>
          <Boton manejarCLic={agregarInput}>5</Boton>
          <Boton manejarCLic={agregarInput}>6</Boton>
          <Boton manejarCLic={agregarInput}>-</Boton>

        </div>
        <div className='fila'>
          <Boton manejarCLic={agregarInput}>7</Boton>
          <Boton manejarCLic={agregarInput}>8</Boton>
          <Boton manejarCLic={agregarInput}>9</Boton>
          <Boton manejarCLic={agregarInput}>*</Boton>

        </div>
        <div className='fila'>
          <Boton manejarCLic={calcularResultado}>=</Boton>
          <Boton manejarCLic={agregarInput}>0</Boton>
          <Boton manejarCLic={agregarInput}>.</Boton>
          <Boton manejarCLic={agregarInput}>/</Boton>

        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>       
      </div>
    </div>
  );
}

export default App;
