import { combineReducers } from 'redux';

import AccountReducer from './AccountReducer';
import BonusReducer from './BonusReducer';

const RootReducer = combineReducers({
    account : AccountReducer,
    bonus : BonusReducer
});


export default RootReducer;
