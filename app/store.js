import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "@/services/contactApi";
import { usersApi } from "@/services/userApi";
import cartReducer from "@/services/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
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
