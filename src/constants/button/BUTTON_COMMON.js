// 버튼 공통 스타일
const STATE_DISABLED = [
  "disabled:bg-grayscale-300",
  "disabled:border-grayscale-300",
  "disabled:text-white",
  "disabled:cursor-not-allowed",
].join(" ");

const COMMON_BUTTON = ["font-16-regular cursor-pointer flex items-center justify-center", STATE_DISABLED].join(" ");

export default COMMON_BUTTON;
