import { connect } from 'react-redux';
import MainContainer from '../components/MainContainer';

const mapStateToProps = (state, ownProps) => ({
    condition: state.condition
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer)