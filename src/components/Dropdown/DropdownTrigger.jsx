import { useContext } from "react";
import DropdownContext from "./DropdownContext";

const DropdownTrigger = ({ children, onClick }) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  const handleClick = e => {
    setIsOpen(!isOpen);
    onClick?.(e);
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default DropdownTrigger;
