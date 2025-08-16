import icClose from "../../assets/icClose.svg";
import icCompleted from "../../assets/icCompleted.svg";
import icFailed from "../../assets/icFailed.svg";
import { useEffect, useState } from "react";

const TOAST_STYLE =
  "w-[320px] md:w-[524px] h-[64px] bg-black/80 flex justify-between rounded-[8px] py-[20px] px-[30px] text-white";

/**
 * 토스트 메시지 출력 컴포넌트
 *
 * @param {Object} props - Toast 컴포넌트 props
 * @param {number} [props.duration=3000] - 토스트 유지 시간(ms)
 * @param {string} [props.message=""] - 출력할 메시지
 * @param {"success"|"error"} [props.type="success"] - 토스트 타입 지정
 * @param {number} [props.bottom=20] - 화면 하단으로부터 위치(px)
 * @param {Function} [props.onClose] - onClose 콜백 함수
 * @param {Function} [props.onClick] - onClick 콜백 함수
 * @returns {JSX.Element}
 */
const Toast = ({ duration = 3000, message = "", type = "success", bottom = 20, onClose, onClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    // toast 애니메이션(0.2s)이 끝나면 닫기
    setTimeout(() => onClose?.(), 200);
  };

  const handleCloseClick = e => {
    e.stopPropagation();
    handleClose();
  };

  useEffect(() => {
    const timer = setTimeout(handleClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const iconType = { success: icCompleted, error: icFailed };
  const animationClass = isVisible ? "animate-toast-in" : "animate-toast-out";

  return (
    <div
      className={`${TOAST_STYLE} ${animationClass}`}
      role="alert"
      onClick={onClick}
      style={{ position: "fixed", bottom: `${bottom}px`, left: "50%" }}
    >
      <div className="flex gap-[12px]">
        <img src={iconType[type]} alt={`${type} icon`} className="w-[24px]" />
        {message}
      </div>
      <button aria-label="토스트 닫기" onClick={handleCloseClick}>
        <img src={icClose} alt="close icon" className="w-[24px] cursor-pointer" />
      </button>
    </div>
  );
};

export default Toast;
