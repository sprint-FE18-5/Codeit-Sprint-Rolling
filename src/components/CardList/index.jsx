import { useNavigate } from "react-router-dom";
import { ProfileGroup, CardCountInfo } from "../ProfileGroup";
import EmojiBadge from "../EmojiBadge";

// CardList 컴포넌트
const CardList = ({
  title = "To. 이름",
  recentMessages = [],
  profileCount = 0,
  cardCount = 0,
  bgColor = "bg-violet-100",
  emojiStats = [],
  imageUrl = "",
  toPage = "/post/1",
}) => {
  const navigate = useNavigate();

  // 가장 많이 받은 이모티콘 3개 추출
  const topEmojis = [...emojiStats].sort((a, b) => b.count - a.count).slice(0, 3);

  // recentMessages에서 프로필 이미지 추출
  const profileImages = recentMessages.slice(0, 3).map(msg => ({
    id: msg.id,
    profileImageURL: msg.profileImageURL,
  }));

  return (
    <div
      className={`relative rounded-2xl shadow-sm ${bgColor} cursor-pointer p-6
      w-[208px] h-[232px] min-w-[208px] min-h-[232px]
      md:w-[275px] md:h-[260px] md:min-w-[208px] md:min-h-[232px] border border-black/10`}
      onClick={() => navigate(toPage)}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="card background"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0 opacity-70"
        />
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div>
          <div className="font-bold text-[18px] md:text-[24px] mb-3 text-[#181818]">{title}</div>
          <ProfileGroup profileImages={profileImages} profileCount={profileCount} />
          <div className="mb-4 mt-3">
            <CardCountInfo cardCount={cardCount} />
          </div>
        </div>
        <div className="flex-1" />
        <div className="w-full h-[1px] bg-black/15 mb-[16px]" />
        <div className="flex gap-1 md:gap-2 w-full">
          {topEmojis.map(reaction => (
            <EmojiBadge key={reaction.id ?? reaction.emoji} reaction={reaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
