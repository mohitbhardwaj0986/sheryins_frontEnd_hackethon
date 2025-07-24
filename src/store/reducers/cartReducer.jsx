import { createSlice } from "@reduxjs/toolkit";

// Load cart state from localStorage if available
const loadCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem("cartState");
    return cart ? JSON.parse(cart) : { cartItems: [], cartTotal: 0, productCount: 0 };
  } catch (err) {
    return { cartItems: [], cartTotal: 0, productCount: 0 };
  }
};

// Save cart state to localStorage
const saveCartToLocalStorage = (state) => {
  try {
    localStorage.setItem("cartState", JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save cart:", err);
  }
};

const initialState = loadCartFromLocalStorage();

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
      saveCartToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
      cartSlice.caseReducers.calculateTotal(state);
      saveCartToLocalStorage(state);
    },

    increaseQty: (state, action) => {
      const productId = action.payload;
      const item = state.cartItems.find((item) => item.id === productId);
      if (item) item.quantity += 1;
      cartSlice.caseReducers.calculateTotal(state);
      saveCartToLocalStorage(state);
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
      saveCartToLocalStorage(state);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.cartTotal = 0;
      state.productCount = 0;
      saveCartToLocalStorage(state);
    },

    calculateTotal: (state) => {
      state.cartTotal = state.cartItems.reduce(
        (sum, item) =>
          sum + parseFloat(item.price.replace("$", "")) * item.quantity,
        0
      );
      state.productCount = state.cartItems.reduce(
        (count, item) => count + item.quantity,
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
