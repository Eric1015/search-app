import { connect } from 'react-redux';
import { disableForm, formChange } from '../redux/actions/actions';
import NewItemForm from '../components/NewItemForm';

const mapStateToProps = (state, ownProps) => ({
    disabled: state.form.disabled
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSubmit: () => dispatch(disableForm()),
    handleChange: (event) => dispatch(formChange(event.target.name, event.target.value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewItemForm)