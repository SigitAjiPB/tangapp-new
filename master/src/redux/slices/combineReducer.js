import { combineReducers } from "redux";    
import inputReducer from "./reducers";

const rootReducers  = combineReducers ({
    input: inputReducer
})

export default rootReducers