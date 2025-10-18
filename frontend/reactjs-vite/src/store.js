import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productListReducer } from './reducers/productsReducers';

const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {
  // Define your initial state here if needed
  // Example:
  // user: { info: null, loading: false },
};

const store = configureStore({
  reducer,
  initialState,
  // No need to manually add redux-thunk. It’s included by default.
});

export default store;
