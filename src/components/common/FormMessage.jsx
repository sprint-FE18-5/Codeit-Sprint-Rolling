import React from "react";

/**
 * FormMessage 컴포넌트
 * 폼 요소들의 에러 메시지를 표시하는 공통 컴포넌트
 * @param {string|React.ReactNode} message - 표시할 메시지
 * @param {string} className - 추가 CSS 클래스
 * @param {boolean} show - 메시지 표시 여부
 */

const FormMessage = ({ message, className = "", show = true }) => {
  if (!show || !message) return null;

  return (
    <span className={`text-red-600 text-sm text-[#DC3A3A] text-xs leading-[18px] tracking-[-0.5px] ${className}`}>
      {message}
    </span>
  );
};

export default FormMessage;
