import {
  incAmount,
  decAmount,
  incByAmount,
  getUserAccFulfilled,
  getUserAccPending,
  getUserAccRejected,
} from "../constants";

let url = `http://localhost:8000/accounts/`; 

function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserAccountPending(true));
      const response = await fetch(url + id);
      const data = await response.json();
      dispatch(getUserAccountFulfilled(data.amount));
    } catch (error) {
      dispatch(getUserAccountRejected(error.message));
    }
  };
}

function increaseAmount() {
  return { type: incAmount };
}

function decreaseAmount() {
  return { type: decAmount };
}

function incrementByNumber(value) {
  return { type: incByAmount, payload: value };
}

function getUserAccountFulfilled(value) {
  return { type: getUserAccFulfilled, payload: value };
}

function getUserAccountPending(value) {
  return { type: getUserAccPending, payload: value };
}

function getUserAccountRejected(error) {
  return { type: getUserAccRejected, payload: error };
}

export {
  getUserAccount,
  increaseAmount,
  decreaseAmount,
  incrementByNumber,
  getUserAccountFulfilled,
  getUserAccPending,
  getUserAccountRejected,
};
