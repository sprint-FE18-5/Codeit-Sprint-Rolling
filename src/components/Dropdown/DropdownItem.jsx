import { MenuItem } from "@headlessui/react";

/**
 * Dropdown Item 항목
 */
const DropdownItem = ({ label, href, onClick }) => (
  <MenuItem as="li">
    {href ? (
      <a
        href={href}
        className={`block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden`}
      >
        {label}
      </a>
    ) : (
      <button
        onClick={onClick}
        className={`block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden`}
      >
        {label}
      </button>
    )}
  </MenuItem>
);

export default DropdownItem;
