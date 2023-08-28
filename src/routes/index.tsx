import { lazy, LazyExoticComponent, Fragment, Suspense } from "react";
import { Route, Outlet } from "react-router-dom";
import { DETAILS_PATH, HOME_PATH } from "./constants";

interface RouteProps {
    path?: string;
    element?: LazyExoticComponent<() => JSX.Element> | null;
    layout?: LazyExoticComponent<(props: { children: React.ReactNode }) => JSX.Element> | null;
    guard?: LazyExoticComponent<(props: { children: React.ReactNode }) => JSX.Element> | null;
    children?: RouteProps[];
}

export const renderRoutes = (routes: RouteProps[]) => {
    return routes.map((route, index) => {
        const Component = route.element || Fragment;
        const Layout = route.layout || Fragment;
        const Guard = route.guard || Fragment;
        return (
            <Route
                key={index}
                path={route.path}
                element={
                    <Suspense fallback={<h1>loading...</h1>}>
                        <Guard>
                            <Layout>
                                {route.children ? <Outlet /> : <Component />}
                            </Layout>
                        </Guard>
                    </Suspense>                    
                }
            >
                {route.children && renderRoutes(route.children)}
            </Route>
        );
    });
}

export const routes: RouteProps[] = [
    {
        path: '/login',
        element: lazy(async () => await import("../pages/Login")),
    },
    {
        guard: lazy(async () => await import("../guards/AuthGuard")),
        children: [
            {
                path: HOME_PATH,
                element: lazy(async () => await import("../pages/Home")),
            },
            {
                path: DETAILS_PATH,
                element: lazy(async () => await import("../pages/Details")),
            }
        ]
    },
    {
        path:'*',
        element: lazy(async ()=> await import("../pages/NotFound")),
    }

];