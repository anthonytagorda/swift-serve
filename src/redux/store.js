import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
  devTools: import.meta.env.MODE !== "production",
});

export default store;
