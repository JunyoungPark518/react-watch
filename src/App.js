import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="header"></div>
      <div className="body">
        <div className="js-clock">
          <h1>
            Time
          </h1>
          <form className="js-form form">
            <input className="name" type="text" placeholder="What is your name?"></input>
          </form>
          <h2 className="js-greeting"></h2>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}



export default App;
