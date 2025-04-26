import React, { useState} from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>{counter}</p>
        <button onClick={()=> setCounter(counter+1)}>Increment</button>
        <button onClick={()=> setCounter(counter-1)}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
