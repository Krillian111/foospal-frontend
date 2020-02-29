import React from 'react';
import GameList from './containers/GameList';
import CsvUpload from './containers/CsvUpload';
import styled from 'styled-components';
import PlayerStats from './containers/PlayerStats';

const Root = styled.div`
font-family: 'Roboto';
`;

function App() {
  return (
    <Root className="App">
      <header className="App-header">
        <CsvUpload />
        <PlayerStats />
        <GameList />
      </header>
    </Root>
  );
}

export default App;
