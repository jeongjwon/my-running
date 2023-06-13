import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { addModalReducer } from "./reducers";
export const store = createStore(
    combineReducers({addModalReducer}),
    applyMiddleware(thunk)
);

