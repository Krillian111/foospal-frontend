import { connect } from 'react-redux';
import UploadButton from '../components/1molecule/button/UploadButton';
import { parseSinglesCsv } from '../store/actions/stats/csv/parseCsv';

function dispatchSinglesCsvForParsing(dispatch, domId) {
    const csvFile = document.getElementById(domId).files[0];
    csvFile.text().then((text) => dispatch(parseSinglesCsv(text)));
}

const mapDispatchToProps = (dispatch) => ({
    onChangeIdConsumer: (domId) =>
        dispatchSinglesCsvForParsing(dispatch, domId),
});

export default connect(null, mapDispatchToProps)(UploadButton);
