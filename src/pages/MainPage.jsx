import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/list");
  };
  return (
    <>
      <div className="flex justify-center mt-30">
        <img src="/main-img.png" alt="메인 이미지" />
      </div>
      <div className="flex justify-center mt-10 mb-30">
        <button className="px-22 py-3 bg-purple-600 text-white rounded-lg font-15 -regular" onClick={onClickButton}>
          구경해보기
        </button>
      </div>
    </>
  );
};
export default MainPage;
