import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import FetchProducts from './productAPI';

export const InitializeProducts = createAsyncThunk(
  "product/fetch",
  async () => {
    return FetchProducts();
  }
);

const initialState = { products: [], status: "fullfilled" };

const ProductReducer = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(InitializeProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(InitializeProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "fulfilled";
      })
      .addCase(InitializeProducts.rejected, (state, action) => {
        state.status = "rejected";
      })
  },
});


export default ProductReducer.reducer;
