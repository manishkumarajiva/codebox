import React, {useId} from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const ProductItem = ({product}) => {
  
  const dispatch = useDispatch();
  const { id, image, price, title, category } = product
  return (
      <div className='card' key={id+useId()}>
        <img
          src={image}
          alt='Denim Jeans'
          style={{width: "100%"}}
        />
        <h1 className="lead fw-bolder text-primary">{category}</h1>
        <p className='price'> $ {price} </p>
        <p>{title.substring(0,20)}</p>
        <p>
          <button onClick={()=>dispatch(addToCart({id : id.toString(), image, price, title, category}))}> Add to Cart </button>
        </p>
      </div>
  );
};

export default ProductItem;
