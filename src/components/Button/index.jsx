// color, font 변수 정해지면 스타일 코드 변경될 수 있음

// 상태 스타일
const STATE_DISABLED = [
  "disabled:bg-gray-300",
  "disabled:border-gray-300",
  "disabled:text-white",
  "disabled:cursor-not-allowed",
].join(" ");
const STATE_HOVER = {
  primary: "hover:bg-purple-700",
  secondary: "hover:bg-purple-100 hover:text-purple-600 hover:border-purple-700",
  outlined: "hover:bg-gray-100 hover:border-gray-300",
};
const STATE_ACTIVE = {
  primary: "active:bg-purple-800",
  secondary: "active:bg-purple-100 active:text-purple-600 active:border-purple-800",
  outlined: "active:bg-gray-100 active:border-gray-300",
};
const STATE_FOCUS = {
  primary: "focus:bg-purple-800 focus:border-[2px] focus:border-purple-900",
  secondary: "focus:bg-white focus:text-purple-600 focus:border-purple-800",
  outlined: "focus:bg-white focus:border-gray-500",
};

// 기본 variant 스타일(enabled)
const BASE_VARIANTS = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-white text-purple-700 border-[1px] border-purple-600",
  outlined: "bg-white text-gray-900 border-[1px] border-gray-300",
  // icon 사용 시 추가되는 스타일
  outlinedIcon: "gap-[4px]",
};

// outlined 공통
const COMON_OUTLINED = [
  BASE_VARIANTS.outlined,
  STATE_DISABLED,
  STATE_HOVER.outlined,
  STATE_ACTIVE.outlined,
  STATE_FOCUS.outlined,
].join(" ");

// variant 정의
const VARIANTS = {
  primary: [BASE_VARIANTS.primary, STATE_DISABLED, STATE_HOVER.primary, STATE_ACTIVE.primary, STATE_FOCUS.primary].join(
    " ",
  ),
  secondary: [
    BASE_VARIANTS.secondary,
    STATE_DISABLED,
    STATE_HOVER.secondary,
    STATE_ACTIVE.secondary,
    STATE_FOCUS.secondary,
  ].join(" "),
  outlined: COMON_OUTLINED,
  outlinedIcon: [COMON_OUTLINED, BASE_VARIANTS.outlinedIcon].join(" "),
};

// size 정의
const SIZES = {
  56: `h-[56px] py-[14px] px-[24px] text-[18px] font-[700] rounded-[12px]`,
  40: `h-[40px] py-[8px] px-[16px] text-[16px] font-[400] rounded-[6px]`,
  36: `h-[36px] py-[6px] px-[16px] text-[16px] font-[500] rounded-[6px]`,
  28: `h-[28px] py-[2px] px-[16px] text-[14px] font-[400] rounded-[6px]`,
};

const getSizeStyle = ({ variant, size, iconOnly }) => {
  let style = SIZES[size] || "";

  // 예외 스타일1 : outlinedIcon && size=28일 때 높이, 세로 패딩 수정
  if (variant === "outlinedIcon" && size === 28) {
    style = style.replace(/h-\[\d+px\]/, "h-[32px]").replace(/py-\[\d+px\]/, "py-[6px]");
  }

  // 예외 스타일2: outlinedIcon && iconOnly일 때 가로 패딩 수정
  if (variant === "outlinedIcon" && iconOnly) {
    style = style.replace(/px-\[\d+px\]/, "px-[6px]");
  }

  return style;
};

// 버튼 공통 스타일
const COMMON_BUTTON = "cursor-pointer flex items-center justify-center";

/**
 * 공용 직사각형 버튼 컴포넌트
 *
 * @param {Object} props - Button 컴포넌트 props
 * @param {"primary"|"secondary"|"outlined"|"outlinedIcon"} [props.variant="secondary"] - 버튼 스타일 지정
 * @param {number} [props.size=40] - 버튼 사이즈(높이/폰트 사이즈/패딩 지정)
 * @param {number} [props.width=122] - 버튼 가로 길이(px)
 * @param {boolean} [prop.iconOnly=false] - 아이콘만 있는 경우(outlinedIcon와 같이 사용)
 * @param {string} [props.className=""] - 기존 className 전달 또는 새로 추가할 className
 * @param {React.ReactNode} [props.children] - 버튼 내용(텍스트, 아이콘)
 * @param {...Object} [props.props] - 그 외 속성
 *
 * @returns {JSX.Element}
 */
const Button = ({
  variant = "secondary",
  size = 40,
  width = 122,
  iconOnly = false,
  className = "",
  children,
  ...props
}) => {
  const btnStyle = COMMON_BUTTON;
  const variantStyle = VARIANTS[variant] || "";
  const sizeStyle = getSizeStyle({ variant, size, iconOnly });

  return (
    <button
      className={`${btnStyle} ${variantStyle} ${sizeStyle} ${className}`}
      style={{ width: `${width}px` }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
