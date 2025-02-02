import React, { memo, useEffect, useId } from 'react';
import useTheme from '../hooks/UseTheme';
import useProduct from '../hooks/UseProduct';
import useDispatchProduct from '../hooks/UseProductDispatch';
import "./Product.css";
const url = 'https://fakestoreapi.com/products';


const Products = memo(function Products(){

    const Theme = useTheme();
    const ProductList = useProduct();
    const ProductDispatch = useDispatchProduct();

    const pid = useId();

    useEffect(()=>{
        fetch(url).then((response) => response.json()).then((data) => ProductDispatch({type : "LOAD", payload : data}));
    },[ProductDispatch])

    return (
        <div className={`col-10 col-sm-12 col-lg-10 d-flex justify-content-evenly flex-wrap overflow-auto`} style={{ height: "85vh" }}>
            {
                ProductList.map((product) => {
                    const { id, category, title, price, image } = product;

                    return (
                        <div className={`card ${Theme}`} key={id}>
                            <img src={image} alt={title} style={{ width: "100%" }} />
                            <h2>{category}</h2>
                            <p className="price">${price}</p>
                            <p>{title.substr(0,20)}</p>
                            <div className="btn-group" role="group" aria-label="product actions">
                                <button type="button" className="btn bg-warning-subtle" onClick={()=>ProductDispatch({type : "FIND", payload : id})}> ✏️ </button>
                                <button type="button" className="btn bg-danger-subtle" onClick={()=>ProductDispatch({type : "DELETE", payload : id})}>  🧧 </button>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
})

export default Products
