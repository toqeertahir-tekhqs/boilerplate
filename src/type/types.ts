import { ReactNode } from "react";

type RouteConfig = {
    path: string;
    page: React.ReactNode;
    isPrivate: boolean;
}
type AuthRouteProps = {
    children: ReactNode;
    isPrivate: boolean;
}
export type { AuthRouteProps, RouteConfig };

