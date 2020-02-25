import * as types from './actionTypes';
import * as incrementApi from '../../api/incrementApi';

export function incrementSuccess() {
  return { type: types.INCREMENT };
}

export function decrementSuccess() {
  return { type: types.DECREMENT };
}

export function increment() {
  return function(dispatch) {
    return incrementApi
      .incrementNumber()
      .then(res => {
        dispatch(incrementSuccess());
      })
      .catch(error => {
        throw error;
      });
  };
}

export function decrement() {
  return function(dispatch) {
    return incrementApi
      .decrementNumber()
      .then(res => {
        dispatch(decrementSuccess());
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadNumberSuccess(res) {
  return { type: types.LOAD_NUMBER_SUCCESS, res };
}

export function loadNumber() {
  return function(dispatch) {
    return incrementApi
      .getNumber()
      .then(res => {
        dispatch(loadNumberSuccess(res));
      })
      .catch(error => {
        throw error;
      });
  };
}
