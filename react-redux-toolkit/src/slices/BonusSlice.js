import {createSlice, createAction} from "@reduxjs/toolkit";
const incrementByAmount = createAction("reward/incrementByAmount");

const initialState = {
  point: 0,
};

export const BonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.point += 1;
    },
    decrement: (state) => {
      state.point -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementByAmount, (state, action) => {
        if (action.payload > 100) {
          state.point = +action.payload;
        }
      })
      .addDefaultCase((state, action) => {
        
      });
  },
});

// Action creators
export const {increment, decrement} = BonusSlice.actions;

export default BonusSlice.reducer;
