const CIRCLE_BUTTON = {
  style: {
    base: "bg-grayscale-500 text-white",
    hover: "hover:bg-grayscale-600",
    active: "active:bg-grayscale-700",
    focus: "focus:bg-grayscale-700 focus:border-[1px] focus:border-grayscale-800",
  },
  size: "w-[56px] h-[56px] rounded-full bg-grayscale-500",
};

const getCircleBtnStyle = () => {
  const { style, size } = CIRCLE_BUTTON;
  return [style.base, style.hover, style.active, style.focus, size].filter(Boolean).join(" ");
};

export { CIRCLE_BUTTON, getCircleBtnStyle };
