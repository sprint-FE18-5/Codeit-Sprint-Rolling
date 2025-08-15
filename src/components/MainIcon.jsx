import plusIcon from "../assets/plusIcon.png";
const MainIcon = () => {
  return (
    <>
      {/* 전체 레이아웃 */}
      <div className="px-45 py-25">
        {/* 위쪽 레이아웃 */}
        <div className="flex items-center gap-2">
          <button className="flex items-center bg-gray-500 rounded-4xl text-white px-2 py-1">
            <span>👍</span>
            <span>10</span>
          </button>
          <button className="flex items-center bg-gray-500 rounded-4xl text-white px-3 py-1">
            <span>24</span>
          </button>
          <button
            className="flex items-center bg-gray-500 rounded-4xl text-white px-2 py-1 hidden sm:inline
          "
          >
            <span>😍</span>
            <span>24</span>
          </button>
          <button className="hidden sm:inline">
            <span>⋁</span>
          </button>

          <button
            className="flex items-center border border-gray-300 rounded-4xl text-black px-3 py-1 ml-9
            w-20
         
          "
          >
            <span>➕</span>
            <span className="hidden sm:inline">추가</span>
          </button>
          <img
            src={plusIcon}
            alt="plus icon"
            className="w-8 h-8 mt-3 -ml-1 hidden sm:inline"
          />
        </div>
        {/* 아래쪽 레이아웃 */}
        <div
          className="w-full max-w-[293px] aspect-[293/144] rounded-2xl border
        border-gray-300 bg-white shadow-sm flex flex-col gap-2 "
        >
          {/* 위쪽 버튼들 */}
          <div className="flex gap-2 mt-6 ml-8">
            <button className="flex items-center bg-gray-500 rounded-4xl text-white w-fit px-4 py-2">
              <span>👍</span>
              <span>24</span>
            </button>
            <button
              className="flex items-center bg-gray-500 rounded-4xl text-white w-fit px-4 py-2
            hidden sm:inline"
            >
              <span>😍</span>
              <span>12</span>
            </button>
            <button
              className="flex items-center bg-gray-500 rounded-4xl text-white w-fit px-4 py-2
            hidden sm:inline"
            >
              <span>🎉</span>
              <span>24</span>
            </button>
          </div>
          {/* 아래쪽 버튼들 */}
          <div className="flex gap-2 mt-1 ml-8">
            <button className="flex items-center bg-gray-500 rounded-4xl text-white w-fit px-4 py-2">
              <span>🥺</span>
              <span>10</span>
            </button>
            <button
              className="flex items-center bg-gray-500 rounded-4xl text-white w-fit px-4 py-2
            hidden sm:inline"
            >
              <span>🥳</span>
              <span>8</span>
            </button>
            <button
              className="flex items-center bg-gray-500 rounded-4xl text-white w-fit px-4 py-2
            hidden sm:inline"
            >
              <span>👏</span>
              <span>10</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainIcon;
