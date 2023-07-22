
import { useState } from "react";

function App() {
  const [count, setCount] =useState(0)

  const subtraction = () =>{
    setCount(count - 1)
  }

  const addition = () =>{
    setCount(count + 1)
  }

  const reSet = () => {
    setCount( 0)
  }
  return (
    <div className="App">
      

     <button onClick={subtraction} >-</button>
      {count}
      <button onClick={addition} >+</button>
      <button onClick={reSet} >Reset</button>
    </div>
  );
}

export default App;
