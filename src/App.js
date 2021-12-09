import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {

  const [loginValue , setLoginValue] = useState(false)

  const getLoginvalue = (value) =>{
    setLoginValue(value)
  }

  return (
    <div className="App">
      { loginValue ?  <Home /> : <Login loginvalue={getLoginvalue}/> }
      
    
    </div>
  );
}

export default App;
