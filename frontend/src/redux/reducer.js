import { combineReducers } from 'redux';
import form from './reducers/form';
import items from './reducers/items';
import condition from './reducers/condition';
import loading from './reducers/loading';
import searchBar from './reducers/searchBar';

export default combineReducers({
    form,
    items,
    condition,
    loading,
    searchBar
});