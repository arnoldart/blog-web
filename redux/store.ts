import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import themeSlices from './slices/ThemeSclices'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore
} from 'redux-persist'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const persistConfig = {
  key: "root",
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, themeSlices)

export const store = configureStore({
  reducer: {
    theme: persistedReducer
  },
  middleware: getDefaultMiddleware()
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;