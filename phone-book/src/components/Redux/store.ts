import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";

export const store = createStore(appReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof appReducer>;

// @ts-ignore
window.store = store;
