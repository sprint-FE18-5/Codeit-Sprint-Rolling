import { useLocation, matchPath } from "react-router";

const useIsMatchURL = PATHS => {
  const { pathname } = useLocation();
  const isMatchURL = PATHS.some(path => matchPath(path, pathname));
  return isMatchURL;
};

export default useIsMatchURL;
