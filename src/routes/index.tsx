import PageNotFound from 'modules/pageNotFound';
import Test1 from 'modules/test1';
import Test2 from 'modules/test2';
import React from "react";
import { RouteConfig } from "type/types";
import { routes } from "./route";
// Lazy-loaded components
const Login = React.lazy(() => import("modules/auth"));

export const AllRoutes: RouteConfig[] = [
  {
    path: routes.ROUTE_LOGIN,
    page: <Login />,
    isPrivate: false,
  },
  {
    path: routes.ROUTE_TEST1,
    page: <Test1 />,
    isPrivate: false,
  },
  {
    path: routes.ROUTE_TEST2,
    page: <Test2 />,
    isPrivate: false,
  },
  {
    path: routes.ROUTE_PAGE_NOTE_FOUND,
    page: <PageNotFound />,
    isPrivate: false,
  },
  {
    path: routes.ROUTE_PAGE_NOTE_FOUND,
    page: <PageNotFound />,
    isPrivate: true,
  },
];
