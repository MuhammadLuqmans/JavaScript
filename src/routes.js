import  Tabs  from "../src/pages/Tab";
import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

import LoadingScreen from "./components/layout/LoadingScreen";
import Wrapper from "./components/layout/Wrapper";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

/* USER */
//const UserApiKeys = Loadable(lazy(() => import("./pages/user/ApiKeys")));

// error
const Error = Loadable(lazy(() => import("./pages/404")));

// routes
const routes = [
  {
    path: "/",
    element: <Tabs />,
  },
  {
    path: "login",
    /*element: (
      <GuestGuard>
        <Login/>
      </GuestGuard>
    ),*/
  },
  {
    path: "user",
    element: <Wrapper/>,
    /*element: (
      <AuthGuard>
        <UserWallets />
      </AuthGuard>
    ),*/
    children: [
      {
        path: "wallets",
        //element: <UserWallets/>,
      },
      {
        path: "wallets/deposit",
        //element: <Deposit/>,
      },
      {
        path: "settings/apiKeys",
        //element: <UserApiKeys/>,
      },
    ]
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
