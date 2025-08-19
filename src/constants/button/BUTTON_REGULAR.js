const SIZE_STYLES = {
  56: `h-[56px] py-[14px] px-[24px] text-[18px] font-[700] rounded-[12px]`,
  40: `h-[40px] py-[8px] px-[16px] text-[16px] font-[400] rounded-[6px]`,
  36: `h-[36px] py-[6px] px-[16px] text-[16px] font-[500] rounded-[6px]`,
  28: `h-[28px] py-[2px] px-[16px] text-[14px] font-[400] rounded-[6px]`,
};

const VARIANT_STYLES = {
  primary: {
    style: {
      base: "bg-purple-600 text-white",
      hover: "hover:bg-purple-700",
      active: "active:bg-purple-800",
      focus: "focus:bg-purple-800 focus:border-[2px] focus:border-purple-900",
    },
    size: SIZE_STYLES,
  },
  secondary: {
    style: {
      base: "bg-white text-purple-700 border-[1px] border-purple-600",
      hover: "hover:bg-purple-100 hover:text-purple-600 hover:border-purple-700",
      active: "active:bg-purple-100 active:text-purple-600 active:border-purple-800",
      focus: "focus:bg-white focus:text-purple-600 focus:border-purple-800",
    },
    size: SIZE_STYLES,
  },
  outlined: {
    style: {
      base: "text-gray-900 border-[1px] border-gray-300",
      hover: "hover:bg-gray-100 hover:border-gray-300",
      active: "active:bg-gray-100 active:border-gray-300",
      focus: "focus:bg-white focus:border-gray-500",
    },
    size: SIZE_STYLES,
  },
  outlinedIcon: {
    style: {
      base: "bg-white text-gray-900 border-[1px] border-gray-300 gap-[4px]",
      hover: "hover:bg-gray-100 hover:border-gray-300",
      active: "active:bg-gray-100 active:border-gray-300",
      focus: "focus:bg-white focus:border-gray-500",
    },
    size: {
      ...SIZE_STYLES,
      28: "h-[32px] py-[6px] px-[8px] text-[14px] font-[400] rounded-[6px]",
    },
  },
};

export { SIZE_STYLES, VARIANT_STYLES };
