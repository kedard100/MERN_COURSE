//import { combineReducers } from "redux";

import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';

import { bookReducer } from "./reducers/bookReducer";
import { userReducer } from './reducers/userReducer';
import { thunk } from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // uses localStorage for web
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

//import { loadState, saveState } from './localStorageHelper';

//const persistState=loadState()
//console.log("persistState",persistState)

const persistConfig={
    key:"root",
    storage,
    whitelist:['bookState','userState']

}


const rootReducer=combineReducers({
    bookState:bookReducer,
    userState:userReducer
})

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store = createStore(
    //rootReducer,
    persistedReducer,
    applyMiddleware(thunk),   
)
export const persistor=persistStore(store)

//console.log("store.getState.bookState",store.getState())
// store.subscribe(()=>{
//     saveState({
//         bookState:store.getState().bookState,
//         userState:store.getState().userState,
//     })
// })