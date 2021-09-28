import * as actionType from '../actionTypes';

export const LoginAction = value => {
  return {
    type: actionType.LOGIN,
    value,
  };
};

export const ClearUserAction = value => {
  return {
    type: actionType.CLEAR_USER,
    value,
  };
};
