import { Menu } from "@headlessui/react";
import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";
import DropdownItem from "./DropdownItem";

/**
 * Dropdown 타입별 스타일 클래스 상수
 */
const TYPE_CLASSES = {
  base: "dropdown__content relative inline-block",
  default: "",
  select: "w-full max-w-[320px] block",
};

/**
 * Dropdown Wrapper 컴포넌트
 * Headless UI 라이브러리 Menu 커스텀하여 상태 관리
 * @param {React.ReactNode} children - DropdownButton과 DropdownList 컴포넌트들
 * @param {string} className - Tailwind 추가 클래스
 * @param {string} type - Dropdown Wrapper 타입(base, default, select)
 * basic: [기본] 모든 타입에 공통 적용
 * default: 일반 드롭다운
 * select: 셀렉트 드롭다운
 */

const Dropdown = ({ children, type = "base", className = "" }) => {
  return (
    <Menu className={`dropdown ${className}`} as="div">
      <div className={`${TYPE_CLASSES.base} ${type !== "base" ? TYPE_CLASSES[type] || "" : ""}`}>{children}</div>
    </Menu>
  );
};

export default Dropdown;
export { DropdownButton, DropdownList, DropdownItem };
