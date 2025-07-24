import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // each item: { id, name, price, quantity, image }
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cartItems.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }

      cartSlice.caseReducers.calculateTotal(state);
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
      cartSlice.caseReducers.calculateTotal(state);
    },

    increaseQty: (state, action) => {
      const productId = action.payload;
      const item = state.cartItems.find((item) => item.id === productId);
      if (item) item.quantity += 1;
      cartSlice.caseReducers.calculateTotal(state);
    },

    decreaseQty: (state, action) => {
      const productId = action.payload;
      const item = state.cartItems.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== productId);
      }
      cartSlice.caseReducers.calculateTotal(state);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.cartTotal = 0;
    },

    calculateTotal: (state) => {
      state.cartTotal = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
