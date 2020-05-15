import { connect } from 'react-redux';
import { fetchSingles } from '../store/actions/stats/singles/fetchSingles';
import PrimaryButton from '../components/0atom/button/PrimaryButton';

const mapStateToProps = () => ({
    label: 'Fetch data',
});

const mapDispatchToProps = {
    onClick: fetchSingles,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryButton);
