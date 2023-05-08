import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as signupReducer } from "./signupReducer/reducer"; 

import thunk from "redux-thunk"

const rootReducer = combineReducers({
    authReducer,
    signupReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))