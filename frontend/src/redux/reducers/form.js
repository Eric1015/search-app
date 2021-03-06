const initialState = {
    title: "",
    link: "",
    image: "",
    description: "",
    disabled: false
};

const form = (state = initialState, action) => {
    switch (action.type) {
        case 'DISABLE_FORM':
            return {
                ...state,
                disabled: true
            };
        case 'ENABLE_FORM':
            return {
                ...state,
                disabled: false
            };
        case 'RESET_FORM':
            return initialState;
        case 'FORM_CHANGE':
            return {
                ...state,
                [action.name]: action.value
            };
        case 'SUBMIT_FORM':
            return state;
        case 'IMAGE_UPLOAD':
            return {
                ...state,
                image: action.image
            }
        default:
            return state;
    }
}

export default form;