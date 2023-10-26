import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  userSetTokenAction,
  userToggleUserLogin,
} from '../store/User/User.slice';

const rootActions = {
  ...userSetTokenAction,
  ...userToggleUserLogin,
};

const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;
