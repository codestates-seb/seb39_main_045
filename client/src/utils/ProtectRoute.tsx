import React from 'react';
import { Navigate } from 'react-router-dom';
import useSelectorTyped from 'utils/useSelectorTyped';
import { redirectLogin } from 'feature/location';
import { useDispatch } from 'react-redux';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const { loginStatus } = useSelectorTyped((state) => state.user);

  if (!loginStatus) {
    dispatch(redirectLogin());
    return <Navigate to={'/'} replace />;
  }

  return children;
};
export default ProtectedRoute;
