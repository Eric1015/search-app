import React from 'react';
import PropTypes from 'prop-types';
import NewItemForm from '../containers/NewItemForm';
import Item from './Item';
import ToggleButton from '../containers/ToggleButton';
import {conditions} from '../redux/actions/actions';

let ItemContainer = ({ condition, item }) => {
    if (condition === conditions.FORM) {
        return (
            <div>
                <NewItemForm />
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
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
}

export default ItemContainer;