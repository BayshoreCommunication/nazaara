import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const { product, quantity, size, color } = action.payload;
      // console.log("Adding item to cart:", product, quantity, size, color);

      // Create a unique identifier for the variant
      const variantId = `${product}-${color}-${size}`;
      // console.log("variantId", variantId);

      // Check if an existing item matches the variant identifier
      const existingItem = state.items.find(
        (item) => item.variantId === variantId
      );

      if (existingItem) {
        // Update the quantity of the existing item
        existingItem.quantity += quantity;
        // console.log("Updated quantity", existingItem.quantity);
      } else {
        // Add the new product variant to the cart
        state.items.push({ ...action.payload, variantId });
      }

      console.log("Updated cart state:", state);
    },
    updateQuantity: (state, action) => {
      const { variantId, newQuantity } = action.payload;
      const cartItem = state.items.find((item) => item.variantId === variantId);

      if (cartItem) {
        cartItem.quantity = newQuantity;
      }
    },
    removeItemFromCart: (state, action) => {
      const variantId = action.payload;
      state.items = state.items.filter((item) => item.variantId !== variantId);
    },
  },
});

export const { addItemToCart, updateQuantity, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
