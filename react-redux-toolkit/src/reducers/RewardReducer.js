import { createAction, createReducer } from '@reduxjs/toolkit'

// action creator
export const incrementByAmount = createAction('reward/incrementByAmount')

// initial state
const initialState = { point : 0 }

// reducer configuration
const RewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementByAmount, (state, action) => {
      state.point += action.payload
    })
});

export default RewardReducer;