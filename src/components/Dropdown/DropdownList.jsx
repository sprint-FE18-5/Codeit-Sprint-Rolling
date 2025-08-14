import { MenuItems } from "@headlessui/react";

const typeClasses = {
  // 기능별로 자유롭게 타입 추가
  base: "absolute right-0 mt-2 bottom bg-white rounded-[8px] border border-[#ccc] py-[10px] shadow-[0_2px_12px_0px_#00000014] z-[101] focus:outline-0",
  select: "w-full",
  emoji: "w-full p-4 md:p-6 grid grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-2.5",
  share: "w-[140px]",
};

const DropdownList = ({ children, type = "base", className = "" }) => (
  <MenuItems
    as="ul"
    className={`${typeClasses.base} ${type !== "base" ? typeClasses[type] || "" : ""} ${className}`}
    tabIndex={-1}
  >
    {children}
  </MenuItems>
);

export default DropdownList;
