import { incBonus, decBonus, incByAmount } from "../constants";

function BonusReducer(state = { point: 1 }, action) {
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

export default BonusReducer;
