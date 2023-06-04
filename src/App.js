import logo from './logo.svg';
import './App.css';
import Sub from './components/Sub/Sub';
import Add from './components/Add/Add';
import Mul from './components/Mul/Mul';
import Div from './components/Div/Div';
import {useState} from 'react';
function App() {


  const [inputValue2,setInputValue2] = useState(0)
  const [inputValue1,setInputValue1] = useState(0)

  const printValue = () => {

    console.log('inputValue printValue',inputValue)
  }
  return (
              
    <div>
           <h1>   my first project </h1>

           <p> Test p Tag  {inputValue1} {inputValue2}</p>

           <button onClick={printValue}> print </button>
     {inputValue1 && inputValue2 ? <Add a={inputValue1} b={inputValue2} > </Add>: ''}
     {inputValue1  && inputValue2  ?<Sub a={inputValue1} b={inputValue2} > </Sub>: ''}
     {inputValue1  && inputValue2 ?<Mul a={inputValue1} b={inputValue2} > </Mul>: ''}
     {inputValue1 && inputValue2  ?<Div a={inputValue1} b={inputValue2} > </Div>: ''}
          <div> 
              <input 
              value={inputValue2}
              onChange={(e) => {

                 setInputValue2(e.target.value)
                  console.log('inputValue',inputValue2);

              }}
                type='number'
                placeholder='Enter Number2'/>

          </div> 
          <div> 
              <input 
              value={inputValue1}
              onChange={(e) => {

                 setInputValue1(e.target.value)
                  console.log('inputValue',inputValue1);

              }}
                type='number'
                placeholder='Enter Number1'/>

          </div>
    </div>

    );
            }   

export default App;
