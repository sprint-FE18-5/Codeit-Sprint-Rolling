import { createContext, useContext, useState } from "react";

// Dropdown Context
export const DropdownContext = createContext();

// Hook
export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    return {
      selectedValue: "",
      selectedLabel: "",
      handleSelect: () => {},
    };
  }
  return context;
};

/**
 * Dropdown 상태 Provider 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - Provider로 감쌀 하위 컴포넌트들
 * @param {string} [props.defaultValue=""] - 초기 선택값
 * @param {Function} [props.onSelect=() => {}] - 옵션 선택 시 호출되는 콜백 함수
 *
 * @example
 * // 기본 사용법
 * <DropdownProvider onSelect={(value, label) => console.log(value, label)}>
 *   <Dropdown>
 *     <DropdownButton showSelectedValue={true} />
 *     <DropdownList>
 *       <DropdownItem value="1" label="옵션 1" />
 *     </DropdownList>
 *   </Dropdown>
 * </DropdownProvider>
 *
 * @example
 * // 기본값 설정
 * <DropdownProvider defaultValue="option1" onSelect={handleSelect}>
 *   {children}
 * </DropdownProvider>
 */
export const DropdownProvider = ({ children, defaultValue = "", onSelect = () => {} }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [selectedLabel, setSelectedLabel] = useState(defaultValue);

  const handleSelect = (value, label) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    onSelect(value, label);
  };

  const value = {
    selectedValue,
    selectedLabel,
    handleSelect,
  };

  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
};
