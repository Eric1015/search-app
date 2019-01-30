import { conditions } from '../actions/actions';

const condition = (state = conditions.INITIAL, action) => {
    switch(action.type) {
        case "SET_CONDITION":
            return action.condition;
        default:
            return state;
    }
}

export default condition;