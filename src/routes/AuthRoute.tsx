import Layout from 'layout';
import React from "react";
import { Navigate } from "react-router-dom";
import { AuthRouteProps } from "type/types";

const AuthRoute: React.FC<AuthRouteProps> = ({
  children,
  isPrivate,
}) => {
  // const { token } = useSelector((state: RootState) => state.states);
  const token = 'sssss'
  if (isPrivate) {
    if (!token) {
      return <Navigate to="/login" replace />;
    }

  }

  if (!isPrivate && token) {
    return <Navigate to='/' replace />;
  }

  return (
    <>
      <Layout isPrivate={isPrivate} token={token}>
        {children}
      </Layout>
    </>
  );
};

export default AuthRoute;
