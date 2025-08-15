import { MenuItems } from "@headlessui/react";
import React from "react";

/**
 * Dropdown List Wrapper 컴포넌트
 * @param {object} props
 * @param {React.ReactNode} props.children - Wrapper 내부에 표시할 아이템 요소
 * @param {string} className - Tailwind 추가 클래스
 * @param {string} type - 리스트 Wrapper 타입(base, select, emoji, share)
 */
const TYPE_CLASSES = {
  // 기능별로 자유롭게 타입 추가
  base: "absolute right-0 mt-2 top-full bg-white rounded-[8px] border border-[#ccc] py-[10px] shadow-[0_2px_12px_0px_#00000014] z-[101] focus:outline-0",
  select: "w-full",
  emoji: "w-[203px] md:w-[321px] whitespace-nowrap p-4 md:p-6 grid grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-2.5",
  share: "w-[140px]",
};

const DropdownList = ({ children, type = "base", className = "", style = {} }) => {
  // children에 type 전달
  const childrenWithType = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type.name === "DropdownItem") {
      return React.cloneElement(child, { type: child.props.type || type });
    }
    return child;
  });

  return (
    <MenuItems
      as="ul"
      className={`${TYPE_CLASSES.base} ${type !== "base" ? TYPE_CLASSES[type] || "" : ""} ${className}`}
      style={style}
      tabIndex={-1}
    >
      {childrenWithType}
    </MenuItems>
  );
};

export default DropdownList;
