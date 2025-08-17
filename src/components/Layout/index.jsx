import { Outlet } from "react-router";
import { Header, HeaderService } from "../Header";
import { VISIBLE_HEADER_SERVICE_PATHS } from "../../constants/VISIBLE_PATHS";
import useIsMatchURL from "../../hooks/useIsMatchURL";

const Layout = () => {
  const isMatchURL = useIsMatchURL(VISIBLE_HEADER_SERVICE_PATHS); // ["/post/:id", "/post/:id/edit"]
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-99">
        <Header />
        {isMatchURL && <HeaderService />}
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
