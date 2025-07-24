import { configureStore } from '@reduxjs/toolkit'
import productSlice from './reducers/dataReducer'
import cartSlice from './reducers/cartReducer'
export const store = configureStore({
  reducer: {
    products:productSlice,
    cart:cartSlice,

  },
})