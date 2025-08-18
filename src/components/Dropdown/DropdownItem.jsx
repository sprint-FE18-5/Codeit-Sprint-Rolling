import { useContext } from "react";
import DropdownContext from "./DropdownContext";

const TYPE_CLASSES = {
  base: "dropdown-item",
  select: "dropdown-item-select",
  custom: "",
};

const DropdownItem = ({
  as: Tag = "button",
  onClick,
  children,
  className = "",
  type = "base", // base | select
  value,          // select 타입일 때 실제 값
  ...props
}) => {
  const { setSelected, setIsOpen } = useContext(DropdownContext);

  const handleClick = e => {
    if (type === "select") {
      setSelected({ value: value ?? children, label: children });
    }
    setIsOpen(false);
    onClick?.(type === "select" ? value ?? children : children, e);
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
