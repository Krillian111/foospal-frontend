import React from 'react';
import GameList from './containers/GameList';
import CsvUpload from './containers/CsvUpload';
import styled from 'styled-components';

const Root = styled.div`
font-family: 'Roboto';
`;

function App() {
  return (
    <Root className="App">
      <header className="App-header">
        <CsvUpload />
        <GameList />
      </header>
    </Root>
  );
}

export default App;
