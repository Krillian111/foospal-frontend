import React from 'react';
import styled from 'styled-components';

import CsvUpload from './containers/CsvUpload';
import FetchSinglesButton from './containers/FetchSinglesButton';
import Login from './containers/login/LoginButton';
import LoginDialog from './containers/login/LoginDialog';
import PlayerStats from './containers/PlayerStats';
import GameList from './containers/GameList';

const Root = styled.div`
    font-family: 'Roboto';
    background-color: #d2e6cf;
`;

function App() {
    return (
        <Root>
            <CsvUpload />
            <FetchSinglesButton />
            <Login />
            <LoginDialog />
            <PlayerStats />
            <GameList />
        </Root>
    );
}

export default App;
