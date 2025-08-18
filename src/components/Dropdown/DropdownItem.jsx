import { useContext } from "react";
import DropdownContext from "./DropdownContext";

const TYPE_CLASSES = {
  base: "dropdown-item",
  custom: "",
};

const DropdownItem = ({ as: Tag = "button", onClick, children, className = "", type = "base", ...props }) => {
  const { setSelected, setIsOpen } = useContext(DropdownContext);

  const handleClick = e => {
    setSelected(children);
    setIsOpen(false);
    onClick?.(children, e);
  };

  return (
    <li className={`${TYPE_CLASSES[type] || ""} ${className}`}>
      <Tag onClick={handleClick} {...props}>
        {children}
      </Tag>
    </li>
  );
};

export default DropdownItem;
