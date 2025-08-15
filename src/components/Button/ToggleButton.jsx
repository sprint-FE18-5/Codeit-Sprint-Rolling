import { useState } from "react";
import Button from ".";

// 토글 영역 스타일
const CONTAINER_STYLE = "w-[236px] md:w-[244px] h-[40px] bg-gray-100 rounded-[6px] flex";

// 토글 상태(on/off) 스타일 - Button 컴포넌트의 "secondary", "outlined" 스타일 사용
const STATE_SELECT = {
  on: { variant: "secondary", className: "font-[700] border-[2px]" },
  off: { variant: "outlined", className: "border-none" },
};

const getSelectStyle = isSelected => (isSelected ? STATE_SELECT.on : STATE_SELECT.off);

/**
 * 토글 버튼 컴포넌트
 *
 * @param {Object} props
 * @param {string} [props.className] - 새로 추가할 className
 * @returns {JSX.Element} 컬러/이미지 중 하나를 선택하는 토글 버튼
 */
const ToggleButton = ({ className = "" }) => {
  const [selectedType, setSelectedType] = useState("color");
  const colorBtnProps = getSelectStyle(selectedType === "color");
  const imgBtnProps = getSelectStyle(selectedType === "image");

  const handleBtnClick = type => setSelectedType(type);

  return (
    <div className={`toggleContainer ${CONTAINER_STYLE} ${className}`}>
      <Button {...colorBtnProps} onClick={() => handleBtnClick("color")}>
        컬러
      </Button>
      <Button {...imgBtnProps} onClick={() => handleBtnClick("image")}>
        이미지
      </Button>
    </div>
  );
};

export default ToggleButton;
