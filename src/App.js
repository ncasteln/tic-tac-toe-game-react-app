import React, { useState } from 'react';
import StartButton from './components/StartButton';
import SelectShape from './components/SelectShape';
import './App.css';

const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className='App'>
      <h1>TicTacToe - React App</h1>
      {
        !started 
          ? <StartButton startNewGame={setStarted} />
          : <SelectShape />
      }
    </div>
  )
}

export default App;
