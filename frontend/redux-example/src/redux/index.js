import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice'
import bookReducer from './features/bookSlice'
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; // uses localStorage for web
import persistStore from "redux-persist/es/persistStore";

const persistConfig={
    key:"root",
    storage,
}
const rootReducer=combineReducers({
    user:userReducer,
    book:bookReducer
});

const persistedReducer=persistReducer(persistConfig, rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
})
export const persistor=persistStore(store)