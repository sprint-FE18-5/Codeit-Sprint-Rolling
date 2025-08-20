import { useState } from "react";
import COMMON_BUTTON from "../../../constants/button/BUTTON_COMMON";
import { TOGGLE_CONTAINER, getSelectStyle } from "../../../constants/button/BUTTON_TOGGLE";
import RegularButton from "../RegularButton";

/**
 * 토글 버튼 컴포넌트
 *
 * @param {Object} props
 * @param {string} [props.className] - 새로 추가할 className
 * @param {Object} [props.toggleProps] - 토글 div에 전달할 props (id, aria-* 등)
 * @param {Object} [props.colorBtnProps] - 컬러 버튼에 전달할 props
 * @param {Object} [props.imageBtnProps] - 이미지 버튼에 전달할 props
 *
 * @returns {JSX.Element} 컬러/이미지 중 하나를 선택하는 토글 버튼
 */
const ToggleButton = ({ className = "", toggleProps = {}, colorBtnProps = {}, imageBtnProps = {} }) => {
  const [selectedType, setSelectedType] = useState("color");

  const commonBtnStyle = COMMON_BUTTON;
  const toggleBtnStyle = TOGGLE_CONTAINER;
  const colorBtnStyle = getSelectStyle(selectedType === "color");
  const imageBtnStyle = getSelectStyle(selectedType === "image");

  const handleBtnClick = type => setSelectedType(type);

  return (
    <div className={`${commonBtnStyle} ${toggleBtnStyle} ${className}`} {...toggleProps}>
      <RegularButton {...colorBtnStyle} {...colorBtnProps} onClick={() => handleBtnClick("color")}>
        컬러
      </RegularButton>
      <RegularButton {...imageBtnStyle} {...imageBtnProps} onClick={() => handleBtnClick("image")}>
        이미지
      </RegularButton>
    </div>
  );
};

export default ToggleButton;
