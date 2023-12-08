import { bindActionCreators } from '@reduxjs/toolkit';
// import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  userLoginUserAction,
  userLogoutUserAction,
} from '../store/user/user.slice';

const rootActions = {
  ...userLoginUserAction,
  ...userLogoutUserAction,
};

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(rootActions, dispatch);
};

export default useActions;
