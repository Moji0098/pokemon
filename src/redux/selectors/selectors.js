import {useSelector, shallowEqual} from 'react-redux';

const useSelectorUserInfo = () =>
  useSelector(state => state.user, shallowEqual);
const useSelectorFavorites = () =>
  useSelector(state => state.favorites, shallowEqual);

export {useSelectorUserInfo, useSelectorFavorites};
