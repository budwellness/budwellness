import { bindActionCreators } from '@reduxjs/toolkit';
// import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  userLoginUserAction,
  userLogutUserAction,
} from '../store/User/User.slice';

const rootActions = {
  ...userLoginUserAction,
  ...userLogutUserAction,
};

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(rootActions, dispatch);
};

export default useActions;
