// import Sidebar from "components/Sidebar/Sidebar";
// import Spinner from "components/Spinner/spinner";
// import PageNotFound from "components/global/pageNotFound";
import Layout from 'layout';
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "store/store";
import { AuthRouteProps } from "type/types";

const AuthRoute: React.FC<AuthRouteProps> = ({
  children,
  isPrivate,
}) => {
  const { token } = useSelector((state: RootState) => state.states);

  if (isPrivate) {
    if (!token) {
      return <Navigate to="/login" replace />;
    }

  }

  if (!isPrivate && token) {
    return <Navigate to='/' replace />;
  }

  // const containerStyles: React.CSSProperties = {
  //   height: "calc(100dvh)",
  // };

  return (
    <>
      {isPrivate && token && (
        <></>
      )}
      {!isPrivate && !token && (
        <Layout>
          {children}
        </Layout>
      )}
    </>
  );
};

export default AuthRoute;
