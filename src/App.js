import React from 'react';
import styled from 'styled-components';

import CsvUpload from './containers/CsvUpload';
import FetchSinglesButton from './containers/FetchSinglesButton';
import Login from './containers/login/LoginButton';
import LoginModal from './containers/login/LoginModal';
import PlayerStats from './containers/PlayerStats';
import GameList from './containers/GameList';

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
      <LoginModal />
      <PlayerStats />
      <GameList />
    </Root>
  );
}

export default App;
