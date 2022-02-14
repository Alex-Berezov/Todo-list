import { combineReducers } from "redux";
import { todosReducer } from "./todoReducers";


export const rootReducer = combineReducers({
  todo: todosReducer
})

export type RootState = ReturnType<typeof rootReducer>