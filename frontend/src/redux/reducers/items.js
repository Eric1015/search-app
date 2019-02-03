const initialState = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    o: [],
    p: [],
    q: [],
    r: [],
    s: [],
    t: [],
    u: [],
    v: [],
    w: [],
    x: [],
    y: [],
    z: []
}

const items = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                [action.key]: [...state[action.key], action.item]
            };
        case 'LOAD_ITEMS_WITH_KEY':
            return {
                ...state,
                [action.key]: action.items
            }
        default: 
            return state;
    }
}

export default items;