const loading = (state = false, action) => {
    switch (action.type) {
        case 'FINISH_LOADING':
            return false;
        case 'START_LOADING':
            return true;
        default:
            return state;
    }
}

export default loading;