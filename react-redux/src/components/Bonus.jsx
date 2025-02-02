import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { increaseBonus, decreaseBonus } from '../actions/BonusAction';
import { useDispatch } from 'react-redux';

const Bonus = () => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ButtonGroup aria-label="Basic example">
        <Button variant="success" onClick={() => dispatch(increaseBonus())}>
          {" "}
          Increase{" "}
        </Button>
        <Button variant="danger" onClick={() => dispatch(decreaseBonus())}>
          {" "}
          Decrease{" "}
        </Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Bonus;
