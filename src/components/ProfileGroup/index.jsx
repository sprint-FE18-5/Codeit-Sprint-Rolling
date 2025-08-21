// 프로필 이미지 그룹 컴포넌트
const ProfileGroup = ({ profileImages = [], profileCount = 0 }) => {
  const hiddenCount = profileCount - profileImages.length;
  return (
    <div className="flex items-center relative h-7">
      {profileImages.slice(0, 3).map(msg => (
        <img
          key={msg.id}
          src={msg.profileImageURL}
          alt="프로필 이미지"
          className="w-7 h-7 rounded-full border-2 border-white -ml-3 first:ml-0 z-10"
        />
      ))}
      <span className="flex items-center justify-center h-7 rounded-full bg-white text-[#555555] text-xs font-normal z-20 left-[60px] top-0 ml-[-12px] px-2">
        +{hiddenCount}
      </span>
    </div>
  );
};

// 카드 개수 정보 컴포넌트
const CardCountInfo = ({ cardCount }) => {
  return (
    <div className="mb-4 mt-3">
      <span className="font-bold text-14 md:text-16">{cardCount}</span>
      <span className="font-normal text-14 md:text-16">명이 작성했어요!</span>
    </div>
  );
};

export { ProfileGroup, CardCountInfo };
