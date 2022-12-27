import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import SpendReducer from "../features/spendSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    spend:SpendReducer
  },
});