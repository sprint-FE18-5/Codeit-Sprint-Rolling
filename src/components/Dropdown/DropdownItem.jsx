import { useContext } from "react";
import DropdownContext from "./DropdownContext";

const DropdownItem = ({ onClick, children }) => {
  const { setSelected, setIsOpen } = useContext(DropdownContext);

  const handleClick = e => {
    setSelected(children);
    setIsOpen(false);
    onClick?.(children, e);
  };

  return (
    <li className="dropdown-item" onClick={handleClick}>
      {children}
    </li>
  );
};

export default DropdownItem;
