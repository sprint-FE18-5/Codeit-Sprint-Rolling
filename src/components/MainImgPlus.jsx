import plusIcon from "../assets/plusIcon.png";

const MainImgPlus = () => {
  return (
    <div
      className="w-full max-w-[205px] aspect-[205/161]
      rounded-2xl border border-gray-300
      bg-white shadow-sm flex items-center justify-center relative"
    >
      {/* 회색 원 플러스 */}
      <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center absolute">
        <span className="text-white text-3xl leading-none">+</span>
      </div>

      {/* 클릭 아이콘 이미지 */}
      <img src={plusIcon} alt="plus icon" className="w-8 h-8 ml-16" />
    </div>
  );
};

export default MainImgPlus;
