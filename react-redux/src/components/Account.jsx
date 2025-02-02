import React, { useState } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { increaseAmount, decreaseAmount, incrementByNumber } from '../actions/AccountAction';
import { useDispatch } from 'react-redux';

const Account = () => {

  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(incrementByNumber(amount));
    setAmount(0);
  }

  return (
    <React.Fragment>
      <ButtonGroup aria-label="Basic example">
        <Button variant="success" onClick={() => dispatch(increaseAmount())}>
          {" "}
          Increase{" "}
        </Button>
        <Button variant="danger" onClick={() => dispatch(decreaseAmount())}>
          {" "}
          Decrease{" "}
        </Button>
      </ButtonGroup>

      <Form className="my-3" onSubmit={submitHandler}>
        <Form.Group controlId="amount">
          <Form.Label> Amount </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            onChange={(e) => setAmount(+e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default Account;
