import { useState } from 'react'
import './App.css'


function App() {
  const[input,setinput]=useState('');
  const[result,setrusult]=useState('');

  const handleClick =(value)=>{
    if (value==='='){
      try{
        const evalresult=eval(input);
        setrusult(evalresult);
        setinput('');
      }
      catch(error){
        setrusult('error')
        setinput('');
      };
      
    }
    else if(value === 'Clear'){
        setinput('');
        setrusult('');
      }
      else{
        setinput((prev)=>prev+value);
      }
  };
  return (
    <div className="calculator">
      <h2>Chanukah Calculator</h2>
      <div className="screen">
        <input type="text" readOnly value={input} placeholder="0" />
        <input type="text" readOnly value={result} placeholder="Result" />
      </div>
      <div className="button-row">
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button className="equals" onClick={() => handleClick('=')}>=</button>
        <button className="clear" onClick={() => handleClick('Clear')}>Clear</button>
      </div>
    </div>
      
  )
}

export default App