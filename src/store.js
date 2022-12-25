import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/mySlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})