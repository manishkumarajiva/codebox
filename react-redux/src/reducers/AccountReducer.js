import {
  initAmount,
  incAmount,
  decAmount,
  incByAmount,
  getUserAccFulfilled,
  getUserAccPending,
  getUserAccRejected
} from "../constants";

function AccountReducer(state = { amount: 1 }, action) {
  if (action.type === initAmount) {
    return { amount: state.amount + action.payload };
  } else if (action.type === incAmount) {
    return { amount: state.amount + 1 };
  } else if (action.type === decAmount) {
    return { amount: state.amount - 1 };
  } else if (action.type === incByAmount) {
    return { amount: state.amount + action.payload };
  } else if (action.type === getUserAccFulfilled) {
    return { amount: state.amount + action.payload, pending: false };
  } else if (action.type === getUserAccPending) {
    return { ...state, pending: action.payload };
  } else if (action.type === getUserAccRejected) {
    return { ...state, error: action.payload, pending: false, rejected : true };
  } else {
    return state;
  }
}

export default AccountReducer;
