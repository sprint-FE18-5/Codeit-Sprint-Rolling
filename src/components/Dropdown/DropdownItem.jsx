import { MenuItem } from "@headlessui/react";

/**
 * Dropdown Item 항목
 */
const TYPE_CLASSES = {
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
      className={`${TYPE_CLASSES.base} ${type !== "base" ? TYPE_CLASSES[type] || "" : ""} ${className}`}
    >
      {label}
    </MenuItem>
  </li>
);

export default DropdownItem;
