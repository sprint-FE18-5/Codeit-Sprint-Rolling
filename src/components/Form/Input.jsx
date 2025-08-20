import { forwardRef } from "react";

// Input 스타일
const INPUT_STYLES = {
  base: "w-full h-[50px] px-[16px] rounded-[8px] text-16 leading-6 tracking-[-1%] focus:outline-2 focus:outline-offset-[-2px] text-grayscale-900 placeholder:text-grayscale-500 duration-100",
  normal:
    "border border-grayscale-300 hover:border-grayscale-500 focus:outline-grayscale-500 focus:placeholder:text-grayscale-900 active:border-2 active:border-grayscale-500 text-grayscale-900 active:placeholder:text-grayscale-900",
  active:
    "border-2 border-grayscale-500 hover:border-grayscale-500 focus:outline-grayscale-500 placeholder:text-grayscale-900",
  error:
    "border border-error hover:border-error focus:outline-error placeholder:text-grayscale-900 active:border-2 active:border-error",
  disabled:
    "pointer-events-none text-grayscale-400 bg-grayscale-100 border border-grayscale-300 cursor-not-allowed disabled:placeholder:text-grayscale-400",
};

/**
 * 폼에서 사용되는 Input 컴포넌트
 * @param {string} [type="text"] - input 타입
 * @param {string} name - name 속성
 * @param {string} [id] - id 속성 (없으면 name 값을 사용)
 * @param {string} placeholder - placeholder
 * @param {string} value - 벨류 값
 * @param {function} onChange - 값 변경 핸들러
 * @param {string} [errorMsg] - 에러 메시지
 * @param {boolean} [disabled=false] - 비활성화
 * @param {string} [className=""] - 추가 CSS 클래스
 * @param {function} [onBlur] - 포커스 아웃 시 호출되는 함수
 * @param {Object} ref - React ref 객체
 * @example 기본 사용법
 * <Input
 *   type="text"
 *   name="name"
 *   placeholder="이름을 입력해주세요."
 *   value={value}
 *   onChange={handleChange}
 *   onBlur={handleBlur}
 *   disabled={false}
 *   errorMsg="이름을 입력해주세요."
 * />
 */
const Input = forwardRef(
  (
    {
      type = "text",
      name,
      id,
      placeholder,
      value,
      onChange,
      errorMsg,
      disabled = false,
      className = "",
      onBlur,
      ...props
    },
    ref,
  ) => {
    // id가 없으면 name 값을 동일하게 사용
    const inputId = id || name;
    const hasValue = value && value.length > 0;

    return (
      <div className={`input-field w-full ${className}`}>
        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`${INPUT_STYLES.base} ${
            disabled
              ? INPUT_STYLES.disabled
              : errorMsg
              ? INPUT_STYLES.error
              : hasValue
              ? INPUT_STYLES.active
              : INPUT_STYLES.normal
          }`}
          {...props}
        />
        {errorMsg && <span className="mt-[4px] text-12 tracking-[-0.5px] text-error">{errorMsg}</span>}
      </div>
    );
  },
);

export default Input;
