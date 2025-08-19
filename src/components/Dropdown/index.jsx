import { useState, useRef, useEffect } from "react";
import DropdownContext from "./DropdownContext";

const DROPDOWN_ERROR_CLASS =
  "dropdown-error text-[#DC3A3A] block text-[12px] line-height-[18px] tracking-[-.5px] mt-[5px]";
const DROPDOWN_TRIGGER_ERROR_CLASS = "border !border-[#DC3A3A]";
const TYPE_CLASSES = {
  base: "dropdown relative inline-block align-top",
  select: "dropdown-select max-w-[320px] w-full",
};

const Dropdown = ({ children, type = "base", errorMsg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showError, setShowError] = useState(false);

  // 외부 클릭 시 드롭다운 닫기 ref, 에러 메시지 관리
  const dropdownRef = useRef(null);
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        // 선택값 없으면 에러 표시(셀렉트 타입에서만 적용)
        if (type === "select" && !selected) {
          setShowError(true);
        } else {
          setShowError(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, type, selected]);

  useEffect(() => {
    if (type === "select" && selected) {
      setShowError(false);
    }
  }, [type, selected]);

  // 드롭다운 열림/닫힘 상태 및 선택된 항목 관리
  const value = {
    isOpen,
    setIsOpen,
    selected,
    setSelected,
    showError, // 트리거에서 에러 스타일 적용용
    DROPDOWN_TRIGGER_ERROR_CLASS,
    type, // Context로 type 전달
  };

  return (
    <DropdownContext.Provider value={value}>
      <div ref={dropdownRef} className={[TYPE_CLASSES.base, type === "select" ? TYPE_CLASSES.select : ""].join(" ")}>
        {children}
        {type === "select" && showError && errorMsg && <span className={DROPDOWN_ERROR_CLASS}>{errorMsg}</span>}
      </div>
    </DropdownContext.Provider>
  );
};

export { Dropdown };
export { default as DropdownTrigger } from "./DropdownTrigger";
export { default as DropdownContent } from "./DropdownContent";
export { default as DropdownItem } from "./DropdownItem";
