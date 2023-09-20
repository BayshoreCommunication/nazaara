import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "@/services/userApi";
import cartReducer from "@/store/cartSlice";
import imgFilterReducer from "@/store/imgFilterSlice";
import searchProductReducer from "@/store/serachProductSlice";
import { contactsApi } from "@/services/contactApi";
import { cartApi } from "@/services/cartApi";
import { productsApi } from "@/services/productApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    imgFilter: imgFilterReducer,
    searchProduct: searchProductReducer,
    // Add the generated reducer as a specific top-level slice
    [contactsApi.reducerPath]: contactsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(contactsApi.middleware)
      .concat(cartApi.middleware)
      .concat(usersApi.middleware)
      .concat(productsApi.middleware),
});
