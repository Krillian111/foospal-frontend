import { connect } from 'react-redux';
import SimpleTable from '../../components/2organism/table/SimpleTable';
import cellDataType from '../../components/0atom/table/cellDataType';

const columnConfigs = [
  { type: cellDataType.numberShort, headerLabel: 'Game' },
  { type: cellDataType.stringLong, headerLabel: 'PlayerA' },
  { type: cellDataType.stringLong, headerLabel: 'PlayerB' },
  { type: cellDataType.numberShort, headerLabel: 'ScoreA' },
  { type: cellDataType.numberShort, headerLabel: 'ScoreB' },
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
  };
};

export default connect(mapStateToProps, null)(SimpleTable);
