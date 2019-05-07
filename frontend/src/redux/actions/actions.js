import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:8080/api/"

export const loadItems = () => (dispatch) => {
    dispatch({ type: 'START_LOADING' });
    axios.get(`${url}items`)
        .then((result) => {
            console.log("Data has been read");
            dispatch({ type: 'LOAD_ITEMS', items: result.data });
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            dispatch(finishLoading());
        })
    return Promise.resolve();
}

export const addItem = (item) => (dispatch) => {
    dispatch(startLoading());
    axios.post(`${url}items`, item)
        .then((result) => {
            dispatch({ type: 'ADD_ITEM', item: result.data })
        }).catch((err) => {
            console.log(err.response.data);
        }).finally(() => {
            dispatch(finishLoading());
        })
    return Promise.resolve();
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
            dispatch({ type: 'IMAGE_UPLOAD', image: result.data.image_url });
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

export const handleSearchBarResultSelect = (e, result) => {
    return (dispatch) => {
        dispatch({ type: 'SET_ITEM', item: result });
        dispatch({ type: 'SET_CONDITION', condition: conditions.ITEM });
    }
}

export const changeCustom = () => {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_CUSTOM' });
    }
}

export const conditions = {
    FORM: 'FORM',
    ITEM: 'ITEM',
    INITIAL: 'INITIAL'
}