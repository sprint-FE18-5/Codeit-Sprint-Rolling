import { useContext } from "react";
import DropdownContext from "./DropdownContext";
import icArrowDown from "../../assets/icArrowDown.svg";
import icArrowUp from "../../assets/icArrowUp.svg";

const DEFAULT_TOGGLE_ICONS = {
  open: icArrowUp,
  closed: icArrowDown,
};

const TYPE_CLASSES = {
  base: "dropdown-trigger relative",
  select: "bg-black",
};

const DropdownTrigger = ({
  as: Tag = "button",
  type = "base",
  className = "",
  showArrow = false,
  isOpen: propOpen,
  children,
  onClick,
  ...props
}) => {
  const { isOpen: contextOpen, setIsOpen, selected } = useContext(DropdownContext);
  const isOpen = propOpen ?? contextOpen;
  const handleClick = e => {
    setIsOpen(!isOpen);
    onClick?.(e);
  };

  return (
    <Tag
      className={`${TYPE_CLASSES[type] || ""} ${className}`}
      onClick={handleClick}
      type={Tag === "button" && !props.type ? "button" : props.type}
      aria-expanded={isOpen}
      {...props}
    >
      {selected?.label ?? children}
      {showArrow && (
        <span className="dropdown-trigger__arrow">
          <img
            src={isOpen ? DEFAULT_TOGGLE_ICONS.open : DEFAULT_TOGGLE_ICONS.closed}
            alt={isOpen ? "접기" : "펼치기"}
            className="w-[16px] h-[16px]"
          />
        </span>
      )}
    </Tag>
  );
};

export default DropdownTrigger;
