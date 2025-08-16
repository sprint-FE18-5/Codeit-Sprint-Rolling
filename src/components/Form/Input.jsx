import { forwardRef } from "react";

// Input 스타일
const INPUT_STYLES = {
  base: "w-full h-[50px] px-[16px] rounded-[8px] text-base leading-6 tracking-[-1%] focus:outline-2 focus:outline-offset-[-2px] text-[#181818] placeholder:text-[#555]",
  normal:
    "border border-[#cccccc] hover:border-gray-600 focus:outline-gray-600 focus:placeholder:text-[#181818] active:border-2 active:border-gray-600 active:placeholder:text-[#181818]",
  active: "border-2 border-gray-600 hover:border-gray-600 focus:outline-gray-600 placeholder:text-[#181818]",
  error:
    "border border-[#DC3A3A] hover:border-[#DC3A3A] focus:outline-[#DC3A3A] placeholder:text-[#181818] active:border-2 active:border-[#DC3A3A]",
  disabled:
    "pointer-events-none text-[#999999] bg-[#f6f6f6] border border-[#cccccc] cursor-not-allowed placeholder:text-[#999999]",
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
 *   value={name}
 *   name="username"
 *   placeholder="이름을 입력해주세요"
 *   onChange={(e) => setName(e.target.value)}
 * />
 *
 * @example 에러 상태
 * <Input
 *   value={name}
 *   name="error-field"
 *   placeholder="이름을 입력해주세요"
 *   onChange={handleChange}
 *   errorMsg="이름을 입력해 주세요"
 * />
 *
 * @example ref 사용
 * const inputRef = useRef();
 * <Input
 *   ref={inputRef}
 *   name="password"
 *   type="password"
 *   placeholder="비밀번호를 입력하세요"
 * />
 *
 * @example 비활성화 상태
 * <Input
 *   name="disabled-field"
 *   type="text"
 *   placeholder="비활성화 테스트"
 *   disabled={true}
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
        {errorMsg && (
          <span className="mt-[4px] text-[12px] leading-[18px] tracking-[-0.5px] text-[#DC3A3A]">{errorMsg}</span>
        )}
      </div>
    );
  },
);

export default Input;
