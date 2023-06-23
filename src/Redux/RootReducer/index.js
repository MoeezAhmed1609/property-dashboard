import { combineReducers } from "redux";
import LoginStateReducer from "../Reducers/LoginStateReducer";
import SinglePropertyReducer from "../Reducers/SinglePropertyReducer";
import UpdatePropertyReducer from "../Reducers/UpdatePropertyReducer";
import UpdateStateReducer from "../Reducers/UpdateStateReducer"
import DashReducer from "../Reducers/DashReducer";

const rootReducer = combineReducers({
    LoginStateReducer,
    Single:SinglePropertyReducer,
    Update:UpdatePropertyReducer,
    UpdateStateReducer,
    DashReducer,
    
})

export default rootReducer;