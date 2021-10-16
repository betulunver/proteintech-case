import { START } from '../actions';
const INITIAL_STATE = {
    buttonText: "Start",
    treeShaking: false
}
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START:
            return { ...state, buttonText: action.payload }
        default:
            return state;
    }
}