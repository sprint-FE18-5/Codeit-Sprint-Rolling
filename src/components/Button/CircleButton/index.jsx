import COMMON_BUTTON from "../../../constants/button/BUTTON_COMMON.js";
import CIRCLE_BUTTON from "../../../constants/button/BUTTON_CIRCLE.js";

/**
 * 원형 추가 버튼 컴포넌트
 *
 * @param {Object} props
 * @param {string} [props.className] - 새로 추가할 className
 * @param {number} [props.width] - 버튼 가로 길이
 * @param {number} [props.height] - 버튼 높이
 * @param {React.ReactNode} [props.children] - 버튼 내부 콘텐츠 (아이콘, 텍스트 등)
 * @param {function} [props.onClick] - onClick 콜백 함수
 * @param {Object} [restProps] - 버튼에 전달되는 추가 속성(type, aria-*, value 등)
 *
 * @returns {JSX.Element}
 */
const CircleButton = ({ className = "", width = undefined, height = undefined, children, onClick, ...restProps }) => {
  const commonBtnStyle = COMMON_BUTTON;
  const { style: variantStyle, size: sizeStyle } = CIRCLE_BUTTON;
  const circleBtnStyle = [variantStyle.base, variantStyle.hover, variantStyle.active, variantStyle.focus, sizeStyle]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={`${commonBtnStyle} ${circleBtnStyle} ${className}`}
      style={{ width, height }}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default CircleButton;
