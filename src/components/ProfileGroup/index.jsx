import { useState } from "react";
import defaultProfileImg from "../../assets/icProfile.svg";

// 프로필 이미지 컴포넌트
const ProfileImage = ({ src, alt = "프로필 이미지", className = "" }) => {
  const [imgSrc, setImgSrc] = useState(src || defaultProfileImg);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(defaultProfileImg)}
      className={`w-7 h-7 rounded-full border-2 border-white bg-white -ml-3 first:ml-0 z-10 ${className}`}
    />
  );
};

// 프로필 이미지 그룹 컴포넌트
const ProfileGroup = ({ profileImages = [], profileCount = 0 }) => {
  const MAX_VISIBLE_AUTHORS = 3;
  const hiddenCount = profileCount - MAX_VISIBLE_AUTHORS;

  return (
    <>
      {profileImages.length > 0 && (
        <div className="flex items-center relative h-7">
          {profileImages.map((img, idx) => (
            <ProfileImage key={img.id || idx} src={img.profileImageURL} />
          ))}
          {hiddenCount > 0 && (
            <span className="flex items-center justify-center h-7 rounded-full bg-white font-12-regular text-grayscale-500 z-20 left-[60px] top-0 ml-[-12px] px-2">
              +{hiddenCount}
            </span>
          )}
        </div>
      )}
    </>
  );
};

// 카드 작성자 수 정보 컴포넌트
const CardCountInfo = ({ cardCount }) => {
  const printCount = cardCount > 0 ? cardCount : "";
  const printMsg = cardCount > 0 ? "명이 작성했어요!" : "작성된 메시지가 없어요!";

  return (
    <div className="mb-4 mt-3">
      <span className="font-14-bold md:font-16-bold">{printCount}</span>
      <span className="font-14-regular md:font-16-regular">{printMsg}</span>
    </div>
  );
};

export { ProfileGroup, CardCountInfo };
