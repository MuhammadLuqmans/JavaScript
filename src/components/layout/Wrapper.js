import { Fragment } from "react";
import { Outlet } from "react-router";

//import NavbarBackend from "../navbar/NavbarBackend";

const Wrapper = ({ children }) => {
  return (
    <Fragment>
      {children || <Outlet />}
    </Fragment>
  );
};

export default Wrapper;
