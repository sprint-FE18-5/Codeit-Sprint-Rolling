import icLogo from "../../assets/icLogo.svg";
import { Link, useNavigate, useParams } from "react-router";
import { VISIBLE_HEADER_BTN_PATHS } from "../../constants/VISIBLE_PATHS";
import useIsMatchURL from "../../hooks/useIsMatchURL";
import { CardCountInfo, ProfileGroup } from "../ProfileGroup";
import { useEffect, useState } from "react";
import getRecipients from "../../api/getRecipients";
import getMessages from "../../api/getMessages";
import Share from "../Share";

const HeaderBase = ({ children }) => {
  return (
    <div className="border-b border-[#EDEDED] py-[11px] h-[65px]">
      <nav className="flex justify-between items-center h-[42px] my-container">{children}</nav>
    </div>
  );
};

const Header = () => {
  const isMatchURL = useIsMatchURL(VISIBLE_HEADER_BTN_PATHS);
  const navigate = useNavigate();

  return (
    <HeaderBase>
      <Link to="/" className="flex items-center gap-[8px] py-[6px]">
        <img src={icLogo} alt="header_logo" className="w-[28px] h-[28px]" />
        <h1 className="font-poppins font-bold leading-[100%]">Rolling</h1>
      </Link>

      {isMatchURL && (
        <button className="Button Outlined-40" onClick={() => navigate("/post")}>
          롤링 페이퍼 만들기
        </button>
      )}
    </HeaderBase>
  );
};

const HeaderService = () => {
  const params = useParams();
  const { id: recipientId } = params;
  const [recipient, setRecipient] = useState({});
  const [messages, setMessages] = useState({});

  const profileImages = messages?.results?.map(message => message.profileImageURL);

  useEffect(() => {
    const getData = async () => {
      const recipientData = await getRecipients({ recipientId });
      const messagesData = await getMessages({ recipientId });
      console.log(recipientData, messagesData);
      setRecipient(recipientData);
      setMessages(messagesData);
    };
    getData();
  }, []);

  return (
    <HeaderBase>
      <h2 className="">To.{recipient.name}</h2>
      <div className=" flex items-center">
        <div className="flex items-center gap-[11px]">
          <ProfileGroup profileCount={messages.count} profileImages={profileImages} />
          <CardCountInfo cardCount={messages.count} />
        </div>
        <div className="border-r h-[28px] w-[28px] text-gray-200"></div>
        <div>
          {/* 이모지 더보기 : 드롭다운 완성시 보완예정 */}
          {/* 이모지 추가 : 드랍다운 완성시 보완예정 */}
          {/* 공유하기 : 드랍다운 완성시 보완예정 */}
          <Share />
        </div>
      </div>
    </HeaderBase>
  );
};

export { Header, HeaderService };
