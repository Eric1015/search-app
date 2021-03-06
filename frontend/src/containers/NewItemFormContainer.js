import { connect } from 'react-redux';
import { submitForm, formChange, imageUpload } from '../redux/actions/actions';
import NewItemForm from '../components/NewItemForm';

const mapStateToProps = (state, ownProps) => ({
    disabled: state.form.disabled
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSubmit: () => dispatch(submitForm()),
    handleChange: (event) => dispatch(formChange(event.target.name, event.target.value)),
    handleImageUpload: (event) => dispatch(imageUpload(event))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewItemForm)