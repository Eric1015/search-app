import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:8080/api/"

export const loadItems = () => (dispatch) => {
    dispatch({ type: 'START_LOADING' });
    let proms = [];
    for (let id of "abcdefghijklmnopqrstuvwxyz".split("")) {
        let prom = dispatch(loadItemsWithKey(id));
        proms.push(prom);
    }
    Promise.all(proms).then(() => {
        console.log("Data has been read");
        dispatch({ type: 'FINISH_LOADING' });
    });
    return Promise.resolve();
}

export const loadItemsWithKey = (key) => (dispatch) => {
    dispatch({ type: 'START_LOADING' });
    axios.get(`${url}items/${key}`)
        .then((result) => {
            let items = result.data;
            dispatch({ type: 'LOAD_ITEMS_WITH_KEY', items, key: key });
        }).catch((err) => {
            console.log(err);
        });
    return Promise.resolve();
}

export const addItem = (item) => (dispatch) => {
    dispatch(startLoading());
    axios.post(`${url}items`, item)
        .then((result) => {
            let item = result.data;
            dispatch(loadItemsWithKey(item.title.substring(0, 1)))
                .finally(() => {
                    dispatch(finishLoading());
                });
        }).catch((err) => {
            console.log(err.response.data);
            dispatch(finishLoading());
        });
    return Promise.resolve();
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

export const imageUpload = (event) => (dispatch, getState) => {
    event.preventDefault();
    const file = event.target.files[0];
    const fd = new FormData();
    fd.append('file', file);
    axios({
        method: 'post',
        url: `${url}image-upload`,
        data: fd
    })
        .then((result) => {
            console.log(result.data.image_url);
            dispatch({type: 'IMAGE_UPLOAD', image: result.data.image_url});
            console.log("Image uploaded!");
        }).catch((err) => {
            console.log("Fail uploading!");
        });
    return Promise.resolve();
}

export const submitForm = () => (dispatch, getState) => {
    dispatch(disableForm());
    const form = getState().form;
    const { title, description, link, image } = form;
    const data = { title, description, link, image };
    dispatch(addItem(data))
        .then((result) => {
            dispatch(resetForm());
            dispatch(setCondition(conditions.INITIAL));
        }).catch((err) => {

        }).finally(() => {
            dispatch(enableForm());
        })
    return Promise.resolve();
}

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
        dispatch({ type: 'START_SEARCH', value: value });
        let results = [];
        value = value.split(" ").join("");
        if (value.length !== 0) {
            let key = value.substring(0, 1);
            let items = getState().items[key];
            for (let item of items) {
                let currIndex = 0;
                let matched = true;
                let str = item.title;
                if (value.length <= str.length) {
                    for (let i = 0; i < value.length; i++) {
                        if (currIndex > str.length - 1) {
                            matched = false;
                            break;
                        }
                        for (let j = currIndex; j < str.length; j++) {
                            if (str.charAt(j).toLowerCase() === value.charAt(i).toLowerCase()) {
                                currIndex = j + 1;
                                break;
                            } else if (currIndex >= str.length - 1) {
                                matched = false;
                                break;
                            }
                            currIndex++;
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
        }
        dispatch({ type: 'FINISH_SEARCH', results: results })
    }
}

export const handleSearchBarResultSelect = (e, result) => {
    return (dispatch) => {
        dispatch({ type: 'SEARCH_RESULT_SELECT', result });
        dispatch({ type: 'SET_ITEM', item: result });
        dispatch({ type: 'SET_CONDITION', condition: conditions.ITEM });
    }
}

export const conditions = {
    FORM: 'FORM',
    ITEM: 'ITEM',
    INITIAL: 'INITIAL'
}