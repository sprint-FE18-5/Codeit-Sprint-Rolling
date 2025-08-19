import RelationshipBadge from "../../Badge/RelationshipBadge";
import Button from "../../Button";
import icProfile from "../../../assets/icProfile.svg";

/**
 * 모달 내부 콘텐츠 컴포넌트(카드 관련 내용)
 *
 * @param {Object} props - ModalContent 컴포넌트 props
 * @param {string} [props.profileImg=""] - 프로필 이미지 URL. 값이 없으면 기본 이미지(icProfile) 사용됨
 * @param {string} [props.name=""] - 보낸 사람 이름
 * @param {"지인|동료|가족|친구"} [props.relationship="지인"] - 받는 사람과의 관계
 * @param {string} [props.message=""] - 메시지 본문
 * @param {string} [props.date=""] - 메시지 작성 날짜
 * @param {funtion} props.onClose - onClose 콜백 함수
 * @returns {JSX.Element}
 */
const ModalContent = ({ profileImg = "", name = "", relationship = "지인", message = "", date = "", onClose }) => {
  return (
    <div className="md:w-[600px] w-[320px] md:p-[40px] p-[20px] bg-white rounded-[16px] shadow-sm flex flex-col gap-[20px]">
      <div className="flex items-center gap-3">
        <img
          src={profileImg || icProfile}
          alt={name}
          className="w-[56px] h-[56px] rounded-full object-cover border border-gray-200"
        />
        <div>
          <div>
            <span className="md:text-[20px] text-[18px] font-normal">From.</span>
            <span className="md:text-[20px] text-[16px] font-bold ml-1">{name}</span>
          </div>
          <RelationshipBadge relationship={relationship} />
        </div>
        <div className="text-xs text-gray-400 ml-auto">{date}</div>
      </div>
      <div className="md:text-[18px] text-[15px] text-gray-700 pt-[16px] border-t border-gray-200 break-all max-h-[256px] min-h-[120px] overflow-y-auto">
        {message}
      </div>
      <Button variant="primary" size={40} width={120} className="m-auto" onClick={onClose}>
        확인
      </Button>
    </div>
  );
};

export default ModalContent;
