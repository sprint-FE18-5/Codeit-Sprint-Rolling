import { MenuButton } from "@headlessui/react";

/**
 * Dropdown Button 컴포넌트
 */
const DropdownButton = () => {
  return (
    <>
      <MenuButton
        className={`cursor-pointer inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50`}
      ></MenuButton>
    </>
  );
};

export default DropdownButton;
