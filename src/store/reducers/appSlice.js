import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  profileTap: "all",
  asideTap: "courses",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCategoryValue: (state, action) => {
      state.category = action.payload;
    },
    setProfileTap: (state, action) => {
      state.profileTap = action.payload;
    },
    setAsideTap: (state, action) => {
      state.asideTap = action.payload;
    },
  },
});

export const { setCategoryValue, setProfileTap, setAsideTap } =
  appSlice.actions;
export default appSlice.reducer;
