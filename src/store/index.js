import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './studentSlice'
const reducer = combineReducers({
    studentReducer,
})

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
    reducer
})
export default store