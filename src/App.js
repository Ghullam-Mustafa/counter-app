import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


import { useState } from 'react';

function App() {
  // const [count, setCount] = useState(0)
 const [count , setCount] = useState(0)

  const subtraction = () => {
    setCount(count - 1)

    
  }

  const addition = () => {
    setCount(count + 1)
  }

  const reSet = () => {
    setCount(0)
  }


  return (
    <div className="main">
      <div className="container ">
        <div className="row">
          <div className="col-12 "> 
          
          <button className="btn btn-success me-5" onClick={subtraction} >-</button>
            <span className='fs-4' max='10' min='0'>{count}</span>
            <button onClick={addition}  className='btn btn-primary ms-5'>+</button><br/>
           
            <button onClick={reSet} className='btn btn-danger mt-5 mx-5'>Reset</button></div>
        </div>
      </div>


    </div>
  );
}

export default App;
