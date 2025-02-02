import React from "react";
import "./cart.css";
import {useDispatch} from "react-redux";
import {deleteToCart, updateToCart } from "./cartSlice";

const CartItem = ({cart}) => {
  const dispatch = useDispatch();
 
  return (
    <React.Fragment>
      <div className='mini-cart-popup d-block' key={cart.id}>
        <div className='cart-item'>
          <img src={cart.image} alt='Product' className='product-image' />
          <div className='product-details'>
            <p>{cart.category}</p>
            <p className='price'>€{cart.price}</p>
            <div className='quantity-selector'>
              <select  onChange={(e)=>dispatch(updateToCart({cart : cart, quantity : e.target.value}))}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="2">3</option>
              </select>
            </div>
          </div>
          <button className='delete-btn'> </button>
        </div>

        <button
          onClick={() => dispatch(deleteToCart(cart.id))}
          className='btn btn-sm btn-outline-danger px-2'
        >
          🗑️
        </button>
      </div>
    </React.Fragment>
  );
};

export default CartItem;
