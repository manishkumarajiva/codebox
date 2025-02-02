import React, { useState } from "react";
import {Button, Form} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../reducers/RewardReducer';

const Reward = () => {
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(incrementByAmount(amount))
    }

  return (
    <React.Fragment>
      <Form>
        <Form.Group className='mb-3' controlId='amount'>
          <Form.Label>Amount</Form.Label>
          <Form.Control type='Number' placeholder='Enter email' onChange={(e)=>setAmount(+e.target.value)} />
          <Button size='md' variant='primary' onClick={submitHandler}>
            Add Balance
          </Button>
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default Reward;
