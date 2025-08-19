// 토글 영역 스타일
const TOGGLE_CONTAINER = "w-[236px] md:w-[244px] h-[40px] bg-gray-100 rounded-[6px] flex";

// 토글 상태(on/off) 스타일 - Button 컴포넌트의 "secondary", "outlined" 스타일 사용
const TOGGLE_STATE = {
  on: { variant: "secondary", className: "font-[700] border-[2px]" },
  off: { variant: "outlined", className: "border-none" },
};

const getSelectStyle = isSelected => (isSelected ? TOGGLE_STATE.on : TOGGLE_STATE.off);

export { TOGGLE_CONTAINER, getSelectStyle };
