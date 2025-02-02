import React from "react";
import { Stack, Container, Row, Col, Form, Button, Card, Image } from "react-bootstrap";

import "./index.css";

import Product from "./features/product/ProductList";
import CartList from "./features/cart/CartList"

function App() {
  return (
      

    <Container fluid>
      <Row>
        <Col md={2} className="mx-2">
          {" "} 
          <h1> My Cart</h1>
          <CartList></CartList>{" "}
        </Col>
        <Col
          style={{height: "100vh"}}
          xs={9}
          className='d-flex flex-wrap overflow-auto justify-content-between'
        >
          {" "}
          <Product></Product>{" "}
        </Col>
      </Row>
    </Container>
   
  );
};






export default App;
