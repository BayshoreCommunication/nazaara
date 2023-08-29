// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.product === action.payload.product
      );
      if (existingItem) {
        // Update the quantity if the product is already in the cart
        existingItem.quantity += action.payload.quantity;
        console.log("from quantity", existingItem.quantity);
      } else {
        // Add the new product to the cart
        state.items.push(action.payload);
      }
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
