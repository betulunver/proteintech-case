import * as type from './type';
export const changeButtonText = text =>{
    return {
        type: type.CHANGE_BUTTON_TEXT,
        payload: text
    }
}
export const changeTreeClass = classArray =>{
    return {
        type: type.CHANGE_TREE_CLASS,
        payload: classArray //tree :{ class:"" }
    }
}
export const changeApple1Class = classArray =>{
    return {
        type: type.CHANGE_APPLE1_CLASS,
        payload: classArray //apple1 :{ class: " " }
    }
}
export const changeApple2Class = classArray =>{
    return {
        type: type.CHANGE_APPLE2_CLASS,
        payload: classArray //apple2 :{ class: " " }
    }
}
export const changeApple3Class = classArray =>{
    return {
        type: type.CHANGE_APPLE3_CLASS,
        payload: classArray //apple3 :{ class: " " }
    }
}