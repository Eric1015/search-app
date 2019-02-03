const initialState = {
    loading: false,
    results: [],
    value: ""
}

const searchBar = (state = initialState, action) => {
    switch (action.type) {
        case 'START_SEARCH':
            return {
                ...state,
                loading: true,
                results: [],
                value: action.value
            }
        case 'FINISH_SEARCH':
            return {
                ...state,
                loading: false,
                results: action.results
            }
        case 'SEARCH_RESULT_SELECT':
            return {
                ...state,
                value: "",
                result: action.result
            }
        default:
            return state;
    }
}

export default searchBar;