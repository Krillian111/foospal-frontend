import React from 'react';
import GameList from './containers/GameList';
import CsvUpload from './containers/CsvUpload';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <CsvUpload />
        <GameList />
      </header>
    </div>
  );
}

export default App;
