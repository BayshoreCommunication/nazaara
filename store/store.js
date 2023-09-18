import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "@/services/userApi";
import cartReducer from "@/store/cartSlice";
import imgFilterReducer from "@/store/imgFilterSlice";
import { contactsApi } from "@/services/contactApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    imgFilter: imgFilterReducer,
    // Add the generated reducer as a specific top-level slice
    [contactsApi.reducerPath]: contactsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(contactsApi.middleware)
      .concat(usersApi.middleware),
});
