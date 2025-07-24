// src/store/reducers/userReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const userInfoFromStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: userInfoFromStorage,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    userSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
      sessionStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    userFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.userInfo = null;
      state.loading = false;
      state.error = null;
      sessionStorage.removeItem("userInfo");
      toast.success("Logged Out", {
        style: {
          background: "#61402E",
          color: "#FFF3E7",
          border: "1px solid #FFF3E7",
        },
      });
    },
  },
});

export const { userRequest, userSuccess, userFail, logoutUser } =
  userSlice.actions;
export default userSlice.reducer;
