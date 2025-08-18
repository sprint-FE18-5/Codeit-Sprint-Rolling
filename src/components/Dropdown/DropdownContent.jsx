import { useContext } from "react";
import DropdownContext from "./DropdownContext";

const TYPE_CLASSES = {
  base: "dropdown-content absolute",
  custom: "",
};

const DropdownContent = ({ children, className = "", type = "base", ...props }) => {
  const { isOpen } = useContext(DropdownContext);
  if (!isOpen) return null;
  return (
    <ul className={`${TYPE_CLASSES[type] || ""} ${className}`} {...props}>
      {children}
    </ul>
  );
};

export default DropdownContent;
