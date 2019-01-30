import { combineReducers } from 'redux';
import form from './reducers/form';
import item from './reducers/item';
import condition from './reducers/condition';
import loading from './reducers/loading';

export default combineReducers({
    form,
    item,
    condition,
    loading
});