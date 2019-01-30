import { connect } from 'react-redux';
import ItemContainer from '../components/ItemContainer';

const mapStateToProps = (state, ownProps) => ({
    condition: state.condition
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer)