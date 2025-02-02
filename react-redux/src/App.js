import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import {useSelector, useDispatch} from "react-redux";
import {getUserAccount} from "./actions/AccountAction";
import Spinner from "react-bootstrap/Spinner";


function App() {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.account.amount);
  const point = useSelector((state) => state.bonus.point);
  const account = useSelector((state) => state.account);

  return (
    <React.Fragment>
      <Container fluid className={`bg-light`}>
        <p className='display-4'>
          Account Balance :-
          <span className='fw-bold text-primary'>
            {account.pending ? (
              <Loading />
            ) : account.rejected ? (
              <p>{account.error}</p>
            ) : (
              amount
            )}
          </span>
        </p>
        <p className='display-4'>
          Account Balance :-
          <span className='fw-bold text-success'> {point} </span>
        </p>
      </Container>
      <Container fluid className='bg-primary-subtle'>
        <Row>
          <Col>
            <Bonus></Bonus>
          </Col>
          <Col>
            <Account></Account>
          </Col>
        </Row>
      </Container>

      <Container
        className='mt-0 bg-danger-subtle row justify-content-center'
        fluid
      >
        <Button
          className='col-3'
          variant='warning'
          onClick={() => dispatch(getUserAccount(1))}
        >
          IniT User Account
        </Button>
      </Container>
    </React.Fragment>
  );
}

function Loading() {
  return (
    <Spinner animation='border' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  );
}

export default App;
