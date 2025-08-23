import { combineReducers, configureStore } from '@reduxjs/toolkit'

// reducers
import { productsListReducer } from './reducers/productsReducers'
import { cartReducer } from './reducers/cartReducers'

import { thunk } from 'redux-thunk'

const reducer = combineReducers({
  productList: productsListReducer,
  // productDetails: productDetailsReducer,
  cart: cartReducer,
})

// const initialState = {
//   // Your initial state goes here, if any
// }

const store = configureStore({
  reducer,
  // initialState,
  // No need to add `thunk` since it's already included by default in getDefaultMiddleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})


const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
  JSON.parse(localStorage.getItem('cartItems')) : [];

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
  JSON.parse(localStorage.getItem('userInfo')) : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? 
  JSON.parse(localStorage.getItem('shippingAddress')) : {}

  const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage
  },
  userLogin: {userInfo: userInfoFromStorage}
}

export default store
