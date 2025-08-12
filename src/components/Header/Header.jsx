import icLogo from "../../assets/icLogo.png";
import { Link, useLocation, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const paths = ["/", "/list"];

  const hasRootOrListPath = paths.includes(pathname);

  return (
    <header className="fixed left-0 right-0 top-0 py-[11px] h-[65px] border-b-1 border-[#EDEDED]">
      <nav className="flex justify-between h-[42px] my-container">
        <Link to="/" className="flex items-center gap-[8px] py-[6px]">
          <img src={icLogo} alt="header_logo" style={{ width: "28px", height: "28px" }} />
          <h1 className="font-poppins font-bold leading-[100%]">Rolling</h1>
        </Link>

        {hasRootOrListPath && (
          <button className="Button Outlined-40" onClick={() => navigate("/")}>
            롤링 페이퍼 만들기
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
