import { MenuButton } from "@headlessui/react";
import { useDropdown } from "../../hooks/useDropdown.jsx";
/* 테스트용 */
import icArrowDown from "../../assets/icArrowDown.svg";
import icArrowUp from "../../assets/icArrowUp.svg";

/**
 * Dropdown Button 컴포넌트
 * @param {ReactNode} label - 버튼 안에 표시될 텍스트 또는 JSX
 * @param {ReactNode|string} icon - 메인 아이콘 (이미지 경로 또는 리액트 컴포넌트)
 * @param {string} icLabel - 아이콘 단독 적용 시, 접근성 aria-label
 * @param {string} className - Tailwind 추가 클래스
 * @param {function} onClick - 클릭 이벤트
 * @param {string} variant - 버튼 변형 (basic, toggle, select)
 * basic: [기본] 라벨(텍스트/아이콘/데이터)만 토글 아이콘 없음
 * toggle: [기본 + 토글 아이콘] 라벨 + 오른쪽 토글 아이콘 (커스텀 가능)
 * select: [셀렉트박스] 디폴트는 화살표 토글 (커스텀 가능)
 * @param {string} type - 스타일 타입 (base, default, select, emoji)
 * @param {boolean} disabled - 버튼 비활성화 여부
 * @param {Object} toggleIcons - 토글 아이콘 설정 { open: 이미지, closed: 이미지 }
 * @param {boolean} showSelectedValue - 선택된 값을 표시할지 여부
 * @param {boolean} hasError - 에러 상태 여부
 */

// 기본 토글 아이콘
const DEFAULT_TOGGLE_ICONS = {
  open: icArrowUp,
  closed: icArrowDown,
};

const TYPE_CLASSES = {
  base: "flex w-auto items-center gap-x-0.5 cursor-pointer duration-100",
  default: "justify-center text-[#181818] hover:text-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed",
  select:
    "w-full h-[50px] px-[16px] pr-[13px] justify-between border rounded-[8px] border-gray-300 text-gray-600 text-base leading-6 tracking-[-1%] hover:border-gray-600 focus:outline-2 focus:outline-gray-600 focus:outline-offset-[-2px] active:border-2 active:border-gray-600 active:text-gray-900 disabled:pointer-events-none disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed",
  emoji: "pr-[6px] gap-x-2",
};

// 에러 상태 클래스
const ERROR_CLASSES = {
  select: "!border-red-500 hover:!border-red-600 focus:!outline-red-500",
};

const DropdownButton = ({
  label = "",
  icon = null,
  icLabel = "",
  className = "",
  disabled = false,
  onClick = () => {},
  variant = "basic",
  type = "base",
  toggleIcons = DEFAULT_TOGGLE_ICONS,
  showSelectedValue = false,
  hasError = false,
}) => {
  const { selectedLabel, selectedValue } = useDropdown();
  // 선택된 값이 있으면 선택된 값을 표시
  const displayLabel = showSelectedValue && selectedLabel ? selectedLabel : label;
  // 선택된 상태인지 확인
  const isSelected = showSelectedValue && selectedValue && selectedValue !== "";
  // 선택된 값이 있으면 active 상태 스타일 반영
  const selectedClasses = isSelected && type === "select" ? "border-2 !border-gray-600 !text-gray-900" : "";
  // 에러 상태 스타일
  const errorClasses = hasError && ERROR_CLASSES[type] ? ERROR_CLASSES[type] : "";

  return (
    <MenuButton
      className={`${TYPE_CLASSES.base} ${
        type !== "base" ? TYPE_CLASSES[type] || "" : ""
      } ${selectedClasses} ${errorClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
      aria-label={icLabel}
      aria-invalid={hasError}
    >
      {({ open }) => (
        <>
          {displayLabel}

          {/* variant basic 일 때 */}
          {variant === "basic" && icon && (
            <div className={`${label ? "ml-0.5" : ""} ${disabled ? "opacity-40 grayscale" : ""}`}>
              {typeof icon === "string" ? (
                <img src={icon} alt="" className={`${label ? "w-4 h-4" : "w-5 h-5"}`} />
              ) : (
                icon
              )}
            </div>
          )}

          {/* variant: toggle/select 일 때 */}
          {(variant === "toggle" || variant === "select") && (
            <img
              src={open ? toggleIcons.open : toggleIcons.closed}
              alt={open ? "열림" : "닫힘"}
              className={`ml-0.5 w-4 h-4 ${disabled ? "opacity-40 grayscale" : ""}`}
            />
          )}
        </>
      )}
    </MenuButton>
  );
};

export default DropdownButton;
