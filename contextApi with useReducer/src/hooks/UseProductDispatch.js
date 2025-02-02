import { useContext } from "react";
import ProductDispatchContext from '../contexts/ProductDispatchContext';

function useDispatchProduct(){
    return useContext(ProductDispatchContext);
};

export default useDispatchProduct;
