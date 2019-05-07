const initialState = false;

const custom = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CUSTOM':
            return !state;
        default: 
            return state;
    }
}

export default custom;