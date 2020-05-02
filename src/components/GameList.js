import React from 'react';
import PropTypes from 'prop-types';
import SimpleTable from './table/SimpleTable';
import cellDataType from './table/cellDataType';

const GameList = ({ title, games }) => {
    const columnConfigs = [
        cellDataType.numberShort,
        cellDataType.stringLong,
        cellDataType.stringLong,
        cellDataType.numberShort,
        cellDataType.numberShort,
    ];
    const tableHeaders = [
        { text: 'Game' },
        { text: 'PlayerA' },
        { text: 'PlayerB' },
        { text: 'ScoreA' },
        { text: 'ScoreB' },
    ];
    const dataRows = games.map((game) => {
        return [game.id, game.playerA, game.playerB, game.scoreA, game.scoreB];
    });

    return (
        <SimpleTable
            title={title}
            columnConfigs={columnConfigs}
            tableHeaders={tableHeaders}
            dataRows={dataRows}
        />
    );
};

GameList.propTypes = {
    title: PropTypes.string.isRequired,
    games: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            playerA: PropTypes.string,
            playerB: PropTypes.string,
            scoreA: PropTypes.number,
            scoreB: PropTypes.number,
        })
    ).isRequired,
};

export default GameList;
