import React from 'react';
import { Form, Button, Grid, Container, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

let NewItemForm = ({ handleSubmit, handleChange, disabled }) => {
    return (
        <Form onSubmit={handleSubmit} className='new-item-form'>
            <Header textAlign='center' as='h2'>New Item</Header>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column width={8}>
                        <Form.Field>
                            <label htmlFor="title">Name</label>
                            <input type="text" name="title" disabled={disabled} onChange={handleChange}></input>
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="link">Link</label>
                            <input type="text" name="link" disabled={disabled} onChange={handleChange}></input>
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="image">Image</label>
                            <input type="file" name="image" disabled={disabled} onChange={handleChange}></input>
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Form.Field>
                            <label htmlFor="descripton">Description</label>
                            <textarea type="text" name="description" disabled={disabled} onChange={handleChange}></textarea>
                        </Form.Field>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <br></br>
            <Container textAlign='center'>
                <Button type="submit" inverted color='green'>Submit</Button>
            </Container>
        </Form>
    );
}

NewItemForm.propTypes = {
    disabled: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default NewItemForm;
