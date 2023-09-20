import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

const serachProductSlice = createSlice({
  name: "imgFilter",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { addProduct } = serachProductSlice.actions;

export default serachProductSlice.reducer;
