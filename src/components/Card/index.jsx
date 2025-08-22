import { useNavigate } from "react-router-dom";
import RelationshipBadge from "../Badge/RelationshipBadge";
import CircleButton from "../Button/CircleButton";
import RegularButton from "../Button/RegularButton";
import icPlus from "../../assets/icPlus.svg";
import icDelete from "../../assets/icDelete.svg";

/**
 * Card 컴포넌트 props
 * @param {string} imgProfile - 프로필 이미지 URL
 * @param {string} name - 작성자 이름
 * @param {string} badgeText - 뱃지에 표시할 텍스트(컬러는 bedge컴포넌트에서 자동연결)
 * @param {string} message - 카드에 표시할 메시지
 * @param {string} date - 작성 날짜
 * @param {boolean} isDeleteMode - 삭제 버튼 표시 여부
 * @param {function} onDelete - 삭제 버튼 클릭 시 호출되는 함수
 * @param {function} onClick - 카드 클릭 시 호출되는 함수 (모달)
 * @param {string|number} cardID - 카드 고유 ID
 */
// 삭제 버튼 컴포넌트
const DeleteButton = ({ onClick }) => (
  <RegularButton
    onClick={onClick}
    className="absolute top-6 right-6"
    aria-label="삭제"
    type="button"
    variant="outlinedIcon"
    size={36}
    width="36px"
    isSquare={true}
  >
    <img src={icDelete} alt="삭제" />
  </RegularButton>
);

// 카드 컴포넌트
const Card = ({
  imgProfile,
  name,
  badgeText,
  message = "",
  date = "",
  isDeleteMode = false,
  onDelete,
  onClick,
  cardID,
}) => {
  const handleClickDelete = e => {
    e.stopPropagation();
    onDelete?.(cardID);
  };

  //모달 핸들러
  const handleClickCard = () => {
    onClick?.(cardID);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-sm p-6 h-71 flex flex-col gap-4 relative cursor-pointer transition-all font-pretendard"
      onClick={handleClickCard} // 모달 연결
    >
      <div className="flex items-center gap-3">
        <img src={imgProfile} alt={name} className="w-14 h-14 rounded-full object-cover border border-grayscale-200" />
        <div>
          <div>
            <span className="text-18 md:text-20">From.</span>
            <span className="text-16 md:text-20 font-bold ml-1">{name}</span>
          </div>
          <RelationshipBadge relationship={badgeText} />
        </div>
        {isDeleteMode && <DeleteButton onClick={handleClickDelete} />}
      </div>
      <p className="text-15 md:text-18 text-grayscale-600 pt-2 border-t border-grayscale-200 line-clamp-3">{message}</p>
      <div className="font-12-regular text-grayscale-400 mt-auto">{date}</div>
    </div>
  );
};

// 카드 추가 컴포넌트
const AddCard = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}/message`);
  };

  return (
    <div className="bg-white rounded-2xl h-71 shadow-sm flex items-center justify-center transition-all">
      <CircleButton onClick={handleClick}>
        <img src={icPlus} alt="카드 추가" />
      </CircleButton>
    </div>
  );
};

export { Card, AddCard };
