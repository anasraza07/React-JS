import './App.css'
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter === 20) return;
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  }

  const removeValue = () => {
    if (counter === 0) return
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Anas Raza</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add {counter}</button>
      <button onClick={removeValue}>Remove {counter}</button>
    </>
  )
}

export default App
