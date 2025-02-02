import React from "react";
import {ButtonGroup, Button} from "react-bootstrap";
import { increment, decrement } from '../slices/BonusSlice'
import { useDispatch } from "react-redux";

const Bonus = ({onInc, onDec}) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ButtonGroup aria-label='Basic example'>
        <Button size='lg' variant='success' onClick={()=>dispatch(increment())}> 
        <i className="fa-solid fa-chart-line"></i>
        </Button>
        <Button size='lg' variant='danger' onClick={()=>dispatch(decrement())}> 
        <i className="fa-solid fa-down-long"></i>
        </Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Bonus;
