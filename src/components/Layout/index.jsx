import { Outlet, useParams } from "react-router";
import { Header, HeaderService } from "../Header";
import { VISIBLE_HEADER_SERVICE_PATHS } from "../../constants/VISIBLE_PATHS";
import useIsMatchURL from "../../hooks/useIsMatchURL";
import getRecipients from "../../api/getRecipients";
import { useEffect, useState } from "react";

const Layout = () => {
  const params = useParams();
  const { id: recipientId } = params;
  const isMatchURL = useIsMatchURL(VISIBLE_HEADER_SERVICE_PATHS); // ["/post/:id", "/post/:id/edit"]
  const [recipient, setRecipient] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await getRecipients({ recipientId });
      setRecipient(response);
    };

    if (isMatchURL) {
      getData();
    }
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-99">
        <Header />
        {isMatchURL && <HeaderService recipient={recipient} />}
      </header>
      <Outlet context={{ recipient }} />
    </>
  );
};

export default Layout;
