import {
  Menu,
  MenuButton as DropdownButton,
  MenuItem as DropdownItem,
  MenuItems as DropdownList,
} from "@headlessui/react";

/**
 * Dropdown Wrapper 컴포넌트
 * Headless UI 라이브러리 Menu 커스텀하여 상태 관리
 */
const typeClasses = {
  // 기능별로 자유롭게 타입 추가
  base: "relative",
  default: "inline-block",
  select: "block max-w-[320px]",
};

const Dropdown = ({ button, children, type = "base", className = "" }) => {
  return (
    <>
      <Menu className={`${typeClasses.base} ${type !== "base" ? typeClasses[type] || "" : ""} ${className}`} as="div">
        {button}
        {children}
      </Menu>
    </>
  );
};

export default Dropdown;
