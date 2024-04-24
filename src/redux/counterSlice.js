import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  //name of the slice component
  name: "CounterApplication",
  //inital value of the state
  initialState: {
    value: 0,
  },
  reducers: {
    //actions are create inside the reducer key

    //increment count

    increment: (state, action) => {
      state.value += action.payload;
    },

    //decrement count
    decrement: (state, action) => {
      state.value -= action.payload;
    },

    reset: (state) => {
      state.value = 0;
    },
    //resent count
  },
});

//slice returns actions as well as reducers
//actions are called by components
//reducers is for store

export const { increment, decrement, reset } = counterSlice.actions;

//export reducer - it is usedby components
export default counterSlice.reducer;

//actions are used by components
//reducers are used by components
