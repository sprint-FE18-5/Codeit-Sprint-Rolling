import { useState } from "react";
import DropdownContext from "./DropdownContext";

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const value = {
    isOpen,
    setIsOpen,
    selected,
    setSelected,
  };

  return (
    <DropdownContext.Provider value={value}>
      <div className={`dropdown relative inline-block`}>{children}</div>
    </DropdownContext.Provider>
  );
};

export { Dropdown };
export { default as DropdownTrigger } from "./DropdownTrigger";
export { default as DropdownContent } from "./DropdownContent";
export { default as DropdownItem } from "./DropdownItem";
