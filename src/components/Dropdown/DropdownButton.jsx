import { MenuButton } from "@headlessui/react";
import React from "react";

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
 */
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
  const baseClasses = "flex w-auto items-center gap-x-1.5 cursor-pointer duration-200";

  // 베이스 버튼(기능적 버튼)
  const baseButtonClass = `
    ${baseClasses}justify-center text-gray-900 hover:text-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed
  `;

  // 셀렉트박스 스타일 버튼
  const selectButtonClass = `
    ${baseClasses} w-full max-w-[320px] h-[50px] px-[16px] pr-[13px] justify-between border rounded-[8px] border-gray-300 text-gray-600 text-base leading-6 tracking-[-1%] hover:border-gray-600 focus:outline-2 focus:outline-gray-600 focus:outline-offset-[-2px] active:border-2 active:border-gray-600 active:text-gray-900 disabled:pointer-events-none disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed
  `;

  // type에 따른 클래스 매핑
  const typeClasses = {
    base: baseButtonClass,
    select: `${selectButtonClass} ${errorMessage ? "border-red-600 text-gray-900 hover:border-red-600" : ""}`,
  };

  return (
    <>
      <MenuButton
        className={`${typeClasses[type]} ${className}`}
        disabled={disabled}
        onClick={onClick}
        aria-label={icLabel}
      >
        {label && <span className="mr-0.5">{label}</span>}
        {icon &&
          React.cloneElement(icon, {
            "aria-label": icLabel || "icon",
            className: icon.props.className ? icon.props.className + " w-5 h-5" : "w-5 h-5",
          })}
      </MenuButton>

      {errorMessage && type === "select" && (
        <span className="mt-1 text-[12px] leading-[18px] tracking-[-0.5%] text-red-600 block">{errorMessage}</span>
      )}
    </>
  );
};

export default DropdownButton;
