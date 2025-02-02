import React, { memo, useEffect, useState } from 'react';
import useProductDispatch from '../hooks/UseProductDispatch';
import './Product.css';

const AddProduct = memo(function AddProduct({ editProduct }){


    const ProductDispatch = useProductDispatch();
    const initialState = { title: '', category: '', price: '', image: '' };
    const [product, setProduct] = useState(initialState);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (editProduct) {
            ProductDispatch({ type: "UPDATE", payload: product });
            setProduct(initialState);

        } else {
            ProductDispatch({ type: "ADD", payload: product });
            setProduct(initialState);
        }      
    };

    useEffect(() => {
        if (editProduct) {
            setProduct(editProduct);
        }
    }, [editProduct]);

    return (
        <div className={`col-sm-12 col-lg-2 p-4`}>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control shadow-none"
                        id="title"
                        name="title"
                        value={product.title}
                        onChange={inputHandler}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control shadow-none"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={inputHandler}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                        type="url"
                        className="form-control shadow-none"
                        id="image"
                        name="image"
                        value={product.image}
                        onChange={inputHandler}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input
                        type="text"
                        className="form-control shadow-none"
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={inputHandler}
                        required
                    />
                </div>
                <div className='row'>
                    <button type="submit" className="btn btn-primary" > {editProduct ? "Update" : "New"} Product</button>
                </div>
            </form>
        </div>
    );
})

export default AddProduct;
