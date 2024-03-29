import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "../Slices/CartSlice";
import CatReducer from "../Slices/CatSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    cat: CatReducer,
  },
});
