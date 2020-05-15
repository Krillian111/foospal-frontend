import { connect } from 'react-redux';
import SimpleTable from '../components/2organism/table/SimpleTable';
import cellDataType from '../components/0atom/table/cellDataType';

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

const mapStateToProps = (state) => {
    const dataRows = state.gameData.games.map((game) => [
        game.id,
        game.playerA,
        game.playerB,
        game.scoreA,
        game.scoreB,
    ]);
    return {
        dataRows,
        title: 'Games',
        columnConfigs,
        tableHeaders,
    };
};

export default connect(mapStateToProps, null)(SimpleTable);
