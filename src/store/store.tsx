import { combineReducers, createStore } from "redux";
import { valueReducer } from "./value-reducer";

const rootReducer = combineReducers({
  values: valueReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>