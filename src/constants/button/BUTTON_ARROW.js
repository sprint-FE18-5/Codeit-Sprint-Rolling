const ARROW_BUTTON = {
  style: {
    base: "bg-white/90 border-[1px] border-grayscale-300 shadow-[0_4px_8px_0_rgba(0,0,0,0.08)] backdrop-blur-[4px]",
    hover: "hover:bg-grayscale-100 hover:border-grayscale-300",
    active: "active:bg-grayscale-100 active:border-grayscale-300",
    focus: "focus:border-grayscale-500",
  },
  size: "w-[40px] h-[40px] rounded-full",
};

const getArrowBtnStyle = () => {
  const { style, size } = ARROW_BUTTON;
  return [style.base, style.hover, style.active, style.focus, size].filter(Boolean).join(" ");
};

export { ARROW_BUTTON, getArrowBtnStyle };
