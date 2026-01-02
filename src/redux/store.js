import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    cart: cartSlice,
    user: userSlice,
  },
  devTools: import.meta.env.MODE !== "production",
});

export default store;
