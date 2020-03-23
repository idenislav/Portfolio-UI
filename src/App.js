import React from 'react';
import './App.css';
import { BrowserRouter as Router } from  'react-router-dom';
import NavLine from './Config/Nav';
import Routes from './Config/Routes';


function App() {
  return (
    <div className="App">
      <Router>
        <NavLine/>
        <Routes/>
      </Router>   
      
    </div>
  );
}

export default App;
