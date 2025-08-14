import { MenuItem } from "@headlessui/react";

/**
 * Dropdown Item 항목
 */
const typeClasses = {
  // 기능별로 자유롭게 타입 추가
  base: "",
  select: "w-full",
};
const DropdownItem = ({ label, href, onClick, type = "base", className = "" }) => (
  <li>
    <MenuItem
      as={href ? "a" : "button"}
      href={href}
      onClick={onClick}
      className={`${typeClasses.base} ${type !== "base" ? typeClasses[type] || "" : ""} ${className}`}
    >
      {label}
    </MenuItem>
  </li>
);

export default DropdownItem;
