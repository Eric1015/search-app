import { connect } from 'react-redux';
import Item from '../components/Item';

const mapStateToProps = (state, ownProps) => ({
    item: state.current_item
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item)