import { combineReducers, configureStore } from '@reduxjs/toolkit'
import themeSlices from './slices/ThemeSclices'
import storage from 'redux-persist/lib/storage'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
    persistReducer,
    persistStore
  } from 'redux-persist'

const persistConfig = {
    key: "root",
    storage: storage,
    blacklist: []
}

export const rootReducers = combineReducers({
    theme: themeSlices,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
  reducer: persistedReducer,
})

const persistor = persistStore(store)

export {store, persistor}