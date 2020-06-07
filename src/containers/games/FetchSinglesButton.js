import { connect } from 'react-redux';
import { fetchSingles } from '../../store/actions/stats/singles/fetchSingles';
import PrimaryButton from '../../components/0atom/button/PrimaryButton';

function mapDispatchToProps(dispatch) {
  return {
    label: 'Fetch data',
    onClick: () => dispatch(fetchSingles()),
  };
}

export default connect(null, mapDispatchToProps)(PrimaryButton);
