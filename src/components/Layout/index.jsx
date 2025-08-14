import { Outlet } from "react-router";
import { Header, HeaderService } from "../Header";

const Layout = () => {
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-99">
        <Header />
        <HeaderService />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
