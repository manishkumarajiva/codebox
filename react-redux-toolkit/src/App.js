import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import Reward from "./components/Reward";
import {useSelector} from "react-redux";

const App = () => {
  const amount = useSelector((state) => state.account.amount);
  const point = useSelector((state) => state.bonus.point);
  const reward = useSelector(state => state.reward.point);
  
  return (
    <React.Fragment>
      <Container
        fluid
        className='bg-secondary-subtle'
        style={{height: "100vh"}}
      >
        <Row className='text-center'>
          <p className='display-4'>
            Amount :- <span className='fw-bold text-primary'>{amount}</span>
          </p>
          <p className='display-4'>
            Bonus :- <span className='fw-bold text-primary'>{point}</span>
          </p>
          <p className='display-4'>
            Reward :- <span className='fw-bold text-primary'>{reward}</span>
          </p>
        </Row>

        <Row className='justify-content-center'>
          <Col className='col-12 col-md-2 m-3 d-flex align-item-center justify-content-center'>
            <Account></Account>
          </Col>

          <Col className='col-12 col-md-2 m-3'>
            <Bonus></Bonus>
          </Col>

          <Col className='col-12 col-md-3 m-3'>
            <Reward></Reward>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;
