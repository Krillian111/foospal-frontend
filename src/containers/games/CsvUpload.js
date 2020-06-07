import { connect } from 'react-redux';
import UploadButton from '../../components/1molecule/button/UploadButton';
import { extractGamesFromCsv } from '../../store/actions/stats/csv/extractGamesFromCsv';

function dispatchSinglesCsvForParsing(dispatch, domId) {
  const csvFile = document.getElementById(domId).files[0];
  csvFile.text().then((text) => dispatch(extractGamesFromCsv(text)));
}

const mapDispatchToProps = (dispatch) => ({
  onChangeIdConsumer: (domId) => dispatchSinglesCsvForParsing(dispatch, domId),
});

export default connect(null, mapDispatchToProps)(UploadButton);
