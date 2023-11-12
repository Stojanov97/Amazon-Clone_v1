import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      let newCart = [...state.items];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id:${action.payload}) as it's not in cart`
        );
      }
      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
