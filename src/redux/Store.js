import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const Store = configureStore({
  //reducer - reducer

  reducer: {
    counterReducer: counterSlice,
  },
});
