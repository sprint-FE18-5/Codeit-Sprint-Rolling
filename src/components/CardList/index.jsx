import { useNavigate } from "react-router-dom";
import { ProfileGroup, CardCountInfo } from "../ProfileGroup";
import EmojiBadge from "../Badge/EmojiBadge";

/**
 * CardList 컴포넌트 props
 * @param {string} title - 카드 제목
 * @param {Array} recentMessages - 최근 메시지 배열 (프로필 이미지 추출용)
 * @param {number} profileCount - 프로필 이미지 그룹의 총 개수
 * @param {number} cardCount - 카드 작성자 수
 * @param {string} bgColor - 카드 배경색 클래스명 (배경 이미지가 없을때만 적용)
 * @param {string} imgBackground - 카드 배경 이미지 UR (배경 이미지 사용할때만 적용)
 * @param {Array} emojiStats - 이모티콘 통계 배열
 * @param {string} toPage - 카드 클릭 시 이동할 경로
 * bgColor와 imgBackground는 동시에 사용하지 않도록 설정 필요, card-list 생성 페이지에서 둘다 선택 안하면 생성x 설정 필요
 */

// CardList 컴포넌트
const CardList = ({
  title = "제목",
  recentMessages = [],
  profileCount = 0,
  cardCount = 0,
  bgColor = "",
  imgBackground = "",
  emojiStats = [],
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

  // 배경 이미지 변수 조건부 렌더링
  const imgBackgroundElement = imgBackground ? (
    <>
      <img
        src={imgBackground}
        alt="카드 배경 이미지"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0"
      />
      <div className="absolute inset-0 rounded-2xl bg-black/50 z-10" />
    </>
  ) : null;

  const fontColorClass = imgBackground ? "text-white" : "text-grayscale-900";
  const emojiBgClass = imgBackground ? "bg-black/30" : "";

  return (
    <div
      className={`relative rounded-2xl shadow-sm ${bgColor} cursor-pointer p-6
      w-[208px] h-[232px] min-w-[208px] min-h-[232px]
      md:w-[275px] md:h-[260px] md:min-w-[208px] md:min-h-[232px] border border-black/10 font-pretendard`}
      onClick={() => navigate(toPage)}
    >
      {imgBackgroundElement}

      <div className="relative z-20 flex flex-col h-full">
        <div>
          <div className={`font-bold text-18 md:text-24 mb-3 ${fontColorClass} line-clamp-1`}>To. {title}</div>
          <ProfileGroup profileImages={profileImages} profileCount={profileCount} />
          <div className={`mb-4 mt-3 ${fontColorClass}`}>
            <CardCountInfo cardCount={cardCount} />
          </div>
        </div>
        <div className="flex-1" />
        <div className={`w-full h-[1px] bg-black/15 mb-[16px] ${imgBackground ? "bg-white/30" : ""}`} />
        <div className="flex gap-1 md:gap-2 w-full">
          {topEmojis.map(reaction => (
            <EmojiBadge
              key={reaction.id ?? reaction.emoji}
              reaction={reaction}
              className={emojiBgClass + " " + fontColorClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
