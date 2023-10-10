// all the logic should be in a single file i.e slice
// DUCKS pattern

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type
interface CounterState {
  value: number;
}

// initial value
const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      // it's okay to make it look like we're mutating
      // because immer makes it immutable under the hood
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

// action creators - function that creates and returns action objects
export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
