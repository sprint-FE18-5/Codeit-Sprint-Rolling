import { forwardRef } from "react";

// 테마옵션 컴포넌트에 쓰이는 컬러/이미지 별 스타일이 조금 달라서
// optionType="color/image"으로 제어해 THEME_OPTION_STYLES 안에서 함께 관리합니다.
const THEME_OPTION_STYLES = {
  label:
    "theme-option relative w-full flex items-center justify-center aspect-square rounded-[16px] cursor-pointer overflow-hidden",
  input: "theme-option__input appearance-none w-0 h-0 block",
  check:
    "theme-option__check after:content-[''] block relative after:bg-[url('./assets/icEnabled.svg')] after:w-[44px] after:h-[44px] after:z-5",
  color: "border border-black/10",
  image: "bg-no-repeat bg-center bg-cover",
  imageOverlay:
    "before:content-[''] before:absolute before:inset-0 before:bg-white/70 before:rounded-[16px] before:pointer-events-none before:z-1",
};

// api 명세에 hex?컬러 데이터가 없는 것 같은데 어떻게 처리하면 좋을까요.(제가 놓친 것일 수도..)
// 로직 자체가 이렇게 굴러가면 안되는 것일까요..
const COLOR = {
  beige: "#FFE2AD",
  purple: "#ECD9FF",
  blue: "#B1E4FF",
  green: "#D0F5C3",
};

const ThemeOption = forwardRef(
  ({ optionType = "color", value, name, label, checked = false, onChange, className = "" }, ref) => {
    const handleChange = () => {
      onChange?.(value);
    };

    // 라벨 태그에 aria-label 텍스트 생성
    let ariaLabel = "";
    if (optionType === "color") {
      ariaLabel = `배경 색상 ${label || value}${checked ? " 선택됨" : ""}`;
    } else if (optionType === "image") {
      ariaLabel = `배경 이미지${checked ? " 선택됨" : ""}`;
    }

    // bg 이미지는 label에 인라인 background 스타일 적용하고(이미지가 1:1 비율이 아닐때를 고려해 bg-cover 속성으로 처리하기 위함...),
    // 대신 label에 aria 속성을 지정해주는게 어떤지 생각해봤습니다. (이미지/컬러 모두 대응)

    let labelStyle = {};
    if (optionType === "image") {
      labelStyle = { backgroundImage: `url(${value})` };
    } else if (optionType === "color") {
      labelStyle = { backgroundColor: COLOR[value] || value };
    }

    const typeClass =
      optionType === "color" ? THEME_OPTION_STYLES.color : optionType === "image" ? THEME_OPTION_STYLES.image : "";

    // 테마 옵션 이미지 타입의 checked일 때만 오버레이 스타일 추가
    const overlayClass = optionType === "image" && checked ? THEME_OPTION_STYLES.imageOverlay : "";

    return (
      <label
        className={[
          THEME_OPTION_STYLES.label,
          typeClass,
          checked ? THEME_OPTION_STYLES.check : "",
          overlayClass,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        aria-label={ariaLabel}
        style={labelStyle}
      >
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          className={THEME_OPTION_STYLES.input}
          aria-checked={checked}
        />
      </label>
    );
  },
);

const ThemeOptionGroup = ({ children, className = "", ...props }) => (
  <div
    className={["theme-options grid grid-cols-2 md:grid-cols-4 gap-[12px] md:gap-[16px]", className]
      .filter(Boolean)
      .join(" ")}
    {...props}
  >
    {children}
  </div>
);
export { ThemeOption, ThemeOptionGroup };
