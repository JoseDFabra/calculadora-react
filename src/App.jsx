import './App.css';
import logoItm from './images/logo-itm.png';
import Boton from './components/botones';
import Pantalla from './components/pantalla';
import BotonClear from './components/boton-clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  
  const agregarInput= (val) =>{
    if((val === '*' || val === '.' || val === '+' || val === '/' ||val === '-') && (input.slice(-1) === '*' || input.slice(-1) === '.' || input.slice(-1) === '+' || input.slice(-1) === '/' ||input.slice(-1) === '-')){
      let array = input.split('');
      array[array.length-1] = val;
      //console.log(array);
      let nuevo = array.join("");
      setInput(nuevo);
      
    }
    else{
      setInput(input + val);
      //console.log(`guardado: ${input} --- ultimo valor: ${input.slice(-1)}  ---  ingresado:${val}`)
    } 
  };
  
  const calcularResultado = ()=>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert('porfavor ingrese valores para realizar algun calculo');
    }
  }

  return (
    <div className="App">
      <div className='contenedor-logo-itm' >
        <img 
          src={logoItm}
          className='logo-itm' 
          alt='Logo del ITM' />
      </div>
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
