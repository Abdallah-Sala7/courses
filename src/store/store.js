import { configureStore } from "@reduxjs/toolkit";
import { courseApi } from "../server/courseApi";
import appSlice from "./reducers/appSlice";
import filterSlice from "./reducers/filterSlice";

export const store = configureStore({
  reducer: {
    app : appSlice,
    filters : filterSlice,
    [courseApi.reducerPath] : courseApi.reducer,

  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(courseApi.middleware),
})