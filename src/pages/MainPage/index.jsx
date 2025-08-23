import imgIntroduceTop from "../../assets/imgIntroduceTop.svg";
import imgIntroduceBottom from "../../assets/imgIntroduceBottom.png";
import RegularButton from "../../components/Button/RegularButton";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="my-container mt-[124px] flex flex-col gap-[30px]">
      <section className=" bg-[#F6F8FF] flex flex-col gap-[30px] rounded-[16px] items-center justify-center lg:flex-row lg:justify-between lg:items-center lg:h-[324px] h-[440px]">
        <div className="flex flex-col gap-[16px] lg:w-[268px] md:w-[640px] lg:ml-[60px]">
          <span className="bg-purple-600 rounded-[50px] px-[12px] py-[6px] font-14-bold text-white w-[80px] h-[32px] flex gap-[4px]">
            <span>Point.</span>
            <span>01</span>
          </span>
          <h3 className="font-24-bold text-gray-900">누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</h3>
          {/* <div className="flex lg:block font-24-bold text-gray-900">
            <h3>누구나 손쉽게, 온라인</h3>
            <h3>롤링 페이퍼를 만들 수 있어요</h3>
          </div> */}
          <h4 className="font-18-regular text-gray-500">로그인 없이 자유롭게 만들어요.</h4>
        </div>
        <img src={imgIntroduceTop} alt="소개 이미지1" className="min-w-[354px]" />
      </section>
      <section className="bg-[#F6F8FF] flex items-center rounded-[16px] h-[324px]">
        <img src={imgIntroduceBottom} alt="소개 이미지1" className="w-[720px] h-[204px]" />
        <div className="flex flex-col gap-[16px]">
          <span className="bg-purple-600 rounded-[50px] px-[12px] py-[6px] font-14-bold text-white w-[80px] h-[32px] flex gap-[4px]">
            <span>Point.</span>
            <span>02</span>
          </span>
          <div className="font-24-bold text-gray-900">
            <h3>서로에게 이모지로 감정을</h3>
            <h3>표현해보세요</h3>
          </div>
          <h4 className="font-18-regular text-gray-500">롤링 페이퍼에 이모지를 추가할 수 있어요.</h4>
        </div>
      </section>

      <div className="flex justify-center py-10">
        <RegularButton
          variant="primary"
          size={56}
          width=""
          className={"lg:w-[280px] w-full"}
          onClick={() => navigate("/list")}
        >
          구경해보기
        </RegularButton>
      </div>
    </div>
  );
};

export default MainPage;
