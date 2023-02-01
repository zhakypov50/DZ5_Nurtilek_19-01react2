import {createStore} from "redux";
import numberReducer from "./numberReducer";

export const store = createStore(numberReducer)