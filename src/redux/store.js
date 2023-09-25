// import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import RootReducer from "./rootReducer";

// const finalReducer = combineReducers({
//   RootReducer,
// });
// const initialState = {
//   RootReducer: {
//     cartItems: localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [],
//   },
// };

// const middleware = [thunk];
// const store = createStore(finalReducer, initialState);
// export default store;


// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './rootReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;


