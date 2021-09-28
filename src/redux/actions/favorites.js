import * as actionType from '../actionTypes';

export const AddFavorite = value => {
  return {
    type: actionType.ADD_FAVORITE,
    value,
  };
};
