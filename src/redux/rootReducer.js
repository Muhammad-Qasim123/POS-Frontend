// const initialState = {
//   loading: false,
//   cartItems: [],
// };
// const RootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
// export default RootReducer;

import { createSlice } from "@reduxjs/toolkit";

// Create a slice using createSlice

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    cartItems: [],
  },
  reducers: {
    // Define reducers for actions here
    addItemToCArt: (state, action) => {
      state.cartItems.push(action.payload); 
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

// Export actions
// You can create actions using cartSlice.actions
export const {addItemToCArt} = cartSlice.actions;
export default cartSlice.reducer;
