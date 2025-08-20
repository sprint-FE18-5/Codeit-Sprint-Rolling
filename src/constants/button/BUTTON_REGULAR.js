const SIZE_STYLES = {
  56: `h-[56px] py-[14px] px-[24px] font-18-bold rounded-[12px]`,
  40: `h-[40px] py-[8px] px-[16px] font-16-regular rounded-[6px]`,
  36: `h-[36px] py-[6px] px-[16px] font-16-regular rounded-[6px]`,
  28: `h-[28px] py-[2px] px-[16px] font-14-regular rounded-[6px]`,
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
      base: "text-gray-900 border-[1px] border-grayscale-300",
      hover: "hover:bg-grayscale-100 hover:border-grayscale-300",
      active: "active:bg-grayscale-100 active:border-grayscale-300",
      focus: "focus:bg-white focus:border-grayscale-500",
    },
    size: SIZE_STYLES,
  },
  outlinedIcon: {
    style: {
      base: "bg-white text-grayscale-900 border-[1px] border-grayscale-300 gap-[4px]",
      hover: "hover:bg-grayscale-100 hover:border-grayscale-300",
      active: "active:bg-grayscale-100 active:border-grayscale-300",
      focus: "focus:bg-white focus:border-grayscale-500",
    },
    size: {
      ...SIZE_STYLES,
      28: "h-[32px] py-[6px] px-[8px] font-14-regular rounded-[6px]",
    },
  },
};

const getRegularBtnStyle = ({ variant, size, isSquare }) => {
  const variantStyle = VARIANT_STYLES[variant].style;
  let sizeStyle = VARIANT_STYLES[variant].size[size] || SIZE_STYLES[40];

  // isSquare이면, px를 py와 같은 값으로 변경
  if (isSquare) {
    const pyVal = sizeStyle.match(/py-\[(\d+)px\]/)[1];
    sizeStyle = sizeStyle.replace(/px-\[\d+px\]/, `px-[${pyVal}px]`);
  }

  const btnStyle = [variantStyle.base, variantStyle.hover, variantStyle.active, variantStyle.focus, sizeStyle]
    .filter(Boolean)
    .join(" ");
  return btnStyle;
};

export { SIZE_STYLES, VARIANT_STYLES, getRegularBtnStyle };
