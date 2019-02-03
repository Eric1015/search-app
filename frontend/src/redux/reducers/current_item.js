const current_item = (state = null, action) => {
    switch (action.type) {
        case 'SET_ITEM':
            return action.item;
        default:
            return state;
    }
}

export default current_item;