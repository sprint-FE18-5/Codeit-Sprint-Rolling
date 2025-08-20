import COMMON_BUTTON from "../../../constants/button/BUTTON_COMMON.js";
import { getRegularBtnStyle } from "../../../constants/button/BUTTON_REGULAR.js";

/**
 * 공용 직사각형 버튼 컴포넌트
 *
 * @param {Object} props - Button 컴포넌트 props
 * @param {"primary"|"secondary"|"outlined"|"outlinedIcon"} [props.variant="secondary"] - 버튼 스타일 지정
 * @param {number} [props.size=40] - 버튼 사이즈(높이/폰트 사이즈/패딩 지정)
 * @param {number} [props.width] - 버튼 가로 길이
 * @param {number} [props.height] - 버튼 높이
 * @param {boolean} [props.isSquare=false] - 정사각형 여부(사이즈, 패딩 동일)
 * @param {string} [props.className=""] - 기존 className 전달 또는 새로 추가할 className
 * @param {React.ReactNode} [props.children] - 버튼 내용(텍스트, 아이콘)
 * @param {Object} [restProps] - 버튼에 전달되는 추가 속성(type, aria-*, value 등)
 *
 * @returns {JSX.Element}
 */
const RegularButton = ({
  variant = "primary",
  size = 40,
  width = "122px",
  height = undefined,
  isSquare = false,
  className = "",
  children,
  ...restProps
}) => {
  const commonBtnStyle = COMMON_BUTTON;
  const regularBtnStyle = getRegularBtnStyle({ variant, size, isSquare });

  return (
    <button className={`${commonBtnStyle} ${regularBtnStyle} ${className}`} style={{ width, height }} {...restProps}>
      {children}
    </button>
  );
};

export default RegularButton;
