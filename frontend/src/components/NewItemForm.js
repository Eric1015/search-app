import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

let NewItemForm = ({handleSubmit, handleChange, disabled}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" disabled={disabled} onChange={handleChange}></input>
            </Form.Field>
            <Form.Field>
                <label htmlFor="link">Link</label>
                <input type="text" name="link" disabled={disabled} onChange={handleChange}></input>
            </Form.Field>
            <Form.Field>
                <label htmlFor="image">Image</label>
                <input type="file" name="image" disabled={disabled} onChange={handleChange}></input>
            </Form.Field>
            <Form.Field>
                <label htmlFor="descripton">Description</label>
                <textarea type="text" name="description" disabled={disabled} onChange={handleChange}></textarea>
            </Form.Field>
            <Button type="submit" inverted color='green'>Submit</Button>
        </Form>
    );
}

NewItemForm.propTypes = {
    disabled: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default NewItemForm;
