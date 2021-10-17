import * as type from '../actions/type';
const INITIAL_STATE = {
    buttonText: "Start",
    shaking: false,
    tree: {
        class: "tree"
    },
    apple1: {
        class: "apple a1"
    },
    apple2: {
        class: "apple a2"
    },
    apple3: {
        class: "apple a3"
    }
}
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.CHANGE_BUTTON_TEXT:
            return { ...state, buttonText: action.payload }
        case type.CHANGE_TREE_CLASS:
            return { ...state, tree: action.payload }
        case type.CHANGE_APPLE1_CLASS:
            return { ...state, apple1: action.payload }
        case type.CHANGE_APPLE2_CLASS:
            return { ...state, apple2: action.payload }
        case type.CHANGE_APPLE3_CLASS:
            return { ...state, apple3: action.payload }
        default:
            return state;
    }
}