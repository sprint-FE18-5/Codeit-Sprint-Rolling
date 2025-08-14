const MainImg = () => {
  return (
    <div
      className="w-full max-w-[205px] aspect-[205/161]
  rounded-2xl border border-gray-300
  bg-white shadow-sm
  flex flex-col gap-2"
    >
      {/* 상단 */}
      <div className="flex items-center gap-2 mx-3 my-4 border-b border-gray-300 py-2">
        {/* 이미지 */}
        <img
          src="https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?w=600&auto=format&fit=crop&q=60"
          alt="해"
          className="h-8 w-8 rounded-full object-cover"
        />

        {/* 이름 + 친구뱃지 */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-900">
            From. <span className="font-semibold text-gray-900">해</span>
          </span>

          <span className="w-fit rounded bg-blue-100 px-1 text-xs text-blue-600">
            행성
          </span>
        </div>
      </div>

      {/* 중단 */}
      <div className="text-gray-600 text-xs -mt-4 mx-4">
        원하시는 사진 글자 뱃지글자 text 내용 넣으시면 됩니다!
      </div>

      {/* 하단 */}
      <div className="text-gray-600 text-xs ml-4 mt-3">2025.08.14</div>
    </div>
  );
};
export default MainImg;
