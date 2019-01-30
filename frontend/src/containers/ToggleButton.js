import { connect } from 'react-redux';
import { setCondition } from '../redux/actions/actions';
import CustomButton from '../components/CustomButton';

const mapStateToProps = (state, ownProps) => ({
    value: ownProps.value
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setCondition(ownProps.condition))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomButton)