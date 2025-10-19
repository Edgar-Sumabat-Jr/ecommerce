import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productListReducer } from './reducers/productsReducers';
import { userLoginReducer } from './reducers/userReducers';

const reducer = combineReducers({
  productList: productListReducer,
  // productDetails: productDetailsreducer,
  // cart: cartReducer,
  userLogin: userLoginReducer,
});


const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    // cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
}


const store = configureStore({
  reducer,
  preloadedState: initialState,
  // No need to manually add redux-thunk. It’s included by default.
});

export default store;
