import { Outlet } from "react-router";
const Layout = () => {
  return (
    <>
      <header>헤더입니다!!!</header>
      <Outlet />
    </>
  );
};

export default Layout;
