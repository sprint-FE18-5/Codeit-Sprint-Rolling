import { useContext } from "react";
import DropdownContext from "./DropdownContext";

const DropdownContent = ({ children }) => {
  const { isOpen } = useContext(DropdownContext);
  if (!isOpen) return null;
  return <ul className="dropdown-menu">{children}</ul>;
};

export default DropdownContent;
