import {types} from "./types";

export const changeNumberAction = (param) => {
    return {
        type: types.ADD_BUTTON,
        payload: Number(param)
    }
}

export const addNumberAction = () => {
    return {
        type: types.ADD_BUTTON,
    }
}

export const clearNumberAction = () => {
    return {
        type: types.CLEAR_BUTTON
    }
}