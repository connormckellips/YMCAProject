import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  const navigate = useNavigate();
  
  function handleLogin() {
    navigate('/login');
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p> Welcome to the YMCA Program Registration App! </p>
        <Button onClick = {handleLogin}> Login </Button>
      </header>
    </div>
  );
}

export default App;