import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productListReducer } from './reducers/productsReducers';
import { userLoginReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer } from './reducers/orderReducers';

const reducer = combineReducers({
  productList: productListReducer,
  // productDetails: productDetailsreducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  orderCreate: orderCreateReducer,

});

// ----------------------start, october 19, 2025---------------------------
const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
// ----------------------end, october 19, 2025---------------------------



// --------------------start, october 20, 2025----------------------

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

// --------------------end, october 20, 2025----------------------


const initialState = {
    cart: { 
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage }
}


const store = configureStore({
  reducer,
  preloadedState: initialState,
  // No need to manually add redux-thunk. It’s included by default.
});

export default store;
