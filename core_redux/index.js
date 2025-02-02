import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

const incAmount = 'account/amount/increment';
const decAmount = 'account/amount/decrement';
const incByAmount = 'account/amount/incrementByAmount';
const initAmount = 'account/amount/initialize';

const getUserAccFulfilled = 'account/getUser/fulfilled';
const getUserAccPending = 'account/getUser/pending';
const getUserAccRejected = 'account/getUser/rejected';

const incBonus = 'bonus/increment';
const decBonus = 'bonus/decrement';


function amountReducer(state = { amount: 1 }, action) {
    if (action.type === initAmount) {
        return { amount: state.amount + action.payload };
    } else if (action.type === incAmount) {
        return { amount: state.amount + 1 };
    } else if (action.type === decAmount) {
        return { amount: state.amount - 1 };
    } else if (action.type === incByAmount) {
        return { amount: state.amount + action.payload };
    } else if (action.type === getUserAccFulfilled) {
        return { amount: state.amount + action.payload, pending : false };
    } else if (action.type === getUserAccPending) {
        return { ...state, pending : action.payload };
    } else if (action.type === getUserAccRejected) {
        return { ...state, error : action.payload, pending : false };
    } else {
        return state;
    }
}

function bonusReducer(state = { point: 0 }, action) {
    if (action.type === incBonus) {
        return { point: state.point + 1 };
    } else if (action.type === decBonus) {
        return { point: state.point - 1 };
    } else if (action.type === incByAmount) {
        if (action.payload >= 100 && action.payload <= 200) {
            return { point: state.point + 1 };
        } else if (action.payload > 200) {
            return { point: state.point + 2 };
        } else {
            return { point: state.point };
        }
    } else {
        return state;
    }
}


const rootReducer = combineReducers({ amount: amountReducer, bonus: bonusReducer });
const store = createStore(rootReducer, applyMiddleware(logger.default, thunk));


// Action Creater
let url = `http://localhost:3000/accounts/`;

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
    }
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

function increaseBonus() {
    return { type: incBonus }
}

function getUserAccountFulfilled(value) {
    return { type: getUserAccFulfilled, payload: value }
}

function getUserAccountPending(value) {
    return { type: getUserAccPending, payload : value }
}

function getUserAccountRejected(error) {
    return { type: getUserAccRejected, payload: error }
}



setTimeout(() => {
    store.dispatch(getUserAccount(4));
}, 3000);




// ---- Subscribe is trigger during change made in state ----
// store.subscribe(() => {
//     console.log("SUBSCRIBE ::- ", store.getState())
// })