import { connect } from 'react-redux';
import PrimaryButton from '../components/button/PrimaryButton';
import { fetchSingles } from '../store/actions/backend/fetchSingles';

const mapStateToProps = () => ({
    label: 'Fetch data',
});

const mapDispatchToProps = {
    onClickHandler: fetchSingles,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryButton);
