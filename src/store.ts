import { configureStore } from '@reduxjs/toolkit'
import router from './pages/router/slices'
import app from './pages/app/slices'
import { combineReducers } from 'redux'
 
const store = configureStore({
    reducer: {
        router,
        app,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type TypedDispatch = typeof store.dispatch
 
export default store