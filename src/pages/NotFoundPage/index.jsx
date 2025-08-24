import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import Page from "../Page";

const NotFoundPage = () => {
  return (
    <Page title="롤링 페이퍼 - 해당 페이지를 찾을 수 없습니다">
      <Header />
      <div className="text-center mt-10">
        <h1 className="font-28-bold text-purple-500">404 - 존재하지 않는 URL입니다</h1>
        <Link to="/" className="text-purple-300">
          Go back to Home
        </Link>
      </div>
    </Page>
  );
};

export default NotFoundPage;
