import { combineReducers } from "redux";
import LoginStateReducer from "../Reducers/LoginStateReducer";
import SinglePropertyReducer from "../Reducers/SinglePropertyReducer";

const rootReducer = combineReducers({
    LoginStateReducer,
    Single:SinglePropertyReducer
})

export default rootReducer;