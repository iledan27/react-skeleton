import * as types from '../actions/actionTypes';

export default function homepageReducer(state = 0, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.LOAD_NUMBER_SUCCESS:
      return action.res.number;
    default:
      return state;
  }
}
