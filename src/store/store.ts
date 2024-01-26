import { subscribe } from "diagnostics_channel";
import {CounterActionType, ValueType, setterReducer } from "./setter-reducer";
import { useDispatch } from "react-redux";
import { AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {ThunkAction, ThunkDispatch, thunk} from 'redux-thunk'
import { stringify } from "querystring";
import { displayReducer } from "./display-reducer";
import { loadState } from "../utils/loadState-utils";
import { saveState } from "../utils/saveState-utils";


const rootReducer = combineReducers({
  counter: setterReducer,
  currentValue: displayReducer
})

//receiving a saved state from LocalStorage
let persistedState = loadState();

//create store
export const store = legacy_createStore(rootReducer, persistedState, applyMiddleware(thunk));
// type of the state
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AppActionType>;


store.subscribe(() => {
  saveState(store.getState())
})

//custom hook for dispatch
export const appUseDispatch = useDispatch<AppDispatchType>

//type for all actions in app
export type AppActionType = CounterActionType;

//type of all thunks
export type AppThunk<ReturnType=void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

// to get store in browser
// @ts-ignore
window.store = store;