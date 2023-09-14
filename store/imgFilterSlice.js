import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: null,
};

const imgFilterSlice = createSlice({
  name: "imgFilter",
  initialState,
  reducers: {
    currentColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { currentColor } = imgFilterSlice.actions;

export default imgFilterSlice.reducer;
