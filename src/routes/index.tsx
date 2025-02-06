import Login from 'modules/auth';
import ChitFundGroup from 'modules/chitFundGroup';
import DisputeResolutions from 'modules/disputeResolutions';
import KYCComplience from 'modules/kycComplience';
import PageNotFound from 'modules/pageNotFound';
import SmartContracts from 'modules/smartContracts';
import Transactions from 'modules/transactions';
import { RouteConfig } from "type/types";
import { routes } from "./route";

export const AllRoutes: RouteConfig[] = [
  {
    path: routes.ROUTE_LOGIN,
    page: <Login />,
    isPrivate: false,
  },
  {
    path: routes.ROUTE_CHIT_FUNDS_GROUPS,
    page: <ChitFundGroup />,
    isPrivate: true,
  },
  {
    path: routes.ROUTE_TRANSACTIONS,
    page: <Transactions />,
    isPrivate: true,
  },
  {
    path: routes.ROUTE_SMART_CONTRACTS,
    page: <SmartContracts />,
    isPrivate: true,
  },
  {
    path: routes.ROUTE_KYC_COMPLIANCE,
    page: <KYCComplience />,
    isPrivate: true,
  },
  {
    path: routes.ROUTE_DISPUTE,
    page: <DisputeResolutions />,
    isPrivate: true,
  },
  {
    path: routes.ROUTE_PAGE_NOTE_FOUND,
    page: <PageNotFound />,
    isPrivate: true,
  },
];
