import {types} from "./types";


const initialState = {
    number: "",
    arrNumber: []
}

export default function numberReducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_NUMBER:
            return  {...state, number:action.payload}
        case types.ADD_BUTTON:
            if(state.arrNumber.length===0) {
                return {...state, arrNumber: [state.number], number: ''}
            } else {
                return {...state, arrNumber: [...state.arrNumber, state.arrNumber.at(-1)+state.number], number: ''}
            }
        case types.CLEAR_BUTTON:
            return {...state,arrNumber: [],number: ""}
        default: return state
    }
}