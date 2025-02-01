import { ReactNode } from "react";

type RouteConfig = {
    path: string;
    page: React.ReactNode | JSX.Element;
    isPrivate: boolean;
}
type AuthRouteProps = {
    children: ReactNode | JSX.Element;
    isPrivate: boolean;
}
export type { AuthRouteProps, RouteConfig };

