import React from 'react';
import PropTypes from 'prop-types';
import NewItemFormContainer from '../containers/NewItemFormContainer';
import Item from './Item';
import ToggleButton from '../containers/ToggleButton';
import {conditions} from '../redux/actions/actions';

let ItemContainer = ({ condition, item }) => {
    if (condition === conditions.FORM) {
        return (
            <div>
                <NewItemFormContainer />
                <div>
                    <ToggleButton condition={conditions.INITIAL} value="Back" />
                </div>
            </div>
        )
    } else if (condition === conditions.ITEM) {
        return (
            <div>
                <Item item={item}/>
                <div>
                    <ToggleButton condition={conditions.FORM} value="New Item" />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <ToggleButton condition={conditions.FORM} value="New Item" />
            </div>
        )
    }
}

ItemContainer.propTypes = {
    condition: PropTypes.string.isRequired,
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string.isRequired
    })
}

export default ItemContainer;