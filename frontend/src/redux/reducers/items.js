const initialState = [];

const items = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return state.push(action.item);
        case 'LOAD_ITEMS':
            return state.concat(action.items);
        default: 
            return state;
    }
}

export default items;