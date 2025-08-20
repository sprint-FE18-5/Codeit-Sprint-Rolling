import { useContext } from "react";
import DropdownContext from "./DropdownContext";

const TYPE_CLASSES = {
  base: "dropdown-item relative text-left block w-full min-h-[50px] px-4 py-3 text-16 leading-[26px] tracking-[-0.01em] text-grayscale-900 hover:bg-grayscale-100 duration-100 cursor-pointer",
  select: "dropdown-item-select",
};

const DropdownItem = ({
  as: Tag = "button",
  onClick,
  children,
  className = "",
  type = "base", // base, select
  value, // select 타입 선택 시 실제 전달되는 벨류 값
  ...props
}) => {
  //드롭다운 컨텍스트에서 상태, 함수 가져옴
  const { setSelected, setIsOpen, type: contextType } = useContext(DropdownContext);
  // 컨텍스트에 타입이 있으면 우선 적용, 없으면 프롭 타입 사용
  const itemType = contextType || type;

  const handleClick = e => {
    if (itemType === "select") {
      setSelected({ value: value ?? children, label: children });
    }
    setIsOpen(false);
    onClick?.(itemType === "select" ? value ?? children : children, e);
  };

  // as 프롭이 있으면 해당 태그 사용, 없으면 기본 버튼 태그
  const TagToUse = Tag;
  // custom 타입이면 base 스타일 없이 className만 적용
  const itemClass =
    itemType === "custom"
      ? className
      : [TYPE_CLASSES.base, TYPE_CLASSES[itemType] !== TYPE_CLASSES.base ? TYPE_CLASSES[itemType] : "", className]
          .filter(Boolean)
          .join(" ");
  return (
    <li>
      <TagToUse className={itemClass} onClick={handleClick} {...props}>
        {children}
      </TagToUse>
    </li>
  );
};

export default DropdownItem;
