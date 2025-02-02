import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCartItems} from "./cartSlice";
import CartItem from "./CartItem";

const CartList = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

 const cart =  carts.map((cart) => <React.Fragment><CartItem cart={cart}></CartItem></React.Fragment>);
 return cart;
};

export default CartList;
