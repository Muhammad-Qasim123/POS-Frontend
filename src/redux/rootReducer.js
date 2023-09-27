

import { createSlice } from "@reduxjs/toolkit";

// Create a slice using createSlice

// Modify your cartSlice reducers
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item._id === newItem._id);

      if (existingItem) {
        // If the item already exists in the cart, increment its quantity
        existingItem.quantity += 1;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        newItem.quantity = 1;
        state.cartItems.push(newItem);
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    
    },
    removeItemFromCart:(state,action)=>{
      const removeItemId=action.payload;
      const removeItemIndex=state.cartItems.findIndex(item=>item._id=removeItemId)
      if (removeItemIndex !== -1) {
        state.cartItems.splice(removeItemIndex,1);
      }
      localStorage.setItem('cartItems',JSON.stringify(state.cartItems));
    }
  },
});


// Export actions
// You can create actions using cartSlice.actions
export const {addItemToCart,removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;
