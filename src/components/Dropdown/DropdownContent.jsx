import { useContext } from "react";
import DropdownContext from "./DropdownContext";

const TYPE_CLASSES = {
  base: "dropdown-content w-full absolute bg-[#ffffff] mt-[8px] rounded-[8px] border border-[#ccc] py-[10px] shadow-[0_2px_12px_0px_#00000014] z-[101]",
};

const DropdownContent = ({ children, className = "", type = "base", ...props }) => {
  const { isOpen, type: contextType } = useContext(DropdownContext);
  if (!isOpen) return null;
  const contentType = contextType || type;
  const contentClass = [
    TYPE_CLASSES.base,
    TYPE_CLASSES[contentType] !== TYPE_CLASSES.base ? TYPE_CLASSES[contentType] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <ul className={contentClass} {...props}>
      {children}
    </ul>
  );
};

export default DropdownContent;
