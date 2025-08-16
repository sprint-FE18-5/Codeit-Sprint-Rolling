import icPlus from "../../assets/icPlus.svg";

// color 변수 정해지면 스타일 코드 변경될 수 있음

// 상태 스타일
const STATE_DISABLED = "disabled:bg-gray-300 disabled:cursor-not-allowed";
const STATE_HOVER = "hover:bg-gray-600";
const STATE_ACTIVE = "active:bg-gray-700";
const STATE_FOCUS = "focus:bg-gray-700 focus:border-[1px] focus:border-gray-800";

// 기본 Circle버튼 스타일
const BASE_STYLE = "w-[56px] h-[56px] rounded-full bg-gray-500";
const CIRCLE_BUTTON = [BASE_STYLE, STATE_DISABLED, STATE_HOVER, STATE_ACTIVE, STATE_FOCUS].join(" ");

// 버튼 공통 스타일
const COMMON_BUTTON = "cursor-pointer flex items-center justify-center";

/**
 * 원형 추가 버튼 컴포넌트
 *
 * @param {Object} props
 * @param {string} [props.className] - 새로 추가할 className
 * @param {function} [props.onClick] - onClick 콜백 함수
 * @returns {JSX.Element}
 */
const CircleButton = ({ className = "", onClick }) => {
  const btnStyle = COMMON_BUTTON;
  const circleStyle = CIRCLE_BUTTON;
  return (
    <button aria-label="추가" className={`${btnStyle} ${circleStyle} ${className}`} onClick={onClick}>
      <img src={icPlus} alt="플러스 아이콘" className="w-[24px]" />
    </button>
  );
};

export default CircleButton;
