// 버튼 공통 스타일
const STATE_DISABLED = [
  "disabled:bg-gray-300",
  "disabled:border-gray-300",
  "disabled:text-white",
  "disabled:cursor-not-allowed",
].join(" ");

const COMMON_BUTTON = ["cursor-pointer flex items-center justify-center", STATE_DISABLED].join(" ");

export default COMMON_BUTTON;
