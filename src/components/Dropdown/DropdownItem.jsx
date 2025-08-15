import { MenuItem } from "@headlessui/react";
import { useDropdown } from "../../hooks/useDropdown.jsx";

/**
 * Dropdown Item 항목
 */
const TYPE_CLASSES = {
  // 기능별로 자유롭게 타입 추가
  base: "relative text-left",
  select:
    "w-full min-h-[50px] px-4 py-3 text-base leading-[26px] tracking-[-0.01em] text-gray-900 hover:bg-gray-100 duration-100",
};
const DropdownItem = ({ label, value, href, onClick, type = "base", className = "" }) => {
  const { handleSelect } = useDropdown();

  const handleClick = e => {
    if (value !== undefined && handleSelect) {
      handleSelect(value, label);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <li>
      <MenuItem
        as={href ? "a" : "button"}
        href={href}
        onClick={handleClick}
        className={`${TYPE_CLASSES.base} ${type !== "base" ? TYPE_CLASSES[type] || "" : ""} ${className}`}
      >
        {label}
      </MenuItem>
    </li>
  );
};

export default DropdownItem;
