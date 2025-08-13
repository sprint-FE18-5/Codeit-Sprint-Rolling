import {
  Menu,
  MenuButton as DropdownButton,
  MenuItem as DropdownItem,
  MenuItems as DropdownList,
} from "@headlessui/react";

/**
 * Dropdown Wrapper 컴포넌트
 * Headless UI 라이브러리 Menu 사용하여 상태 관리
 */
const Dropdown = ({ button, children, className = "" }) => {
  return (
    <>
      <Menu as="div" className={`relative inline-block ${className}`}>
        {button}
        {children}
      </Menu>
    </>
  );
};

export default Dropdown;
