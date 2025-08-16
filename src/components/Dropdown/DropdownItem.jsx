import { MenuItem } from "@headlessui/react";
import { useDropdown } from "../../hooks/useDropdown.jsx";

/**
 * Dropdown Item 항목
 */
const TYPE_CLASSES = {
  // 기능별로 자유롭게 타입 추가
  base: "relative text-left",
  select:
    "block w-full min-h-[50px] px-4 py-3 text-base leading-[26px] tracking-[-0.01em] text-[#181818] hover:bg-gray-100 duration-100",
};
const DropdownItem = ({ label, value, href, onClick, type = "base", className = "", target, rel, ...props }) => {
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
        target={target}
        rel={rel}
        onClick={handleClick}
        className={`${TYPE_CLASSES.base} ${type !== "base" ? TYPE_CLASSES[type] || "" : ""} ${className}`}
        {...props}
      >
        {label}
      </MenuItem>
    </li>
  );
};

export default DropdownItem;
