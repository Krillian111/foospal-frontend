import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function saveItemToStore() {
    const csvFile = document.getElementById('csvinput').files[0];
    csvFile.text()
    .then(text => console.log(text));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="file" id="csvinput" onChange={saveItemToStore} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
