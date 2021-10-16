export const START = 'START';

export const start = text =>{
    return {
        type: START,
        payload: text
    }
}