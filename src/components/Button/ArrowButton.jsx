import icArrow from "../../assets/icArrow.svg";

// color 변수 정해지면 스타일 코드 변경될 수 있음

// 상태 스타일
const STATE_DISABLED = "disabled:bg-gray-300 disabled:cursor-not-allowed";
const STATE_HOVER = "hover:bg-gray-100 hover:border-gray-300";
const STATE_ACTIVE = "active:bg-gray-100 active:border-gray-300";
const STATE_FOCUS = "focus:border-gray-500";

// 기본 ArrowButton 스타일
const BASE_STYLE =
  "w-[40px] h-[40px] rounded-full bg-white/90 border-[1px] border-gray-300 shadow-[0_4px_8px_0_rgba(0,0,0,0.08)] backdrop-blur-[4px]";
const ARROW_BUTTON = [BASE_STYLE, STATE_DISABLED, STATE_HOVER, STATE_ACTIVE, STATE_FOCUS].join(" ");

// 버튼 공통 스타일
const COMMON_BUTTON = "cursor-pointer flex items-center justify-center";

/**
 * 원형 화살표 버튼 컴포넌트
 *
 * @param {Object} props
 * @param {"left"|"right"} [props.direction="left"] - 화살표 방향 지정
 * @param {string} [props.className] - 새로 추가할 className
 * @param {function} [props.onClick] - onClick 콜백 함수
 * @returns {JSX.Element}
 */
const ArrowButton = ({ direction = "left", className = "", onClick }) => {
  const btnStyle = COMMON_BUTTON;
  const arrowStyle = ARROW_BUTTON;

  // 화살표 방향(direction)에 따라 aria-label 지정 & icon 회전 & margin 값 조정
  const DIR_PROPS = {
    left: { ariaLabel: "이전 카드 보기", rotate: "", margin: "mr-[2px]" },
    right: { ariaLabel: "다음 카드 보기", rotate: "rotate-180", margin: "ml-[2px]" },
  };
  const { ariaLabel, rotate, margin } = DIR_PROPS[direction];

  return (
    <button aria-label={ariaLabel} className={`${btnStyle} ${arrowStyle} ${className}`} onClick={onClick}>
      <img src={icArrow} alt="화살표 아이콘" className={`w-[16px] ${rotate} ${margin}`} />
    </button>
  );
};

export default ArrowButton;
