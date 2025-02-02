import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {
  fetchCartItem,
  addCartItem,
  updateCartItem,
  deleteCartItem,
} from "./cartAPI";

export const getCartItems = createAsyncThunk("cart/getCartItem", async () => {
  return fetchCartItem();
});

export const addToCart = createAsyncThunk("cart/addCartItem", async (item) => {
  return addCartItem(item);
});

export const updateToCart = createAsyncThunk(
  "cart/updateCartItem",
  async ({cart, quantity}) => {
    return updateCartItem({id: cart.id, cart: {...cart, qty: quantity}});
  }
);

export const deleteToCart = createAsyncThunk(
  "cart/deleteCartItem",
  async (id) => {
    return deleteCartItem(id);
  }
);

const initialState = {items: [], status: "fullfilled"};

const CartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "fulfilled";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.status = "fulfilled";
      })
      .addCase(deleteToCart.fulfilled, (state, action) => {
        const cartIndex = state.items.findIndex(
          (cart) => cart.id === action.payload
        );
        state.items.splice(cartIndex, 1);
        state.status = "fulfilled";
      })
      .addCase(updateToCart.fulfilled, (state, action) => {
        const cartIndex = state.items.findIndex(
          (cart) => cart.id === action.payload.id
        );
        state.items.splice(cartIndex, 1, action.payload);
        state.status = "fulfilled";
      });
  },
});

export default CartReducer.reducer;
