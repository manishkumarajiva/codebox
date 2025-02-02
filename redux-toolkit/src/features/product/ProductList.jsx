import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {InitializeProducts} from "./productSlice";
import ProductItem from "./ProductItem";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(InitializeProducts());
  }, [dispatch]);

  const product = products.map((product) => (
    <ProductItem product={product}></ProductItem>
  ));
  return product;
};

export default Product;
