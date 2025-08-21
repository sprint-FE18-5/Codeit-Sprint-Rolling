import { useContext } from "react";
import DropdownContext from "./DropdownContext";
import icArrowDown from "../../assets/icArrowDown.svg";
import icArrowUp from "../../assets/icArrowUp.svg";
import icArrowDownDisabled from "../../assets/icArrowDownDisabled.svg";

const DEFAULT_TOGGLE_ICONS = {
  open: icArrowUp,
  closed: icArrowDown,
};

const TYPE_CLASSES = {
  base: "dropdown-trigger relative w-full text-left flex items-center justify-between duration-100 text-16 cursor-pointer",
  select:
    "dropdown-trigger--select h-[50px] pl-[16px] border rounded-[8px] border-grayscale-300 text-grayscale-500 text-16 leading-6 tracking-[-1%] hover:border-grayscale-500 focus:outline-2 focus:text-grayscale-900 focus:outline-grayscale-500 focus:outline-offset-[-2px] active:border-2 active:border-grayscale-500 active:text-grayscale-900 disabled:pointer-events-none disabled:bg-grayscale-300 disabled:border-grayscale-300 disabled:text-grayscale-400 disabled:cursor-not-allowed",
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
  const {
    isOpen: contextOpen,
    setIsOpen,
    selected,
    showError,
    DROPDOWN_TRIGGER_ERROR_CLASS,
    type: contextType,
    isUserSelected,
  } = useContext(DropdownContext);
  const isOpen = propOpen ?? contextOpen;
  const handleClick = e => {
    setIsOpen(!isOpen);
    onClick?.(e);
  };

  // 컨텍스트 타입이 있으면 우선 적용, 아니면 프롭의 타입 사용(셀렉트 타입에서만 사용)
  const triggerType = contextType || type;
  // 항상 base 스타일 포함, 타입별 스타일 추가
  // 셀렉트 타입에서 옵션이 선택된 경우 actived
  const isActived = triggerType === "select" && selected && isUserSelected;
  const triggerClass = [
    TYPE_CLASSES.base,
    TYPE_CLASSES[triggerType] !== TYPE_CLASSES.base ? TYPE_CLASSES[triggerType] : "",
    isActived ? "border-2 border-grayscale-500 text-grayscale-900" : "",
    className,
    showError ? DROPDOWN_TRIGGER_ERROR_CLASS : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag
      className={triggerClass}
      onClick={handleClick}
      type={Tag === "button" && !props.type ? "button" : props.type}
      aria-expanded={isOpen}
      {...props}
    >
      {selected?.label ?? children}
      {showArrow && (
        <span
          className={[
            "dropdown-trigger__arrow w-[36px] h-[36px] flex items-center justify-center",
            props.disabled ? "text-grayscale-400" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <img
            src={
              props.disabled ? icArrowDownDisabled : isOpen ? DEFAULT_TOGGLE_ICONS.open : DEFAULT_TOGGLE_ICONS.closed
            }
            alt={isOpen ? "접기" : "펼치기"}
          />
        </span>
      )}
    </Tag>
  );
};

export default DropdownTrigger;
