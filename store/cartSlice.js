import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const { quantity, variantId } = action.payload;
      // console.log("Adding item to cart:", quantity, variantId);

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
    },
    updateQuantity: (state, action) => {
      const { variantId, newQuantity } = action.payload;
      const cartItem = state.items.find((item) => item.variantId === variantId);

      if (cartItem) {
        cartItem.quantity = newQuantity;
      }
      // console.log("payload from redux", action.payload);
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
