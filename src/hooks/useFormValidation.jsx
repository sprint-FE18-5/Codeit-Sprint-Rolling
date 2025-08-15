import { useState, useCallback } from "react";

/**
 * useFormValidation 훅
 * 폼 요소들의 에러 상태와 메시지를 관리하는 공통 훅
 * @param {string} initialValue - 초기값
 * @param {function} validator - 유효성 검사 함수
 */
export const useFormValidation = (initialValue = "", validator = null) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const validate = useCallback(
    (val = value) => {
      if (!validator) return true;

      const validationResult = validator(val);
      if (typeof validationResult === "string") {
        setError(validationResult);
        return false;
      } else if (typeof validationResult === "boolean") {
        setError(validationResult ? "" : "유효하지 않은 값입니다.");
        return validationResult;
      }
      setError("");
      return true;
    },
    [value, validator],
  );

  const handleChange = useCallback(
    newValue => {
      setValue(newValue);
      // 값이 변경되면 에러 클리어 (옵션)
      if (error && newValue) {
        setError("");
      }
      // 이미 터치된 상태라면 즉시 검증
      if (touched) {
        setTimeout(() => validate(newValue), 0);
      }
    },
    [touched, validate, error],
  );

  const handleBlur = useCallback(() => {
    setTouched(true);
    validate();
  }, [validate]);

  const clearError = useCallback(() => {
    setError("");
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
    setError("");
    setTouched(false);
  }, [initialValue]);

  return {
    value,
    error,
    touched,
    hasError: !!error,
    isValid: !error && touched,
    setValue: handleChange,
    setError,
    handleBlur,
    validate,
    clearError,
    reset,
  };
};

/**
 * useFormErrors 훅
 * 여러 폼 필드의 에러를 통합 관리
 */
export const useFormErrors = () => {
  const [errors, setErrors] = useState({});

  const setFieldError = useCallback((fieldName, error) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: error,
    }));
  }, []);

  const clearFieldError = useCallback(fieldName => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  }, []);

  const clearAllErrors = useCallback(() => {
    setErrors({});
  }, []);

  const hasAnyError = Object.values(errors).some(error => !!error);

  return {
    errors,
    hasAnyError,
    setFieldError,
    clearFieldError,
    clearAllErrors,
    getFieldError: fieldName => errors[fieldName] || "",
  };
};
