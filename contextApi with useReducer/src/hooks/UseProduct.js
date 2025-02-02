import { useContext } from "react";
import ProductContext from '../contexts/ProductContext';

function useProducts(){
    return useContext(ProductContext);
};

export default useProducts;
