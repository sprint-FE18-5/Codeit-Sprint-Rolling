import ProfileOption from "./ProfileOption";
import icProfile from "../../assets/icProfile.svg";

const ProfileSelector = ({ images, selectedIdx, onSelect, isLoading }) => (
  <div className="grid gap-x-[32px] grid-cols-[80px_auto] items-center">
    <div className="selected-profile w-[80px] h-[80px] rounded-full overflow-hidden">
      <img
        src={(selectedIdx === null && icProfile) || images[selectedIdx]}
        alt={(selectedIdx === null && "기본 프로필 이미지") || `선택된 프로필 이미지 ${selectedIdx + 1}`}
        className="w-full h-full"
      />
    </div>
    <div className="profile-options">
      <p className="notification text-16 text-grayscale-500 mb-[12px]">프로필 이미지를 선택해주세요!</p>
      <div className="options-list flex flex-wrap gap-[4px_2px] md:gap-[4px]">
        {isLoading ? (
          <span>이미지 불러오는 중...</span>
        ) : (
          images.map((image, idx) => (
            <ProfileOption
              key={image + idx}
              image={image}
              alt={`Profile Image ${idx + 1}`}
              selected={selectedIdx === idx}
              onClick={() => onSelect(idx)}
            />
          ))
        )}
      </div>
    </div>
  </div>
);

export default ProfileSelector;
