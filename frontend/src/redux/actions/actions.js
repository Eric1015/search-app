import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:8080/api/"

export const loadItems = () => {
    return (dispatch) => {
        dispatch({type: 'START_LOADING'});
        let proms = [];
        for (let id of "abcdefghijklmnopqrstuvwxyz".split("")) {
            let prom = axios.get(`${url}items/${id}`)
            .then((result) => {
                let items = result.data;
                dispatch({type: 'LOAD_ITEMS_WITH_KEY', items, key: id});
            }).catch((err) => {
                console.log(err);
            });
            proms.push(prom);
        }
        Promise.all(proms).then(() => {
            console.log("Data has been read");
            dispatch({type: 'FINISH_LOADING'});
        });
    }
}

export const loadItemsWithKey = (key) => {
    return (dispatch) => {
        dispatch({type: 'START_LOADING'});
        axios.get(`${url}items/${key}`)
        .then((result) => {
            console.log("data has been read for key: " + key);
            let items = result.data;
            dispatch({type: 'LOAD_ITEMS_WITH_KEY', items, key: key});
        }).catch((err) => {
            console.log(err);
        });
    }
}

export const addItem = (item) => {
    return (dispatch) => {
        axios.post(`${url}items`, item)
        .then((result) => {
            let item = result.data;
            loadItemsWithKey(item.title.substring(0, 1));
        }).catch((err) => {
            console.log(err);
        });
    }
}

export const setItem = (item) => ({
    type: 'SET_ITEM',
    item
})

export const disableForm = () => ({
    type: 'DISABLE_FORM'
})

export const enableForm = () => ({
    type: 'ENABLE_FORM'
})

export const resetForm = () => ({
    type: 'RESET_FORM'
})

export const formChange = (name, value) => ({
    type: 'FORM_CHANGE',
    name,
    value
})

export const SubmitForm = () => ({
    type: 'SUMIT_FORM'
})

export const setCondition = (condition) => ({
    type: 'SET_CONDITION',
    condition
})

export const finishLoading = () => ({
    type: 'FINISH_LOADING'
})

export const startLoading = () => ({
    type: 'START_LOADING'
})

export const handleSearchBarChange = (value) => {
    return (dispatch, getState) => {
        console.log(getState());
        dispatch({type: 'START_SEARCH', value: value});
        let results = [];
        console.log(value);
        if (value.length !== 0) {
            let key = value.substring(0, 1);
            let items = getState().items[key];
            console.log(items);
            console.log(items.length);
            console.log(items[0]);
            for (let item of items) {
                let currIndex = 0;
                let matched = true;
                let str = item.title;
                for (let i = 0; i < value.length; i++) {
                    for (let j = currIndex; j < str.length && currIndex < str.length; j++) {
                        if (str.charAt(j) === value.charAt(i)) {
                            currIndex = j + 1;
                            break;
                        } else if (currIndex === str.length - 1) {
                            matched = false;
                            break;
                        }
                    }
                    if (!matched) {
                        break;
                    }
                }
                if (matched) {
                    results.push(item);
                }
            }
        }
        dispatch({type: 'FINISH_SEARCH', results: results})
    }
}

export const searchBarResultSelect = (e, {result}) => ({
    type: 'SEARCH_RESULT_SELECT',
    result
})

export const conditions = {
    FORM: 'FORM',
    ITEM: 'ITEM',
    INITIAL: 'INITIAL'
}