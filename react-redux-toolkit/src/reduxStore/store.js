import { configureStore } from "@reduxjs/toolkit";
import  AccountReducer  from "../slices/AccountSlice";
import BonusReducer from "../slices/BonusSlice";
import RewardReducer from "../reducers/RewardReducer";

const store = configureStore({
    reducer : {
        account : AccountReducer,
        bonus : BonusReducer,
        reward : RewardReducer
    }
});


export default store;