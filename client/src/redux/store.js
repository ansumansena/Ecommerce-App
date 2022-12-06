import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userRedux from "./userRedux";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userRedux,
  },
});
