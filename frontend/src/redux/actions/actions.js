import axios from 'axios'
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"

export const loadItems = () => {
    return (dispatch) => {
        dispatch({type: 'START_LOADING'});
        let proms = [];
        for (let id of "abcdefghijklmnopqrstuvwxyz".split("")) {
            let prom = loadItemsWithKey(id);
            proms.push(prom);
        }
        Promise.all(proms).then(() => {
            dispatch({type: 'FINISH_LOADING'});
        });
    }
}

export const loadItemsWithKey = (key) => {
    return (dispatch) => {
        dispatch({type: 'START_LOADING'});
        axios.get(`${url}items/${key}`)
        .then((result) => {
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
            loadItemsWithKey(item.name.substring(0, 1));
        }).catch((err) => {
            console.log(err);
        });
    }
}

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

export const conditions = {
    FORM: 'FORM',
    ITEM: 'ITEM',
    INITIAL: 'INITIAL'
}