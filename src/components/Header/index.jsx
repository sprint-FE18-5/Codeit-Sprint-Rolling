import icLogo from "../../assets/icLogo.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { VISIBLE_HEADER_BTN_PATHS, VISIBLE_HEADER_SERVICE_PATHS } from "../../constants/VISIBLE_PATHS";
import useIsMatchURL from "../../hooks/useIsMatchURL";
import { CardCountInfo, ProfileGroup } from "../ProfileGroup";
import { useEffect, useState } from "react";
import getRecipients from "../../api/getRecipients";
import getMessages from "../../api/getMessages";
import Share from "../Share";
import Picker from "../Picker";
import getReactions from "../../api/getReactions";
import EmojiBadge from "../Badge/EmojiBadge";
import { Dropdown, DropdownContent, DropdownTrigger } from "../Dropdown";
import RegularButton from "../Button/RegularButton";
const HeaderBase = ({ children }) => {
  return <div className="border-b border-[#EDEDED] py-[11px]">{children}</div>;
};

const Header = () => {
  const isMatchHeaderBtnPath = useIsMatchURL(VISIBLE_HEADER_BTN_PATHS);
  const isMatchHeaderServicePath = useIsMatchURL(VISIBLE_HEADER_SERVICE_PATHS);
  const navigate = useNavigate();

  return (
    <div className={`${isMatchHeaderServicePath && "hidden md:block"}`}>
      <HeaderBase>
        <nav className="flex justify-between items-center my-container">
          <Link to="/" className="flex items-center gap-[8px] py-[6px]">
            <img src={icLogo} alt="header_logo" className="w-[28px] h-[28px]" />
            <h1 className="font-poppins font-bold leading-[100%]">Rolling</h1>
          </Link>

          {isMatchHeaderBtnPath && (
            <RegularButton variant="outlinedIcon" size={40} width={"157px"} onClick={() => navigate("/post")}>
              <span className="font-16-bold">롤링 페이퍼 만들기</span>
            </RegularButton>
          )}
        </nav>
      </HeaderBase>
    </div>
  );
};

const HeaderService = () => {
  const params = useParams();
  const { id: recipientId } = params;
  const [recipient, setRecipient] = useState({});
  const [messages, setMessages] = useState({});
  const [reactions, setReactions] = useState({});
  const [topReactions, setTopReactions] = useState([]);
  const profileImages = messages?.results?.map(message => message.profileImageURL);

  useEffect(() => {
    const getData = async () => {
      const recipientData = await getRecipients({ recipientId });
      const messagesData = await getMessages({ recipientId });
      const reactionsData = await getReactions({ recipientId });
      setRecipient(recipientData);
      setMessages(messagesData);
      setReactions(reactionsData);
      setTopReactions(recipientData.topReactions);
    };
    getData();
  }, []);

  return (
    <HeaderBase>
      <nav className="flex flex-col items-start md:flex-row md:justify-between items-center my-container">
        <h2 className="font-28-bold text-gray-800 h-[52px]">To.{recipient.name}</h2>
        <div className="flex items-center py-[11px] h-[52px] md:py-0">
          <div className="hidden lg:flex items-center gap-[11px]">
            <ProfileGroup profileCount={messages.count} profileImages={profileImages} />
            <CardCountInfo cardCount={messages.count} />
          </div>
          <span className="hidden lg:block w-px h-[28px] bg-[#EEEEEE] mx-[28px]"></span>
          <div className="flex items-center gap-[8px]">
            <Dropdown>
              <DropdownTrigger showArrow>
                <div className="flex gap-[8px]">
                  {topReactions?.map(reaction => (
                    <EmojiBadge reaction={reaction} />
                  ))}
                </div>
              </DropdownTrigger>
              <div className="w-[312px] absolute">
                <DropdownContent>
                  <div className="p-[24px] grid grid-cols-4 gap-[10px]">
                    {reactions?.results?.map(reaction => (
                      <div className="w-1/4">
                        <EmojiBadge reaction={reaction} />
                      </div>
                    ))}
                  </div>
                </DropdownContent>
              </div>
            </Dropdown>
            <Picker setReactions={setReactions} setTopReactions={setTopReactions} />
            <span className="w-px h-[28px] bg-[#EEEEEE] mx-[7px]"></span>
            <Share />
          </div>
        </div>
      </nav>
    </HeaderBase>
  );
};

export { Header, HeaderService };
