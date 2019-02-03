import React from 'react';
import PropTypes from 'prop-types';
import NewItemFormContainer from '../containers/NewItemFormContainer';
import ItemContainer from '../containers/ItemContainer';
import ToggleButton from '../containers/ToggleButton';
import {conditions} from '../redux/actions/actions';
import { Container } from 'semantic-ui-react';

let MainContainer = ({ condition, item }) => {
    if (condition === conditions.FORM) {
        return (
            <div>
                <NewItemFormContainer />
                <Container textAlign='center'>
                    <ToggleButton condition={conditions.INITIAL} value="Back" />
                </Container>
            </div>
        )
    } else if (condition === conditions.ITEM) {
        return (
            <div>
                <ItemContainer item={item}/>
                <Container textAlign='center'>
                    <ToggleButton condition={conditions.FORM} value="New Item" />
                </Container>
            </div>
        )
    } else {
        return (
            <Container textAlign='center'>
                <ToggleButton condition={conditions.FORM} value="New Item" />
            </Container>
        )
    }
}

MainContainer.propTypes = {
    condition: PropTypes.string.isRequired,
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string.isRequired
    })
}

export default MainContainer;