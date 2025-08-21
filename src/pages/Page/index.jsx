import usePageTitle from "../../hooks/usePageTitle";

/**
 * 페이지 타이틀 설정 컴포넌트
 */
const Page = ({ title = "", children }) => {
  usePageTitle(title);
  return <>{children}</>;
};

export default Page;
