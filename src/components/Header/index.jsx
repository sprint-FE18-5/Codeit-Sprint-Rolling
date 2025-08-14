import icLogo from "../../assets/icLogo.svg";
import { Link, useLocation, useNavigate } from "react-router";

const HeaderBase = ({ children }) => {
  return (
    <div className="border-b border-[#EDEDED] py-[11px] h-[65px]">
      <nav className="flex justify-between h-[42px] my-container">{children}</nav>
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const PATHS = ["/", "/list"];

  const isRootOrListPath = PATHS.includes(pathname);

  return (
    <HeaderBase>
      <Link to="/" className="flex items-center gap-[8px] py-[6px]">
        <img src={icLogo} alt="header_logo" className="w-[28px] h-[28px]" />
        <h1 className="font-poppins font-bold leading-[100%]">Rolling</h1>
      </Link>

      {isRootOrListPath && (
        <button className="Button Outlined-40" onClick={() => navigate("/post")}>
          롤링 페이퍼 만들기
        </button>
      )}
    </HeaderBase>
  );
};

const HeaderService = () => {
  return <HeaderBase>Test</HeaderBase>;
};

export { Header, HeaderService };
