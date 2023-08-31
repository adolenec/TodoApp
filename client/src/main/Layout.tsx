import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header title="TodoApp" />
      <div className="container text">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
