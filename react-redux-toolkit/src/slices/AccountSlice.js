import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getUserAccount = createAsyncThunk(
  "account/getUser",
  async (userId, thunkAPI) => {
    const response = await fetch(`http://localhost:8280/accounts/${userId}`);
    const data = await response.json();
    return data.amount;
  }
);

const initialState = {
  amount: 0,
};

export const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAccount.fulfilled, (state, action) => {
      state.amount += action.payload;
      state.pending = false;
    }).addCase(getUserAccount.pending, (state, action) => {
      state.amount += action.payload;
      state.pending = true;
    }).addCase(getUserAccount.rejected, (state, action) => {
      state.amount += action.payload;
      state.pending = false;
      state.error = "Something went wrong";
    });
  },
});

// Action creators
export const {increment, decrement, incrementByAmount} = AccountSlice.actions;

export default AccountSlice.reducer;
