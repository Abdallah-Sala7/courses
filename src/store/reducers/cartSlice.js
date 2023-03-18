import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  count: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isAded = state.cart.find((item) => item.id === action.payload.id);
      if (!isAded) {
        state.cart.push(action.payload);
        state.count += 1;
        state.total += parseInt(action.payload.price);
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.count -= 1;
      state.total -= parseInt(action.payload.price);
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
