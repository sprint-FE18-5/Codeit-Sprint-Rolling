import { MenuItems } from "@headlessui/react";

/**
 * Dropdown List Wrapper 컴포넌트
 */
const DropdownList = () => {
  return (
    <>
      <MenuItems
        transition
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in`}
      ></MenuItems>
    </>
  );
};

export default DropdownList;
