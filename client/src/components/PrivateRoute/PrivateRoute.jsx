import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './PrivateRoute.module.scss';
import LoadingToRedirect from './LoadingToRedirect/LoadingToRedirect';

function PrivateRoute({ children }) {
  const { token: tokenReduxStore } = useSelector((state) => state.user);

  return tokenReduxStore ? children : <LoadingToRedirect />;
}

export default PrivateRoute;
