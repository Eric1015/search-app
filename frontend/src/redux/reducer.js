import { combineReducers } from 'redux';
import form from './reducers/form';
import items from './reducers/items';
import current_item from './reducers/current_item';
import condition from './reducers/condition';
import loading from './reducers/loading';
import custom from './reducers/custom';

export default combineReducers({
    form,
    items,
    current_item,
    condition,
    loading,
    custom
});