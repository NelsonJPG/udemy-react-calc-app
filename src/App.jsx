/* eslint no-eval: 0 */
import React, { useState } from 'react';
import Result from './components/Result';
import words from 'lodash.words';
import './App.css'
import MathOperations from './components/MathOperations';
import Functions from './components/Functions';
import Numbers from './components/Numbers';

const App = () => {
  const [value, setValue] = useState('')
  const items = words(value, /[^-^+^*^/]+/g)
  console.log("app", items)

  return (
  <main className="react-calculator">
    <Result value={ items[items.length - 1] || 0 } />
    <Numbers onClickNumber={ number => setValue( value + number )} />
    <Functions 
      onContentClear={ () => { 
        console.log("clear")
        setValue("");
      }}
      onDelete={ () => {
        if(value.length){
          console.log("delete")
          const newValue = value.substring(0, value.length - 1);
          setValue( newValue )
        }
      }}
    />
    <MathOperations 
      onClickOperation={ operation => setValue( value + operation ) }
      onClickEqual={ equal => setValue( eval( value ).toString()) }
    />
  </main>
)
}

export default App;
