import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

// reducers
import { productsListReducer } from './reducers/productsReducers'
import { cartReducer } from './reducers/cartReducers'

// Step 1: Define the initial state by loading from local storage
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  // userLogin: { userInfo: userInfoFromStorage },
};

const reducer = combineReducers({
  productList: productsListReducer,
  // productDetails: productDetailsReducer,
  cart: cartReducer,
});

// Step 2: Pass the initialState object to the configureStore function
const store = configureStore({
  reducer,
  preloadedState: initialState, // Use 'preloadedState' to pass the initial state
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;