import React from 'react';
import styled from 'styled-components';

import CsvUpload from '../../containers/games/CsvUpload';
import FetchSinglesButton from '../../containers/games/FetchSinglesButton';
import Login from '../../containers/login/Login';
import PlayerStats from '../../containers/players/PlayerStats';
import GameList from '../../containers/games/GameList';
import AddGame from '../../containers/games/AddGame';

const Root = styled.div`
  font-family: 'Roboto';
  background-color: #779cab;
`;

function App() {
  return (
    <Root>
      <CsvUpload />
      <FetchSinglesButton />
      <Login />
      <AddGame />
      <PlayerStats />
      <GameList />
    </Root>
  );
}

export default App;
