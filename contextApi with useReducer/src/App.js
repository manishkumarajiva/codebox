import React, { useReducer, useState } from 'react'
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import ThemeContext from './contexts/ThemeContext';

import ProductContext from './contexts/ProductContext';
import ProductDispatchContext from './contexts/ProductDispatchContext';
import "./theme/Theme.css";

function App() {
  
  const [editable, setEditable] = useState(false);
  const [themeColor, setThemeColor] = useState("light");

  function ProductReducer(products, action) {
    switch (action.type) {
      case "LOAD": return action.payload;
      case "ADD": return [...products, { ...action.payload, id: products.length + 1 }];
      case "FIND": setEditable(products.find(product => product.id === action.payload)); return products;
      case "DELETE": return products.filter(product => product.id !== action.payload);
      case "UPDATE":
        const index = products.findIndex(product => product.id === action.payload.id);
        let updatedProducts = products;
        updatedProducts.splice(index, 1, action.payload);
        setEditable(false);
        return updatedProducts;
      default: return products;
    }
  }

  const [products, dispatch] = useReducer(ProductReducer, []);

  return (
    <React.Fragment>
      <ThemeContext.Provider value={themeColor} className={themeColor}>
        <ProductContext.Provider value={products}>
          <ProductDispatchContext.Provider value={dispatch}>
            <header onClick={() => setThemeColor(themeColor === 'light' ? 'dark' : 'light')} className={`display-5 text-center fw-1 ${themeColor}`}> PRODUCTS </header>
            <section className={`row p-4 ${themeColor}`}>
              <AddProduct editProduct={editable}></AddProduct>
              <Products></Products>
            </section>
          </ProductDispatchContext.Provider>
        </ProductContext.Provider>
      </ThemeContext.Provider>
    </React.Fragment>
  )
}

export default App
