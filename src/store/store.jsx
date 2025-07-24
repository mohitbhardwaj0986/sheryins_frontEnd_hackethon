import { configureStore } from '@reduxjs/toolkit'
import productSlice from './reducers/dataReducer'
import cartSlice from './reducers/cartReducer'
import userSlice from './reducers/userReducer'
export const store = configureStore({
  reducer: {
    user:userSlice,
    products:productSlice,
    cart:cartSlice,

  },
})