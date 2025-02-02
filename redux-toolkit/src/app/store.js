import {configureStore} from "@reduxjs/toolkit";
import ProductReducer from "../features/product/productSlice";
import CartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart : CartReducer
  },
});

export default store;
