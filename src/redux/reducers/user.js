import * as actionType from '../actionTypes';

const initialState = {
  fullname: '',
  token: null,
};

export const user = (state = initialState, {type, value = null}) => {
  switch (type) {
    case actionType.LOGIN:
      return {
        ...value,
      };
    case actionType.CLEAR_USER:
      return {};
    default:
      return state;
  }
};
