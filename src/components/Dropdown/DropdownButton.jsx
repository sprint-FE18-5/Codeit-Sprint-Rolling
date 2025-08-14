import { MenuButton } from "@headlessui/react";

/**
 * Dropdown Button 컴포넌트
 * @param {ReactNode} label - 버튼 안에 표시될 텍스트 또는 JSX
 * @param {ReactNode} icon - 버튼 아이콘 컴포넌트
 * @param {string} icLabel - 아이콘 단독 적용 시, 접근성 aria-label
 * @param {string} className - Tailwind 추가 클래스
 * @param {function} onClick - 클릭 이벤트
 * @param {string} type - 버튼 타입(base, default, select)
 * @param {boolean} disabled - 버튼 비활성화 여부
 * @param {string} errorMessage - 에러 메시지
 *
 * @remarks 에러 메시지 추가와 UI 관련 코드는 차후 진행 예정입니다.(메시지 컴포넌트를 추가하여 병합할 예정)
 */

/* 임시 화살표 컴포넌트 */
/* 닫힘 상태 화살표 */
export const ArrowDownIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
      clipRule="evenodd"
    />
  </svg>
);

/* 열림 상태 화살표 */
export const ArrowUpIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 8a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 10.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 8z"
      clipRule="evenodd"
    />
  </svg>
);

const typeClasses = {
  base: "flex w-auto items-center gap-x-0.5 cursor-pointer duration-100",
  default: "justify-center text-gray-900 hover:text-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed",
  select:
    "w-full h-[50px] px-[16px] pr-[13px] justify-between border rounded-[8px] border-gray-300 text-gray-600 text-base leading-6 tracking-[-1%] hover:border-gray-600 focus:outline-2 focus:outline-gray-600 focus:outline-offset-[-2px] active:border-2 active:border-gray-600 active:text-gray-900 disabled:pointer-events-none disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed",
};

const DropdownButton = ({
  label = "",
  icon = null,
  icLabel = "",
  className = "",
  disabled = false,
  onClick = () => {},
  type = "base",
  errorMessage = "",
}) => {
  return (
    <MenuButton
      className={`${typeClasses.base} ${type !== "base" ? typeClasses[type] || "" : ""} ${className}`}
      disabled={disabled}
      onClick={onClick}
      aria-label={icLabel}
    >
      {({ open }) => (
        <>
          {label && <span>{label}</span>}

          {/* icon prop이 화살표 컴포넌트일 때 open 상태에 따라 변경 */}
          {icon &&
            (icon.type === ArrowDownIcon || icon.type === ArrowUpIcon ? (
              <span className="ml-0.5">{open ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
            ) : (
              <span className="w-5 h-5 ml-0.5">{icon}</span>
            ))}

          {/* label과 icon이 있고, icon이 화살표가 아니면 그냥 렌더 */}
          {!label && icon && !(icon.type === ArrowDownIcon || icon.type === ArrowUpIcon) && (
            <span className="w-5 h-5">{icon}</span>
          )}
        </>
      )}
    </MenuButton>
  );
};

export default DropdownButton;
