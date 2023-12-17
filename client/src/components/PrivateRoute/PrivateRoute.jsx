import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect/LoadingToRedirect';

function PrivateRoute({ children }) {
  const { token: tokenReduxStore } = useSelector((state) => state.user);

  return tokenReduxStore ? children : <LoadingToRedirect />;
}

PrivateRoute.defaultProps = {
  children: null,
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
