import COMMON_BUTTON from "../../../constants/button/BUTTON_COMMON.js";
import ARROW_BUTTON from "../../../constants/button/BUTTON_ARROW.js";
import icArrow from "../../../assets/icArrow.svg";

/**
 * 원형 화살표 버튼 컴포넌트
 *
 * @param {Object} props
 * @param {"left"|"right"} [props.direction="left"] - 화살표 방향 지정
 * @param {number} [props.width] - 버튼 가로 길이
 * @param {number} [props.height] - 버튼 높이
 * @param {string} [props.imgAlt="arrow icon"] - 화살표 이미지 alt 속성
 * @param {string} [props.className] - 새로 추가할 className
 * @param {function} [props.onClick] - onClick 콜백 함수
 * @param {Object} [restProps] - 버튼에 전달되는 추가 속성(type, aria-*, value 등)
 *
 * @returns {JSX.Element}
 */
const ArrowButton = ({
  direction = "left",
  width = undefined,
  height = undefined,
  imgAlt = "arrow icon",
  className = "",
  onClick,
  ...restProps
}) => {
  const commonBtnStyle = COMMON_BUTTON;
  const { style: variantStyle, size: sizeStyle } = ARROW_BUTTON;
  const arrowBtnStyle = [variantStyle.base, variantStyle.hover, variantStyle.active, variantStyle.focus, sizeStyle]
    .filter(Boolean)
    .join(" ");

  // 화살표 방향(direction)에 따라 icon 회전 & margin 값 조정
  const DIR_PROPS = {
    left: { rotate: "", margin: "mr-[2px]" },
    right: { rotate: "rotate-180", margin: "ml-[2px]" },
  };
  const { rotate, margin } = DIR_PROPS[direction];

  return (
    <button
      className={`${commonBtnStyle} ${arrowBtnStyle} ${className}`}
      style={{ width, height }}
      onClick={onClick}
      {...restProps}
    >
      <img src={icArrow} alt={imgAlt} className={`w-[16px] h-[16px] ${rotate} ${margin}`} />
    </button>
  );
};

export default ArrowButton;
