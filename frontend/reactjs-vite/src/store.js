import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productsListReducer } from './reducers/productsReducers'
import { thunk } from 'redux-thunk'

const reducer = combineReducers({
  productList: productsListReducer,
})

const initialState = {
  // Your initial state goes here, if any
}

const store = configureStore({
  reducer,
  initialState,
  // No need to add `thunk` since it's already included by default in getDefaultMiddleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store
