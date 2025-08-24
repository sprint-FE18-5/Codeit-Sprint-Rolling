import imgIntroduceTop from "../../assets/imgIntroduceTop.svg";
import imgIntroduceBottom from "../../assets/imgIntroduceBottom.png";
import RegularButton from "../../components/Button/RegularButton";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="my-container">
      <div className="mt-[106px] md:mt-[113px] lg:mt-[124px] mb-[40px] md:mb-[50px] lg:mb-[24px] flex flex-col gap-[30px]">
        {/* section 1 */}
        <section className="bg-[#F6F8FF] flex flex-col lg:flex-row w-full py-[24px] md:py-[40px] lg:py-[60px] rounded-[16px] overflow-hidden">
          <div className="px-[24px] md:mr-auto md:pl-[40px] lg:pl-[60px] mb-[36px] lg:max-w-[340px]">
            <span className="inline-block bg-purple-600 rounded-[50px] px-[12px] py-[4px] md:py-[6px] mb-[16px] font-14-bold text-white leading-[20px]">
              Point. 01
            </span>
            <h3 className="font-24-bold text-gray-900 mb-[8px] break-normal">
              누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
            </h3>
            <h4 className="font-18-regular text-gray-500">로그인 없이 자유롭게 만들어요.</h4>
          </div>
          <div className="flex justify-center">
            <img src={imgIntroduceTop} alt="소개 이미지1" className="min-w-[354px]" />
          </div>
        </section>

        {/* section 2 */}
        <section className="bg-[#F6F8FF] flex flex-col lg:flex-row-reverse w-full py-[24px] md:py-[40px] lg:py-[60px] rounded-[16px]">
          <div className="px-[24px] md:mr-auto md:pl-[40px] lg:pl-0 mb-[36px] lg:max-w-[320px]">
            <span className="inline-block bg-purple-600 rounded-[50px] px-[12px] py-[4px] md:py-[6px] mb-[16px] font-14-bold text-white leading-[20px]">
              Point. 2
            </span>
            <h3 className="font-24-bold text-gray-900 mb-[8px] break-keep">서로에게 이모지로 감정을 표현해보세요</h3>
            <h4 className="font-18-regular text-gray-500">롤링 페이퍼에 이모지를 추가할 수 있어요.</h4>
          </div>
          <div className="flex justify-center">
            <img src={imgIntroduceBottom} alt="소개 이미지1" className="min-w-[320px]" />
          </div>
        </section>
      </div>
      <div className="flex justify-center bottom-0 py-[24px]">
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
