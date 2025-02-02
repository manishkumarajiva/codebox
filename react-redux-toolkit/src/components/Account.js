import React from "react";
import {ButtonGroup, Button} from "react-bootstrap";
import {  increment, decrement } from '../slices/AccountSlice';
import { getUserAccount } from "../slices/AccountSlice";
import { useDispatch } from "react-redux";

const Account = () => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ButtonGroup style={{height:"50px"}}>
        <Button size='lg' variant='success' onClick={() => dispatch(increment()) }>
          <i className='fa-solid fa-chart-line'></i>
        </Button>
        <Button size='lg' variant='danger'  onClick={() => dispatch(decrement())}>
          <i className='fa-solid fa-down-long'></i>
        </Button>
        <Button size='lg' variant='danger'  onClick={() => dispatch(getUserAccount(1))}>
        <i className="fa-solid fa-user-secret"></i>
        </Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Account;
