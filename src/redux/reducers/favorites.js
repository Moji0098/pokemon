import * as actionType from '../actionTypes';

const initialState = {
  favList: [],
};

export const favorites = (state = initialState, {type, value = null}) => {
  switch (type) {
    case actionType.ADD_FAVORITE:
      const newList = [...state?.favList];
      const {name} = value;
      const arr = [];
      for (let val in newList) {
        arr.push(newList[val]?.name);
      }

      if (newList.length === 0) {
        newList.push(value);
        return {
          favList: newList,
        };
      } else if (newList.length > 0) {
        if (arr.includes(name)) {
          let i = arr.indexOf(name);

          newList.splice(i, 1);
          return {
            favList: newList,
          };
        } else {
          newList.push(value);
          return {
            favList: newList,
          };
        }
      }
      break;
    default:
      return state;
  }
};
