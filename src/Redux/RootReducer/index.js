import { combineReducers } from "redux";
import LoginStateReducer from "../Reducers/LoginStateReducer";
import SinglePropertyReducer from "../Reducers/SinglePropertyReducer";
import UpdatePropertyReducer from "../Reducers/UpdatePropertyReducer";

const rootReducer = combineReducers({
    LoginStateReducer,
    Single:SinglePropertyReducer,
    Update:UpdatePropertyReducer
})

export default rootReducer;