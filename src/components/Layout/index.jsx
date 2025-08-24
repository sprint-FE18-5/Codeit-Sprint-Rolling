import { Outlet } from "react-router-dom";
import { Header, HeaderService } from "../Header";
import { VISIBLE_HEADER_SERVICE_PATHS } from "../../constants/VISIBLE_PATHS";
import useIsMatchURL from "../../hooks/useIsMatchURL";

const Layout = () => {
  const isMatchHeaderServicePath = useIsMatchURL(VISIBLE_HEADER_SERVICE_PATHS);
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-99 bg-white">
        <Header />
        {isMatchHeaderServicePath && <HeaderService />}
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
