/* eslint no-eval: 0 */
import React, { useState, FC } from 'react';
import Result from './components/Result';
import words from 'lodash.words';
import './App.css'
import MathOperations from './components/MathOperations';
import Functions from './components/Functions';
import Numbers from './components/Numbers';

const App: FC = () => {
  const [stack, setStack] = useState('')
  const items = words(stack, /[^-^+^*^/]+/g)
  //console.log("app", items)
  const value = items.length ? items[items.length - 1] : "0";
  return (
  <main className="react-calculator">
    <Result value={ value } />
    <Numbers onClickNumber={ number => setStack( stack + number )} />
    <Functions 
      onContentClear={ () => { 
        //console.log("clear")
        setStack("");
      }}
      onDelete={ () => {
        if(stack.length){
          //console.log("delete")
          const newstack = stack.substring(0, stack.length - 1);
          setStack( newstack )
        }
      }}
    />
    <MathOperations 
      onClickOperation={ operation => setStack( stack + operation ) }
      onClickEqual={ equal => setStack( eval( stack ).toString()) }
    />
  </main>
)
}

export default App;
