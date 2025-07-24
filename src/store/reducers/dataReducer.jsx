import { createSlice } from "@reduxjs/toolkit";
import productData from "../../components/products/Data";

const initialState = {
  products: [],
  filterProducts: [],
  activeProduct: null,
  productLoading: false,
  selectedType: "All",
  maxPrice: 100,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state) => {
      state.products = productData;
      state.filterProducts = productData;
    },

    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },

    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },

    applyFilters: (state) => {
      let filtered = state.products;

      if (state.selectedType !== "All") {
        filtered = filtered.filter(
          (product) => product.type === state.selectedType
        );
      }

      filtered = filtered.filter(
        (product) =>
          parseFloat(product.price.replace("$", "")) <= state.maxPrice
      );

      state.filterProducts = filtered;
    },

    resetFilter: (state) => {
      state.selectedType = "All";
      state.maxPrice = 100;
      state.filterProducts = state.products;
    },

    setActiveProduct: (state, action) => {
      const id = action.payload;
      state.activeProduct = state.products.find((item) => item.id == id);
    },

    clearActiveProduct: (state) => {
      state.activeProduct = null;
    },
  },
});

export const {
  loadProducts,
  setSelectedType,
  setMaxPrice,
  applyFilters,
  resetFilter,
  setActiveProduct,
  clearActiveProduct,
} = productSlice.actions;

export default productSlice.reducer;
