import React from 'react';
import { Navigate } from 'react-router-dom';
import { redirectLogin } from 'feature/location';
import { useDispatch } from 'react-redux';

interface ProtectedRouteProps {
  children: JSX.Element
  isLoggedIn: boolean
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children, isLoggedIn } = props;
  const dispatch = useDispatch();

  if (!isLoggedIn) {
    dispatch(redirectLogin());
    return <Navigate to="/login" />;
  }

  return children;
};
export default ProtectedRoute;
