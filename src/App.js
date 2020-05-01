import React from 'react';
import styled from 'styled-components';
import GameList from './containers/GameList';
import CsvUpload from './containers/CsvUpload';
import FetchSinglesButton from './containers/FetchSinglesButton';
import PlayerStats from './containers/PlayerStats';

const Root = styled.div`
    font-family: 'Roboto';
`;

function App() {
    return (
        <Root className="App">
            <header className="App-header">
                <CsvUpload />
                <FetchSinglesButton />
                <PlayerStats />
                <GameList />
            </header>
        </Root>
    );
}

export default App;
