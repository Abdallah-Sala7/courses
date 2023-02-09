import { configureStore } from "@reduxjs/toolkit";
import { courseApi } from "../server/courseApi";
import { appSlice } from "./reducers/appSlice";

export const store = configureStore({
  reducer: {
    [courseApi.reducerPath] : courseApi.reducer,
    app : appSlice.reducer
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(courseApi.middleware),
})